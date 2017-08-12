import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import { activateState, deactivateState } from '../redux/actions';

import { ComponentA, ComponentB } from '../features';

const { width, height } = Dimensions.get('window');

class Redux extends Component {

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ComponentA {...this.props} />
        <View style={{height: 20}} />
        <ComponentB {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCC',
    padding: 20,
  }
});

function mapStateToProps (state) {
  return {
    components: state.components
  };
}

function mapDispatchToProps (dispatch) {
  return {
    activateState: (comp) => dispatch(activateState(comp)),
    deactivateState: (comp) => dispatch(deactivateState(comp))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redux);

