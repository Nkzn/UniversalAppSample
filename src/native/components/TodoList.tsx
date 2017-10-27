import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Todo } from 'shared/models';

export interface Props {
  todos: Todo[],
  onPressTodo: (id: number) => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  todoListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#333'
  },
  todoText: {
  }
});

const TodoList = (props: Props) => {

  const todoTexts = props.todos.map(todo => (
      <TouchableOpacity onPress={() => props.onPressTodo(todo.id)}>
        <View key={todo.id} style={styles.todoListItem}>
          <Text>{todo.title}</Text>
        </View>
      </TouchableOpacity>
    ));

  return (
    <View style={styles.container}>
      {todoTexts}
    </View>
  )
};

export default TodoList;