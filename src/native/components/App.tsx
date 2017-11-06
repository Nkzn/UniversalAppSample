import * as React from 'react';
import { Component } from 'react'
import { Provider } from 'react-redux';
import rootReducer from '../../shared/ducks';
import configureStore from '../../shared/store';
import AppNavigatorWithState from "../navigators";

const store = configureStore(rootReducer);

export default class App extends Component<object, object> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigatorWithState />
      </Provider>
    );
  }
}
