import * as React from 'react';
import {
  Dimensions
} from 'react-native';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CombinedState } from "../../shared/ducks";
import SelectTodoUsecase from "../../shared/usecase/SelectTodoUsecase";
import TodoList from '../components/TodoList';
import TodoDetail from '../components/TodoDetail';
import TodoScreen from '../components/TodoScreen';
import Pane, { PaneMode } from '../utils/Pane';
import Screen from '../utils/Screen';

import { Todo } from 'shared/models';
import { initTodo } from '../../shared/ducks/todo'

interface StateProps {
  todos: Todo[],
  todo: Todo,
  navigation?: any;
}

interface DispatcherProps {
  onPressTodo: (id: number) => void;
  initTodo: () => void;
  selectTodoUsecase: SelectTodoUsecase;
}

type Props = StateProps & DispatcherProps;

interface State {
  paneMode: PaneMode
}

export class TodoScreenContainer extends React.PureComponent<Props, State> {

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

  componentDidMount() {
    this.props.initTodo();
  }

  private onPressTodo(id: string) {
    this.props.selectTodoUsecase.execute(id);
  }

  render() {
    // const { todos, todo } = this.props;
    const todos = [
        {id: "1", title: "hogehoge", description: "ほげほげ"},
        {id: "2", title: "fugafuga", description: "ふがふが"},
        {id: "3", title: "piyopiyo", description: "ぴよぴよ"}
    ];
    const todo = todos[0];

    const id = this.props.navigation.state.params.id;

    return (
      <TodoScreen
        todoId={id === 'all' ? undefined : id}
        paneMode={this.state.paneMode}
        left={<TodoList todos={todos} onPressTodo={id => this.onPressTodo(id)} />}
        right={<TodoDetail todo={todo} />} />
    );
  }
}

function mapStateToProps(state: CombinedState): StateProps {
  const todo = state.todo;
  return {
    todos: todo.todos,
    todo: todo.todos.filter(t => t.id === todo.selectedTodoId)[0]
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatcherProps {
  return {
    onPressTodo: (id) => {},
    initTodo: () => { dispatch(initTodo()) },
    selectTodoUsecase: new SelectTodoUsecase(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreenContainer);