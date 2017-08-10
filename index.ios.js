import React, { Component } from 'react';

import { AppRegistry } from 'react-native';

import { App, Redux, Animations, Firebase } from './src/containers';

import { DrawerNavigator } from 'react-navigation';

const ReactNativeCourseApp = DrawerNavigator({
  Home: { screen: App },
  Animations: { screen: Animations },
  Firebase: { screen: Firebase },
  Redux: { screen: Redux }
});

AppRegistry.registerComponent('ReactNativeCourseBeeva', () => ReactNativeCourseApp);
