import React from 'react';
import {View} from 'react-native-ui-lib';
import Separate from '../Separate';
import DepartmentScreenSkeleton from './DeparmentScreenSkeleton';
import DetailContent from './DetailContent';
import Profile from './Profile';
import ProfileDepartment from './ProfileDepartment';

const SkeletonCustom = () => {
  return (
    <View>
        {/* <Profile /> */}
        {/* <DetailContent /> */}
        {/* <ProfileDepartment /> */}
        <DepartmentScreenSkeleton />
        {/* <Separate /> */}
    </View>
  )
}

export default SkeletonCustom;