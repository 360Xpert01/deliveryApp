import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/themeContext';

const ArriveButton = () => {
  const { theme } = useTheme();
  const navigation = useNavigation(); 

  const handleArrive = () => {
    navigation.navigate('Arrived'); 
  };

  

  return (
    <View>
      <TouchableOpacity 
        style={[styles.btn, { backgroundColor: theme.button }]} 
        onPress={handleArrive} 
      >
        <Text style={styles.btnText}>Arrive</Text>
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

export default ArriveButton;
