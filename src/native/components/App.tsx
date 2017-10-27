import * as React from 'react';
import { Component } from 'react'
import { StackNavigator } from 'react-navigation';
import TodoScreen from '../containers/TodoScreen';

const Navigator = StackNavigator({
  TodoScreen: {
    screen: TodoScreen
  }
});

export default class App extends Component<object, object> {
  render() {
    return (
      <Navigator />
    );
  }
}
