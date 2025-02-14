import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";

const Map = () => {
  // Pickup and Drop-off Coordinates
  const origin = { latitude: 24.926844, longitude: 67.101119 };  
  const destination = { latitude: 24.923499, longitude: 67.097865 }; 

  // *Generate Curved Path Using Quadratic Bézier Curve*
  const generateCurve = (start, end) => {
    let curvePoints = [];
    const midPoint = {
      latitude: (start.latitude + end.latitude) / 2 + 0.002,  // Adjust upward for curve
      longitude: (start.longitude + end.longitude) / 2,
    };

    for (let t = 0; t <= 1; t += 0.1) {
      const lat = (1 - t) * (1 - t) * start.latitude +
                  2 * (1 - t) * t * midPoint.latitude +
                  t * t * end.latitude;

      const lng = (1 - t) * (1 - t) * start.longitude +
                  2 * (1 - t) * t * midPoint.longitude +
                  t * t * end.longitude;

      curvePoints.push({ latitude: lat, longitude: lng });
    }
    return curvePoints;
  };

  const curvedPolyline = generateCurve(origin, destination);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE} 
        initialRegion={{
          latitude: (origin.latitude + destination.latitude) / 2,
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Curved Polyline */}
        <Polyline 
          coordinates={curvedPolyline} 
          strokeWidth={5} 
          strokeColor="green" 
        />

        {/* Markers */}
        <Marker coordinate={origin} title="Pickup: 14th Street Pizza Co" />
        <Marker coordinate={destination} title="Drop-off: 360Xpert Solutions" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default Map;
