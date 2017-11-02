import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Screen from '../utils/Screen';
import { PaneMode } from '../utils/Pane';

interface Props {
  todoId?: number;
  paneMode: PaneMode;
  left: React.ReactElement<any>;
  right: React.ReactElement<any>;
}

export default class TodoScreen extends React.PureComponent<Props, object> {

  private renderSinglePane() {
    const { todoId } = this.props;

    if (todoId) {
      return (
        <View style={styles.contentPane}>
          {React.cloneElement(this.props.right, { todoId: todoId })}
        </View>
      );
    } else {
      return (
        <View style={styles.contentPane}>
          {this.props.left}
        </View>
      );
    }
  }

  private renderMultiplePane() {
    const { todoId } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.menuPane}>
          {React.cloneElement(this.props.left, { todoId: todoId })}
        </View>
        <View style={styles.contentPane}>
          {React.cloneElement(this.props.right, { todoId: todoId })}
        </View>
      </View>
    );
  }

  render() {
    if (this.props.paneMode === "single") {
      return this.renderSinglePane();
    } else {
      return this.renderMultiplePane();
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    menuPane: {
      width: new Screen().isPhone() ? 200 : 300,
    },
    contentPane: {
      flex: 1,
    },
  });