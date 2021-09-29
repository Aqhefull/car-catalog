import React from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView } from 'react-native';
import car from '../../assets/images/car.png';

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
    },
    indicator: {
        paddingBottom: 15
    },
    text: {
        paddingTop: 25,
        fontSize: 14
    },
    loadingText: {
        paddingTop: 5,
        fontSize: 16
    },
    scrollView: {
        marginHorizontal: 20,
    }
});
export default function Content() {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Hello from Car Catalog app!</Text>
            <Image
                style={styles.logo}
                source={car}
            />
            <View style={styles.indicator}>
                <ActivityIndicator size="large" />
                <Text style={styles.loadingText}>Loading..</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <Text>
                    The sales of the Zhiguli model started in August 1970. The VAZ-2101 gave a start to the most mass-produced family of passenger cars 
                    in the company's history, and, moreover, in the history of the Russian automotive industry. Around 4.8 million VAZ-2101 cars and its 
                    modifications were produced from 1970 to 1988. Apart from the VAZ-2101, the following models were also mass-produced: LADA 2106 
                    (4.3. M units), LADA 2107 (2.8 M units), LADA 4x4 (2.5 M units). he first LADA model was based on the Italian FIAT-124 sedan which won the 
                    Car of the Year award in Europe in 1967. In order to be produced and sold in the Soviet Union, the foreign prototype passed a series of tests on 
                    roads, off-road and special sections of paving stones. After the tests, over 800 changes were introduced to the design of the licensed car; 
                    the majority of them were aimed at improving reliability. The suspension underwent the following reworks: change of kinematic, 
                    reinforcement of the majority of parts including bearings and ball joints. The FIAT-124 had a clearance of about 130 mm. 
                    In course of the modernization of the Italian chassis, the front clearance was increased to 175 mm. As a result of improvements, 
                    the car became 90 kg heavier, but this was compensated by increased engine power. The VAZ-2101 received a new engine with an 
                    overhead camshaft and an increased center distance between the cylinders, which allowed improving the engine and increasing its 
                    volume in the future. The outer diameter of the friction linings in the clutch was increased from 182 mm to 200 mm. 
                    The gearbox received the synchronizers that were developed for the faster Fiat sports cars. The body became stronger, and 
                    instead of two jackholes (one on each side), four were introduced to make jacking up much more secure.
                </Text>
            </ScrollView>
        </View>
    )
}
