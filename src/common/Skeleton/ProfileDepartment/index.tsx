import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';
import {Bar} from '../Bar';
import Profile from '../Profile';

const {width} = Dimensions.get('window');

const ProfileDepartment = ({_width=width*0.9}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <View style={[styles.barContainer, {marginBottom: 8}]}>
                <Bar _height={14} _width={_width/2}/>
            </View>
            <View style={styles.barContainer}>
                <Bar _height={10} _width={_width}/>
            </View>
            <View style={styles.barContainer}>
                <Bar _height={10} _width={_width}/>
            </View>
      </View>
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 12
    },
    header: {
        marginBottom: 16, 
        justifyContent: 'center'
    },
    barContainer: {
        marginBottom: 4
    },
});

export default ProfileDepartment;
