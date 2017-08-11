import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import { ComponentA, ComponentB } from '../features';

const { width, height } = Dimensions.get('window');

class Redux extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ComponentA />
        <View style={{height: 20}} />
        <ComponentB />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    margin: 10
  }
});

export default Redux;
