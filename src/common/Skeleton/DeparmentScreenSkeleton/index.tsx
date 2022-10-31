import React from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';
import DetailContent from '../DetailContent';
import ProfileDepartment from '../ProfileDepartment';
import Separate from '../../Separate';

const {width} = Dimensions.get('window');

const DepartmentScreenSkeleton = () => {
  return (
    <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
    >
      <DetailContent />
      <Separate />
      <ProfileDepartment />
      <Separate />
      <ProfileDepartment />
      <Separate />
      <ProfileDepartment />
      <Separate />
      <ProfileDepartment />
      <Separate />
      <ProfileDepartment />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
});

export default DepartmentScreenSkeleton;
