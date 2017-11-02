import * as React from 'react';
import {
  Dimensions
} from 'react-native';
import TodoList from '../components/TodoList';
import TodoDetail from '../components/TodoDetail';
import TodoScreen from '../components/TodoScreen';
import Pane, { PaneMode } from '../utils/Pane';
import Screen from '../utils/Screen';

import { Todo } from 'shared/models';

export interface Props {
  todos: Todo[],
  todo: Todo,
  onPressTodo: (id: number) => void;
}

interface State {
  paneMode: PaneMode
}

export default class extends React.PureComponent<Props, State> {

  static navigationOptions = {
    header: null
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      paneMode: new Pane(new Screen()).getPaneMode()
    };

    Dimensions.addEventListener("change", () => {
      this.setState({ paneMode: new Pane(new Screen()).getPaneMode() });
    });
  }

  private onPressTodo(id: number) {
    // TODO call usecase
  }

  render() {
    // const { todos, todo } = this.props;
    const todos = [
        {id: 1, title: "hogehoge", description: "ほげほげ"},
        {id: 2, title: "fugafuga", description: "ふがふが"},
        {id: 3, title: "piyopiyo", description: "ぴよぴよ"}
    ];
    const todo = todos[0];

    return (
      <TodoScreen
        paneMode={this.state.paneMode}
        left={<TodoList todos={todos} onPressTodo={id => this.onPressTodo(id)} />}
        right={<TodoDetail todo={todo} />} />
    );
  }
}