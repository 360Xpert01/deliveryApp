import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActiveCard from '../../components/multipleOrder/active Card';

const backButton = require('../../../assets/backbutton.png');

const ActiveLoads = ({ route }) => {
  const navigation = useNavigation();
  const selectedOrder = route?.params?.selectedOrder || null;

  const users = [
    { codId: '11,999', location: 'Gulistan-e-Jauhor', orderId: 'KHI 123545689713' },
    { codId: '1,000', location: 'Gulistan-e-Jauhor', orderId: 'KHI 646543218798' }
  ];

  const [activeOrder, setActiveOrder] = useState(selectedOrder || users[0]);

  const handleSelectOrder = (order) => {
    setActiveOrder(order);
  };

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('MultipleOrder', { selectedOrder: activeOrder })}
        >
          <Image source={backButton} style={styles.backIcon} />
          <Text style={styles.backText}>Active Loads</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.orderId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectOrder(item)}>
              <ActiveCard
                codId={item.codId}
                location={item.location}
                orderId={item.orderId}
                style={activeOrder.orderId === item.orderId ? styles.activeCard : {}}
              />
            </TouchableOpacity>
          )}
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
    width: 40,
    height: 40,
  },
  backText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  activeCard: {
    borderColor: '#00B120',
    borderWidth: 2
  }
});

export default ActiveLoads;
