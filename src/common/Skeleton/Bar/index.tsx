import React from 'react';
import { Dimensions, View } from 'react-native';
import { SkeletonView } from 'react-native-ui-lib';

interface Props {
    _height?: number,
    _width?: number,
}

const {width, height} = Dimensions.get('window');

const Bar = ({_height = height, _width = width}: Props) => {
  return (
    <View style={{flexDirection: 'row'}}>
        <View style={{width: 100, height: _height, backgroundColor: '#f00'}}></View>
        <SkeletonView
            height={_height}
            width={_width}
        />
    </View>
  )
}

export {Bar};