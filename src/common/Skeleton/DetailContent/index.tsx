import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import { Bar } from '../Bar';

const {width} = Dimensions.get('window');

const DetailContent = ({_width = width*0.9}) => {
    const HEIGHT = 10;
    return (
        <View style={{alignItems: 'center', padding: 12}}>
            <View style={[styles.container]}>
                <View style={styles.barContainer}>
                    <Bar _height={HEIGHT} _width={_width}/>
                </View>
                <View style={styles.barContainer}>
                    <Bar _height={HEIGHT} _width={_width}/>
                </View>
                <View style={styles.barContainer}>
                    <Bar _height={HEIGHT} _width={_width}/>
                </View>
                <View style={styles.barContainer}>
                    <Bar _height={HEIGHT} _width={_width}/>
                </View>
                <View style={styles.barContainer}>
                    <Bar _height={HEIGHT} _width={_width}/>
                </View>

                <View style={styles.lastBarContainer}>
                    <Bar _height={HEIGHT*1.3} _width={_width/2}/>
                </View>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    barContainer: {
        marginBottom: 4
    },
    lastBarContainer:{
        marginTop: 10
    }
})


export default DetailContent;
