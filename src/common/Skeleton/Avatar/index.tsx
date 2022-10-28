import React from 'react';
import {SkeletonView} from 'react-native-ui-lib';

interface Props {
  size: number
}

const Circle = ({size = 100}:Props) => {
  return (
    <SkeletonView
        width={size}
        height={size}
        circle
    />
  )
}

const Square = ({size = 100}:Props) => {
  return (
    <SkeletonView
        width={size}
        height={size}
    />
  )
}

export {Circle, Square}