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

    this.state = {
      button: {
        title: 'Activate SubComponent B2'
      }
    }
  }

  _onPresButton = () => {
    if(this.props.components.subComponentB2.active) {
      this.props.deactivateState('subComponentB2');
      this.setState(previousState => {
        return {
          button: {
            title: 'Activate SubComponent B2'
          }
        }
      });
    } else {
      this.props.activateState('subComponentB2');
      this.setState(previousState => {
        return {
          button: {
            title: 'Deactivate SubComponent B2'
          }
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}>
          SubComponent A1
        </Text>
        <Button
          title={this.state.button.title}
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
    borderWidth: 0,
    width: width - 80
  }
});

export default ComponentA1;
