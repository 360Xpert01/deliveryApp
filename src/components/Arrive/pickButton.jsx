import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../theme/themeContext';
import { useNavigation } from '@react-navigation/native';

const PickButton = () => {
   const { theme } = useTheme();
    const navigation = useNavigation(); 
   
     const handleNew = () => {
       navigation.navigate('AnotherOrder'); 
     };

  return (
    <View>
      <TouchableOpacity style={[styles.btn, { backgroundColor: theme.button }]}
      onPress={handleNew}>
        <Text style={styles.btnText}>+ Pick Delivery</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  btn: {
    width: 150,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50
  },
  btnText: {
    color: "white",
    fontSize: 17,
    fontWeight: 600,
  }
})
export default PickButton