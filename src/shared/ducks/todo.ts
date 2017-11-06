import { Action } from "redux";
import createReducer from "./utils/createReducer";

import { Todo } from '../models';

/* ========== Action ========== */

const ACTION_INIT_TODO = "ACTION_INIT_TODO";
export interface InitTodoAction extends Action {
}
export function initTodo(): InitTodoAction {
  return {
    type: ACTION_INIT_TODO
  };
}

/* ========== Reducer ========== */

export interface TodoState {
  todos: Todo[],
  selectedTodoId: string;
}

const FUNCS = {
  [ACTION_INIT_TODO]: (state: TodoState, action: InitTodoAction): TodoState => {
    return {
      todos: [
        {id: "1", title: "hogehoge", description: "ほげほげ"},
        {id: "2", title: "fugafuga", description: "ふがふが"},
        {id: "3", title: "piyopiyo", description: "ぴよぴよ"}
      ],
      selectedTodoId: "all"
    };
  }
};

const defaultState = {
  todos: [],
  selectedTodoId: "all"
};

export default createReducer(defaultState, FUNCS);