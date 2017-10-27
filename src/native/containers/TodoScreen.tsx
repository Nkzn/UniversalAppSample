import * as React from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import TodoList from '../components/TodoList';
import TodoDetail from '../components/TodoDetail';

export default class TodoScreen extends React.PureComponent<object, object> {

  state = {
    index: 0
  }

  render() {

    const todos = [
        {id: 0, title: "hogehoge", description: "ほげほげ"},
        {id: 1, title: "fugafuga", description: "ふがふが"},
        {id: 2, title: "piyopiyo", description: "ぴよぴよ"}
    ];

    return (
      <View style={styles.container}>
        <View style={styles.menuColumn}>
          <TodoList todos={todos} onPressTodo={id => this.setState({index: id})} />
        </View>
        <View style={styles.contentColumn}>
          <TodoDetail todo={todos[this.state.index]} />
        </View>
      </View>
    );
  }
}

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      height: screenHeight,
    },
    menuColumn: {
      width: 300,
    },
    contentColumn: {
      flex: 1,
    }
  });