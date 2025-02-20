import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline, AnimatedRegion } from "react-native-maps";
import HelmetIcon from "./HelmetIcon";
import helmetMarker from "../assest/marker1.png";

const Map = ({ showHelmet = true, showLine = true, pickupPoints = [] }) => {
  const origin = { latitude: 24.910402, longitude: 67.092132 }; // 360 Xpert
  const destination = { latitude: 24.867326, longitude: 67.056164 }; // McDonald's Tariq Road

  const routePoints = [origin, ...pickupPoints, destination];

  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);
  const markerScales = useRef(pickupPoints.map(() => new Animated.Value(1))).current; // Animated scale values for markers

  const generateCurve = (start, end) => {
    let curvePoints = [];
    const midLat = (start.latitude + end.latitude) / 2;
    const midLng = (start.longitude + end.longitude) / 2;
    const dx = end.longitude - start.longitude;
    const dy = end.latitude - start.latitude;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const curveHeight = distance * 0.3;
    const perpendicularLat = (dx * curveHeight) / distance;
    const perpendicularLng = (-dy * curveHeight) / distance;
    const curvedMidpoint = {
      latitude: midLat + perpendicularLat,
      longitude: midLng + perpendicularLng,
    };

    for (let t = 0; t <= 1; t += 0.05) {
      const lat =
        (1 - t) * (1 - t) * start.latitude +
        2 * (1 - t) * t * curvedMidpoint.latitude +
        t * t * end.latitude;

      const lng =
        (1 - t) * (1 - t) * start.longitude +
        2 * (1 - t) * t * curvedMidpoint.longitude +
        t * t * end.longitude;

      curvePoints.push({ latitude: lat, longitude: lng });
    }

    curvePoints.push(end);
    return curvePoints;
  };

  const curvedPolyline = routePoints.reduce((acc, point, index, array) => {
    if (index < array.length - 1) {
      acc.push(...generateCurve(point, array[index + 1]));
    }
    return acc;
  }, []);

  const helmetPosition = useRef(new AnimatedRegion(routePoints[0])).current;

  useEffect(() => {
    if (showHelmet && routePoints.length > 1) {
      animateHelmet(0);
    }
  }, [showHelmet]);

  const animateHelmet = (index) => {
    if (index >= routePoints.length - 1) return;

    const nextPoint = routePoints[index + 1];

    helmetPosition.timing({
      latitude: nextPoint.latitude,
      longitude: nextPoint.longitude,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      setActiveMarkerIndex(index + 1); // Set the active marker index
      zoomMarker(index); // Zoom in the marker

      if (pickupPoints.some((p) => p.latitude === nextPoint.latitude && p.longitude === nextPoint.longitude)) {
        setTimeout(() => {
          animateHelmet(index + 1);
          resetMarkerZoom(index); // Reset marker zoom
        }, 4000);
      } else {
        setTimeout(() => {
          animateHelmet(index + 1);
          resetMarkerZoom(index); // Reset marker zoom
        }, Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000);
      }
    });
  };

  // Function to zoom the marker (increase scale)
  const zoomMarker = (index) => {
    if (index > 0 && index <= pickupPoints.length) {
      Animated.timing(markerScales[index - 1], {
        toValue: 1.5, // Increase size
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  // Function to reset marker zoom (restore original size)
  const resetMarkerZoom = (index) => {
    if (index > 0 && index <= pickupPoints.length) {
      Animated.timing(markerScales[index - 1], {
        toValue: 1, // Restore original size
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: (origin.latitude + destination.latitude) / 2,
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Helmet with Smooth Animation */}
        {showHelmet && (
          <Marker.Animated coordinate={helmetPosition} title="Helmet Rider">
            <HelmetIcon width={20} height={20} />
          </Marker.Animated>
        )}

        {/* Curved Path */}
        {showLine && (
          <Polyline coordinates={curvedPolyline} strokeWidth={5} strokeColor="green" />
        )}

        {/* Pickup & Drop-off Markers */}
        <Marker coordinate={origin} title="Pickup: 360 Xpert" />
        <Marker coordinate={destination} title="Drop-off: McDonald's Tariq Road" />

        {/* Additional Pickup Points with Zoom Effect */}
        {pickupPoints.map((point, index) => (
          <Marker key={index} coordinate={point} title={`Pickup Point ${index + 1}`}>
            <Animated.View
              style={[
                styles.markerContainer,
                { transform: [{ scale: markerScales[index] }] }, // Apply scaling
              ]}
            >
              {/* White Halo Effect */}
              {activeMarkerIndex === index + 1 && <View style={styles.halo} />}
              <Image source={helmetMarker} style={[styles.helmetMarker, { zIndex: 10 }]} />
            </Animated.View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  halo: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: -1,
  },
  helmetMarker: { width: 30, height: 30 },
});

export default Map;
