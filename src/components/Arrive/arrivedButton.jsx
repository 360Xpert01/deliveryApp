import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/themeContext';
import { useNavigation } from '@react-navigation/native';

const ArrivedButton = () => {
  const { theme } = useTheme();
  const navigation = useNavigation(); 

  const handleArrived = () => {
    navigation.navigate('Pick'); 
  };

  return (
    <View>
      <TouchableOpacity 
        style={[styles.btn, { backgroundColor: theme.button }]} 
        onPress={handleArrived} 
      >
        <Text style={styles.btnText}>Arrived</Text>
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

export default ArrivedButton;
