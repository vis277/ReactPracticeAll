import { ADDTODO, EDITTODO, DELETETODO, SHOWTODO } from "./action";

const list = [];

const toDoReducer = (state = list, action) => {
  return list;
};

export default toDoReducer;
