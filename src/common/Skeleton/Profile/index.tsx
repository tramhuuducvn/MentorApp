import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import Avatar from '../Avatar';
import { Bar } from '../Bar';

const {width} = Dimensions.get('window');

const Profile = () => {
  const AVATAR_SIZE = 40;
  return (
    <View style={styles.container}> 
      <Avatar size={AVATAR_SIZE} />
      <View style={styles.content}>
        <Bar _height={10} _width={(width - AVATAR_SIZE) / 2} />
        <Bar _height={10} _width={(width - AVATAR_SIZE) - width/8} />
        <Bar _height={10} _width={(width - AVATAR_SIZE) / 2} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  content: {
    justifyContent: 'space-between',
    marginLeft: 12
  }
})


export default Profile;
