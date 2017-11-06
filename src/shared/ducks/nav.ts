import { Action } from "redux";
import { AppNavigator } from '../../native/navigators';
import { NavigationState, NavigationBackAction } from "react-navigation";

const { getStateForAction, getActionForPathAndParams } = AppNavigator.router;
const defaultProps = getStateForAction(getActionForPathAndParams('todos/all'), null);
console.log("reducers/nav", "defaultProps", JSON.stringify(defaultProps));

const SHOW_TODO = "SHOW_TODO";
interface ShowTodoAction extends Action {
  payload: {
    todoId: string
  }
}
export function showTodo(todoId: string): ShowTodoAction {
  return {
    type: SHOW_TODO,
    payload: {
      todoId
    }
  }
}

export function back(): NavigationBackAction {
  return {
    type: "Navigation/BACK"
  }
}

export const FUNCS: any = {
  [SHOW_TODO]: (state: NavigationState, action: ShowTodoAction): NavigationState => {
    const { todoId } = action.payload;
    return getStateForAction(getActionForPathAndParams(`todos/${todoId}`), state);
  },
};

// createReducerのnav専用実装
export default (state = defaultProps, action: any) => {
  console.log("nav", action);
  if (FUNCS[action.type]) {
    const newState = FUNCS[action.type](state, action);
    return newState;
  }
  const newState = getStateForAction(action, state);
  return newState;
};