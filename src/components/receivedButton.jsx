import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themes from '../theme/theme';
 

const ReceivedButton = () => {
  const navigation = useNavigation(); 

  const handleReceived = () => {
    navigation.navigate("CustomerDrawer", { screen: "All Order" });
  };

  return (
    <View>
      <TouchableOpacity 
        style={[styles.btn, { backgroundColor: themes.greenLight.button }]} 
        onPress={handleReceived} 
      >
        <Text style={styles.btnText}>Received</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 180,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 50,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600', 
  },
});

export default ReceivedButton;
