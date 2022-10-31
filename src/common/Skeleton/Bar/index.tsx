import React from 'react';
import { View } from 'react-native';
import { SkeletonView } from 'react-native-ui-lib';

interface Props {
    _height?: number,
    _width?: number,
}

const Bar = ({_height = 10, _width = undefined}: Props) => {
  return (
    <View>
        <SkeletonView
            height={_height}
            width={_width}
            circle
            colors={['#fff', '#F3F3F3']}
        />
    </View>
  )
}

export {Bar};