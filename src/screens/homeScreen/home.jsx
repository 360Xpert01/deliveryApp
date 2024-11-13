import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon set

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen</Text>
    </View>
  );
};

HomeScreen.options = ({ navigation }) => ({
  title: 'Home', 
  headerRight: () => (
    <Icon
      name="bell"
      size={24}
      color="black"
      onPress={() => navigation.navigate('Notifications')} 
      style={{ marginRight: 10 }}
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default HomeScreen;
