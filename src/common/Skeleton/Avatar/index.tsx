import React from 'react';
import {SkeletonView} from 'react-native-ui-lib';

interface Props {
  size: number,
}

const Avatar = ({size = 100}:Props) => {
  return (
    <SkeletonView
        width={size}
        height={size}
        circle
        colors={['#fff', '#F3F3F3']}
    />
  )
}

export default Avatar