import * as React from 'react';
import { connect } from 'react-redux';
import {
  addNavigationHelpers,
  StackNavigator,
  NavigationDispatch,
} from 'react-navigation';
import TodoScreen from "../containers/TodoScreen";

export const AppNavigator = StackNavigator({
    Todo: {
      screen: TodoScreen,
      path: "todos/:id"
    }
  });

const mapStateToProps = (state: any) => ({
  nav: state.nav,
});

interface NavProps<A> {
  dispatch: NavigationDispatch<A>;
  nav: object;
}

export class AppWithNavigationState extends React.Component<NavProps<any>, any> {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
    );
  }
}

export default connect(mapStateToProps)(AppWithNavigationState);