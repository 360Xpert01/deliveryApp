import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native';
import PickButton from '../../components/Arrive/pickButton';
import Arrow from '../../components/Arrive/arrow';
import Order from '../../components/Arrive/order';
import Location from '../../components/Arrive/location';
import COD from '../../components/Arrive/cash';
import CancelButton from '../../components/Arrive/cancelButton';
import ArrivedButton from '../../components/Arrive/arrivedButton';
import { useNavigation } from '@react-navigation/native';
import imagew from '../../assest/image.png';

const Arrived = () => {
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
                    <Location />
                    <View style={styles.line} />
                    <COD />
                    <View style={styles.btnRow}>
                        <CancelButton onPress={() => navigation.navigate('Arriving')}/>
                        <ArrivedButton onPress={() => navigation.navigate('Pick')} />
                    </View>
                </View>
            </ImageBackground>
        </View>
  )
}

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
        marginVertical: 20,
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

export default Arrived