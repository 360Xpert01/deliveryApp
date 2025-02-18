import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import OrderCard from '../../components/ordercard';

const backButton = require('../../../assets/backbutton.png');

const ActiveLoads = () => {
  const navigation = useNavigation();

  const users = [
    { codID: '11,999', location: 'Gulistan-e-Jauhor', Id: 'KHI 123545689713' },
    { codID: '9,900', location: 'Gulistan-e-Jauhor', Id: 'KHI 123545689713' },
  ];
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backButton} style={styles.backIcon} />
          <Text style={styles.backText}>Active Loads</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <FlatList
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <OrderCard {...item} navigation={navigation} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 20,
  },
  backIcon: {
    width: 80,
    height: 80,
    alignItems: "center",
  },
  backText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ActiveLoads;
