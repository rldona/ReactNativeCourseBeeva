import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Button extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton = () => {
    console.log(this.props);
    this.props.onPressButton();
  }

  render() {
    const { title, onPressButton } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPressButton} style={styles.button}>
        <Text style={styles.textButton}>{ title }</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    width: 200,
    borderRadius: 5,
    padding: 10
  },
  textButton: {
    textAlign: 'center',
    color: '#FFF'
  }
});

export default Button;
