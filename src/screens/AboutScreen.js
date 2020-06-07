import React from 'react'
import {Text, StyleSheet} from 'react-native'

const AboutScreen = () => {
    return <Text style={styles.text}>I am AboutScreen.js!</Text>

}

const styles = StyleSheet.create({
    text :{
        fontSize: 20
    }
})

export default AboutScreen