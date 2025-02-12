import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CancelButton from '../../components/Arrive/cancelButton';
import imagew from '../../assest/image.png';
import PickButton from '../../components/Arrive/pickButton';
import Arrow from '../../components/Arrive/arrow';
import COD from '../../components/Arrive/cash';
import Location from '../../components/Arrive/location';
import Order from '../../components/Arrive/order';
import Pick from '../../components/Arrive/pick';
import Customer from '../../components/Pick/customer';
import Locate from '../../components/Pick/locate';
import { useNavigation } from '@react-navigation/native';
import Distance from '../../components/Pick/distance';

const PickScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={imagew} style={styles.imageBackground}>
        <View style={styles.section}>
          <PickButton />
          <Arrow />
        </View>

        <View style={styles.bottomContainer}>
          <Order />
          <View style={styles.line} />
          <Location/>
          <View style={styles.verticle} />
          <Locate/>
          <Distance/>
          <View style={styles.line} />
         <Customer/>
          <View style={styles.line} />
          <COD />
          <View style={styles.btnRow}>
            <CancelButton onPress={() => navigation.navigate('Arrived')}/>
            <Pick />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  verticle: {
    height: 30, 
    borderLeftWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginLeft: 15, 
  },
  btnRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  line: {
    marginVertical: 5,
    height: 1,
    backgroundColor: '#E4E4E4',
    width: '100%',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default PickScreen;
