import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

class ComponentB1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Component B1
        </Text>
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
    borderColor: '#8BC34A',
    borderWidth: 5,
    width: width - 80
  }
});

export default ComponentB1;
