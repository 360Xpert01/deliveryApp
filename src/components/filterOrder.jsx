import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import themes from '../theme/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FilterOrder = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Active', 'Return', 'Delivered'];

  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.button,
            selectedFilter === filter && styles.selectedButton,
          ]}
          onPress={() => setSelectedFilter(filter)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedFilter === filter && styles.selectedText,
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterOrder;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: hp('1.5%'),
    borderRadius: hp('2%'),
  },
  button: {
    flexGrow: 1,
    padding: hp('1.5%'),
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: themes.greenLight.button,
    borderRadius:4
  },
  buttonText: {
    fontSize: wp('4%'),
    color: themes.greenDark.logo,
  },
  selectedText: {
    color: themes.greenLight.secondary,
    fontWeight: 'bold',
  },
});
