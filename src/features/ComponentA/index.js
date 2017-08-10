import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import SubComponentA1 from './SubComponentA1';
import SubComponentA2 from './SubComponentA2';

const { width, height } = Dimensions.get('window');

class ContainerA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}>Component A</Text>
        <SubComponentA1 />
        <View style={{height: 10}} />
        <SubComponentA2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderColor: '#187dce',
    borderWidth: 5,
    width: width - 50,
    padding: 10
  }
});

export default ContainerA;
