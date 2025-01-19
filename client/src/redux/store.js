import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

const rootReducer = redux.combineReducers({
  todoReducer,
  noteReducer,
});

export const store = redux.createStore(rootReducer);
