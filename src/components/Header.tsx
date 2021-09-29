import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#3f51b5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        paddingTop: 10,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Car Catalog App</Text>
        </View>
    )
}

