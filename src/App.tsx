import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import SkeletonCustom from './common/Skeleton';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        animated={true}
        backgroundColor={isDarkMode ? "#000" : "#fff"}
        showHideTransition={"fade"}
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        hidden={false}
      />
      <SkeletonCustom />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
