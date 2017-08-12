import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore.js';

import { DrawerNavigator } from 'react-navigation';
import { Animations, Firebase, Redux } from './containers';

const store = configureStore();

const ReactNativeCourseApp = DrawerNavigator({
  Redux: { screen: Redux },
  Animations: { screen: Animations },
  Firebase: { screen: Firebase },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReactNativeCourseApp />
      </Provider>
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
