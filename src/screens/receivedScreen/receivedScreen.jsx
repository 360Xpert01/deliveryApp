import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import themes from '../../theme/theme';
import {Image} from 'react-native';
import Deliver from '../../assest/Frame.png';
import CancelButton from '../../components/Arrive/cancelButton';
import ReceivedButton from '../../components/receivedButton';

const ReceivedScreen = () => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: themes.greenLight.locationBackground},
      ]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.successBoxWrapper}>
          <View
            style={[
              styles.successBox,
              {shadowColor: themes.greenLight.shadow},
            ]}>
            <Image source={Deliver}  style={{ width: 100, height: 100 }}/>
            <Text style={styles.successMessage}>
              Have you received the cash for the rider mention below?
            </Text>
          </View>
        </View>
      </ScrollView>
<View style = {styles.btn}>

      <CancelButton/>
      <ReceivedButton/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  successMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  successBoxWrapper: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    overflow: 'visible',
  },
  successBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '90%',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
    //position: 'relative',
    paddingTop: 60,
  },
  btn:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  }
});

export default ReceivedScreen;
