import React from 'react';
import {SkeletonView, ListItem, Text, View} from 'react-native-ui-lib';
import * as AvatarSkeleton from './Avatar';
import { Bar } from './Bar';
import { Content } from './Content';


const SkeletonCustom = () => {
  return (
    <View>
        <Content />
    </View>
  )
}

export default SkeletonCustom;