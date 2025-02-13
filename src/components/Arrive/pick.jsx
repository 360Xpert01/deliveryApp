import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/themeContext';
import { useNavigation } from '@react-navigation/native';

const Pick = ({ onPress }) => {
  const { theme } = useTheme();

  return (
    <View>
      <TouchableOpacity 
        style={[styles.btn, { backgroundColor: theme.button }]} 
        onPress={onPress} 
      >
        <Text style={styles.btnText}>Pick</Text>
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

export default Pick;
