import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline, AnimatedRegion } from "react-native-maps";
import HelmetIcon from "./HelmetIcon";
import helmetMarker from "../assest/marker1.png";

const Map = ({ showHelmet = true, showLine = true, pickupPoints = [] }) => {
  const origin = { latitude: 24.910402, longitude: 67.092132 }; // 360 Xpert
  const destination = { latitude: 24.867326, longitude: 67.056164 }; // McDonald's Tariq Road

  const routePoints = [origin, ...pickupPoints, destination];

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

    helmetPosition.timing({
      latitude: routePoints[index + 1].latitude,
      longitude: routePoints[index + 1].longitude,
      duration: 3000, 
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        animateHelmet(index + 1);
      }, Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000); 
    });
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
            <HelmetIcon width={30} height={30} />
          </Marker.Animated>
        )}

        {/* Curved Path */}
        {showLine && (
          <Polyline
            coordinates={curvedPolyline}
            strokeWidth={5}
            strokeColor="green"
          />
        )}

        {/* Pickup & Drop-off Markers */}
        <Marker coordinate={origin} title="Pickup: 360 Xpert" />
        <Marker coordinate={destination} title="Drop-off: McDonald's Tariq Road" />

        {/* Additional Pickup Points */}
        {pickupPoints.map((point, index) => (
          <Marker
            key={index}
            style={styles.marker}
            coordinate={point}
            title={`Pickup Point ${index + 1}`}
          >
            <Image source={helmetMarker} style={styles.helmetmarker} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  marker: { height: 50, width: 50 },
  helmetmarker:{ width: 30, height: 30 }
});

export default Map;
