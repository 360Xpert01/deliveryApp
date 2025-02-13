import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/themeContext';

const Deliver = ({ onPress }) => {
  const { theme } = useTheme();

  return (
    <View>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: theme.button }]}
        onPress={onPress}
      >
        <Text style={styles.btnText}>Delivered</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 180,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 50
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  }
});

export default Deliver;
