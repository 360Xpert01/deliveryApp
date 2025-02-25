import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline, AnimatedRegion } from "react-native-maps";
import HelmetIcon from "./HelmetIcon";
import helmetMarker from "../assest/marker1.png";

const Map = ({ showHelmet = true, showLine = true, pickupPoints = [], staticHelmet = false  }) => {
  const origin = { latitude: 24.910402, longitude: 67.092132 }; // 360 Xpert
  const destination = { latitude: 24.867326, longitude: 67.056164 }; // McDonald's Tariq Road
  const routePoints = [origin, ...pickupPoints, destination];

  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);
  const markerScales = useRef(pickupPoints.map(() => new Animated.Value(1))).current;
  const helmetPosition = useRef(new AnimatedRegion(routePoints[0])).current;

 useEffect(() => {
  if (showHelmet && !staticHelmet && routePoints.length > 1) {
    animateHelmet(0);
  }
}, [showHelmet, staticHelmet]);


  const animateHelmet = (index) => {
    if (index >= routePoints.length - 1) return;

    const nextPoint = routePoints[index + 1];

    helmetPosition.timing({
      latitude: nextPoint.latitude,
      longitude: nextPoint.longitude,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      onHelmetReachMarker(index);
      let stopTime = pickupPoints.some((p) => p.latitude === nextPoint.latitude && p.longitude === nextPoint.longitude)
        ? 4000
        : Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;

      setTimeout(() => {
        resetMarkerZoom(index);
        animateHelmet(index + 1);
      }, stopTime);
    });
  };

  const onHelmetReachMarker = (index) => {
    setActiveMarkerIndex(index + 1);
    if (index > 0 && index <= pickupPoints.length) {
      Animated.timing(markerScales[index - 1], {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const resetMarkerZoom = (index) => {
    if (index > 0 && index <= pickupPoints.length) {
      Animated.timing(markerScales[index - 1], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  // Function to generate curved path points using Bézier curve
  const getCurvedRoute = (points) => {
    if (points.length < 2) return points;

    let curvedPoints = [];
    for (let i = 0; i < points.length - 1; i++) {
      let p1 = points[i];
      let p2 = points[i + 1];

      // Create a control point between two locations for smoothness
      let controlPoint = {
        latitude: (p1.latitude + p2.latitude) / 2 + 0.002, // Adjust for curvature
        longitude: (p1.longitude + p2.longitude) / 2 - 0.002, // Adjust for curvature
      };

      // Generate smooth intermediate points
      for (let t = 0; t <= 1; t += 0.1) {
        let latitude =
          Math.pow(1 - t, 2) * p1.latitude +
          2 * (1 - t) * t * controlPoint.latitude +
          Math.pow(t, 2) * p2.latitude;

        let longitude =
          Math.pow(1 - t, 2) * p1.longitude +
          2 * (1 - t) * t * controlPoint.longitude +
          Math.pow(t, 2) * p2.longitude;

        curvedPoints.push({ latitude, longitude });
      }
    }
    return curvedPoints;
  };

  const curvedRoute = getCurvedRoute(routePoints);

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
        {showHelmet && (
  staticHelmet ? (
    <Marker coordinate={routePoints[0]} title="Static Helmet">
      <HelmetIcon width={30} height={30} />
    </Marker>
  ) : (
    <Marker.Animated coordinate={helmetPosition} title="Helmet Rider">
      <HelmetIcon width={30} height={30} />
    </Marker.Animated>
  )
)}


        {showLine && <Polyline coordinates={curvedRoute} strokeWidth={5} strokeColor="green" />}

        {/* <Marker coordinate={origin} title="Pickup: 360 Xpert" />
        <Marker coordinate={destination} title="Drop-off: McDonald's Tariq Road" />  */}

        {pickupPoints.map((point, index) => (
          <Marker key={index} coordinate={point} title={`Pickup Point ${index + 1}`}>
            <Animated.View
              style={[styles.markerContainer, { transform: [{ scale: markerScales[index] }] }]}
            >
              {activeMarkerIndex === index + 1 && <View style={styles.halo} />}
              <Image source={helmetMarker} style={styles.helmetMarker} />
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
  helmetMarker: { width: 30, height: 30 },
});

export default Map;
