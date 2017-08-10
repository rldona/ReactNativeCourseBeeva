import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { ContainerA, ContainerB } from './features/containers';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}>App</Text>
        <ContainerA />
        <View style={{height: 10}} />
        <ContainerB />
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
    borderColor: '#E91E63',
    borderWidth: 5,
    padding: 20,
    margin: 10
  }
});

export default App;
