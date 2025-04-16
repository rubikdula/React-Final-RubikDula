import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Main from './screens/main';

export default function App(){
  return(
    <Main />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});