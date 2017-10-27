import * as React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Todo } from 'shared/models';

export interface Props {
  todo: Todo;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8
  }
});

const TodoDetail = (props: Props) => {
  const { todo } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}(id: {todo.id})</Text>
      <Text>{todo.description}</Text>
    </View>
  )
};

export default TodoDetail;