import React from 'react'
import {Button, Text, StyleSheet, View} from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>I am HomeScreen.js!</Text>
            <Button title="Go to About" onPress={() => navigation.navigate('AboutScreen')}/>
        </View>
    )}

const styles = StyleSheet.create({
    text :{
        fontSize: 20
    }
})

export default HomeScreen