import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

class ComponentA2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          SubComponent A2
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
    borderColor: '#00BCD4',
    borderWidth: 5,
    width: width - 80
  }
});

export default ComponentA2;
