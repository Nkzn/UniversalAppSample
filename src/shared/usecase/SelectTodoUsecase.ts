import { Dispatch } from "redux";
import { showTodo } from "../ducks/nav";

export default class SelectTodoUsecase {
  constructor(private dispatch: Dispatch<any>) {
  }

  execute(id: string) {
    this.dispatch(showTodo(id));
  }
}