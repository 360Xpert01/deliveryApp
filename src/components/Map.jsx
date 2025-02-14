import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline, AnimatedRegion } from "react-native-maps";


const Map = ({ showHelmet = true, showLine = true }) => {
  const origin = { latitude: 24.910402, longitude: 67.092132 }; // 360 Xpert
  const destination = { latitude: 24.867326, longitude: 67.056167 }; // McDonald's Tariq Road

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

  const curvedPolyline = generateCurve(origin, destination);

  // 🔥 Use AnimatedRegion for smooth movement
  const helmetPosition = useRef(
    new AnimatedRegion({
      latitude: origin.latitude,
      longitude: origin.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    })
  ).current;

  useEffect(() => {
    if (showHelmet) {
      helmetPosition.timing({
        latitude: destination.latitude,
        longitude: destination.longitude,
        duration: 5000, // Smooth animation in 5 seconds
        useNativeDriver: false,
      }).start();
    }
  }, [showHelmet]);

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
          <Marker.Animated
            coordinate={helmetPosition}
            title="Helmet Rider"
            pinColor="blue"
          />
        )}

        {/* Curved Path */}
        {showLine && <Polyline coordinates={curvedPolyline} strokeWidth={5} strokeColor="green" />}

        {/* Pickup & Drop-off Markers */}
        <Marker coordinate={origin} title="Pickup: 360 Xpert" />
        <Marker coordinate={destination} title="Drop-off: McDonald's Tariq Road" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default Map;









