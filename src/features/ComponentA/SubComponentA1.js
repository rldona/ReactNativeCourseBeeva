import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import { Button } from '../../commons';

const { width, height } = Dimensions.get('window');

class ComponentA1 extends Component {

  constructor(props, context) {
    super(props);
  }

  _onPresButton = () => {
    alert('button pressed !!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}>
          SubComponent A1
        </Text>
        <Button
          title="Activate SubComponent B2"
          onPressButton={this._onPresButton} />
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

export default ComponentA1;
