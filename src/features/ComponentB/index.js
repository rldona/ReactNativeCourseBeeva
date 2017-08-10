import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import SubComponentB1 from './SubComponentB1';
import SubComponentB2 from './SubComponentB2';

const { width, height } = Dimensions.get('window');

class ContainerB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}>Component B</Text>
        <SubComponentB1 />
        <View style={{height: 10}} />
        <SubComponentB2 />
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
    borderColor: '#3c8e3f',
    borderWidth: 5,
    width: width - 50,
    padding: 10
  }
});

export default ContainerB;
