import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

class SubComponentB2 extends Component {

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          SubComponent B2 --> {this.props.components.subComponentB2.active ? 'ON' : 'OFF' }
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
    borderWidth: 0,
    width: width - 80
  }
});

export default SubComponentB2;
