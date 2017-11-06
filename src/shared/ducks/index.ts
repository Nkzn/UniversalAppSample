import { Reducer, combineReducers } from "redux"
import nav from "./nav";
import todo, { TodoState } from "./todo";

export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }

export interface CombinedState {
  nav: any,
  todo: TodoState
}
export const reducerMap : CombineReducerMap<CombinedState> = {
  nav,
  todo
};

export default combineReducers<CombinedState>(reducerMap);
