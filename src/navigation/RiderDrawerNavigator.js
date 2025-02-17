import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import BookingHistory from '../screens/bookingScreen/bookingHistory';
import Wallet from '../screens/walletScreen/wallet';
import Contact from '../screens/contact/contact';
import HomeScreen from '../screens/homeScreen/home';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [activeItem, setActiveItem] = useState('Home');

  const openWhatsApp = () => {
    const phoneNumber = "+923253588091"; 
    const url = `whatsapp://send?phone=${phoneNumber}`;

    Linking.openURL(url).catch(() => {
      alert("WhatsApp is not installed on this device.");
    });
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
          style={styles.profileImage}
        />
        <Text style={styles.riderName}>Rider Name</Text>
      </View>

      {props.state.routes.map((route, index) => {
        const isActive = activeItem === route.name;
        return (
          <View
            key={index}
            style={[styles.drawerItemContainer, isActive && styles.activeItem]}>
            <DrawerItem
              label={route.name}
              onPress={() => {
                setActiveItem(route.name);
                if (route.name === "Contact Us") {
                  openWhatsApp();
                } else {
                  props.navigation.navigate(route.name);
                }
              }}
              labelStyle={[styles.drawerLabel, isActive && styles.activeLabel]}
            />
          </View>
        );
      })}

      <View style={styles.languageToggle}>
        <Text
          style={{fontWeight: 'bold', color: isEnglish ? 'green' : 'black'}}>
          Eng
        </Text>
        <Switch
          value={isEnglish}
          onValueChange={() => setIsEnglish(!isEnglish)}
          trackColor={{false: '#ccc', true: 'green'}}
          thumbColor={isEnglish ? '#fff' : '#fff'}
        />
        <Text
          style={{fontWeight: 'bold', color: isEnglish ? 'black' : 'green'}}>
          اردو
        </Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => alert('Logging out')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default function RiderDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{drawerStyle: {width: '70%'},headerShown:false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Booking History" component={BookingHistory} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="Contact Us" component={Contact} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  riderName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerItemContainer: {
    width: '100%',
    alignSelf: 'stretch',
  },
  drawerLabel: {
    fontSize: 14,
    color: 'black',
  },
  activeItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    width: '100%',
  },
  activeLabel: {
    color: 'green',
  },
  languageToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    marginLeft: 20,
  },
  logoutButton: {
    backgroundColor: '#CD2222',
    padding: 12,
    justifyContent: 'center',
    flex: 1,
    borderRadius: 30,
    alignItems: 'center',
    margin: 20,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});