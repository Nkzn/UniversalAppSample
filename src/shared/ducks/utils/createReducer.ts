import { Reducer, Action } from "redux";
export interface PartialReducer<T> {
  (state: T, action: Action): T;
}
export default function createReducer<T>(defaultState: T, FUNCS: {[type: string]: PartialReducer<T>}): Reducer<T> {
  return function(state = defaultState, action: Action): T {
    if (FUNCS[action.type]) {
      return FUNCS[action.type](state, action);
    }
    return state;
  };
}