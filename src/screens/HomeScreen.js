import React from 'react'
import {Text, StyleSheet} from 'react-native'

const HomeScreen = () => {
    return <Text style={styles.text}>I am the HomeScreen!</Text>

}

const styles = StyleSheet.create({
    text :{
        fontSize: 20
    }
})
export default HomeScreen