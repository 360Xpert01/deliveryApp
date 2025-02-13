import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import HelmetIcon from "./helmit";
import { useTheme } from "../theme/themeContext";
import themes from "../theme/theme";


const Map = ({ showHelmet, animate, setAnimate }) => {
  const [region, setRegion] = useState(null);
  const [helmetPosition, setHelmetPosition] = useState(null);
  const intervalRef = useRef(null);

  // **Pickup and Drop-off Coordinates**
  const origin = { latitude: 24.926844, longitude: 67.101119 };  // 14th Street Pizza Co
  const destination = { latitude: 24.923499, longitude: 67.097865 }; // 360Xpert Solutions

  // **Waypoints to Simulate Curved Route**
  const waypoints = [
    { latitude: 24.925500, longitude: 67.099500 },
    { latitude: 24.924000, longitude: 67.098200 }
  ];

  useEffect(() => {
    setRegion({
      latitude: (origin.latitude + destination.latitude) / 2,
      longitude: (origin.longitude + destination.longitude) / 2,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    setHelmetPosition(origin);
  }, []);

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        let step = 0;
        intervalRef.current = setInterval(() => {
          step += 0.01;
          const newLat = origin.latitude + (destination.latitude - origin.latitude) * step;
          const newLng = origin.longitude + (destination.longitude - origin.longitude) * step;

          if (step >= 1) {
            clearInterval(intervalRef.current);
            setAnimate(false);
          } else {
            setHelmetPosition({ latitude: newLat, longitude: newLng });
          }
        }, 100);
      }, 2000);

      return () => clearInterval(intervalRef.current);
    }
  }, [animate]);

  return (
    <View style={styles.container}>
      {region ? (
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={region}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            waypoints={waypoints}
            apikey={process.env.API_KEY}
            strokeWidth={5}
            strokeColor="#00AA2F"
          />

          <Marker coordinate={origin} title="Pickup: 14th Street Pizza Co">
            <View style={styles.customMarker}>
              <View style={styles.innerMarker} />
            </View>
          </Marker>
          <Marker coordinate={destination} title="Drop-off: 360Xpert Solutions">
            <View style={styles.customDropMarker}>
              <View style={styles.innerDropMarker} />
            </View>
          </Marker>

          {showHelmet && helmetPosition && (
            <Marker coordinate={helmetPosition} title="Rider Location">
              <HelmetIcon width={40} height={40} />
            </Marker>
          )}
        </MapView>
      ) : (
        <ActivityIndicator size="large" color="green" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },

  customMarker: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: themes.greenLight.success,
    alignItems: "center",
    justifyContent: "center",
  },
  customDropMarker: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: themes.greenLight.error,
    alignItems: "center",
    justifyContent: "center",
  },
  innerMarker: {
    width: 14,
    height: 14,
    backgroundColor: themes.greenLight.success,
    borderRadius: 50,
  },
  innerDropMarker: {
    width: 14,
    height: 14,
    backgroundColor: themes.greenLight.error,
    borderRadius: 50,
  },
});

export default Map;
