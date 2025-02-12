import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
// import { API_KEY } from "@env";


const Map = () => {
  const [region, setRegion] = useState(null);
  console.log("Loaded API Key in App.jsx:", process.env.API_KEY)

  const origin = { latitude: 24.926294, longitude: 67.112903 };
  const destination = { latitude: 24.930351, longitude: 67.115456 };

  useEffect(() => {
    setRegion({
      latitude: (origin.latitude + destination.latitude) / 2,
      longitude: (origin.longitude + destination.longitude) / 2,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  }, []);

  return (
    <View style={styles.container}>
      {region ? (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={process.env.API_KEY}
            strokeWidth={4}
            strokeColor="green"
          />

          <Marker coordinate={origin} title="Pickup Location" />
          <Marker coordinate={destination} title="Dropoff Location" />
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
});

export default Map;
