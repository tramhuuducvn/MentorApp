import { View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window');

const Separate = () => {
  return (
    <View style={styles.box}>

    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        width: width,
        height: 10,
        backgroundColor: '#F3F3F3'
    }
})

export default Separate;