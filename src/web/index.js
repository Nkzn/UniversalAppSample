import React from 'react'
import { AppRegistry } from 'react-native'
import App from 'native/components/App';

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', {
  rootTag: document.querySelector('main')
})
