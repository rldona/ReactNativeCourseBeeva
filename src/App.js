import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Animations, Firebase, Redux } from './containers';

import { DrawerNavigator } from 'react-navigation';

const ReactNativeCourseApp = DrawerNavigator({
  Redux: { screen: Redux },
  Animations: { screen: Animations },
  Firebase: { screen: Firebase },
});

class App extends Component {
  render() {
    return (
      <ReactNativeCourseApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
