import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    {
      text: "lorem ipsum dolor sit amet, consect et just ei in liber tempor inc tempor ullam et ullam et ullam et aliquet et ullam et aliquet inter",
      createdOn: new Date(),
    },
    {
      text: "et aliquet et ullam et aliquet interdum et aliquet et ullam et aliquet et aliquet et ullam et lorem et aliquet et u ll amet et aliquet et ullam et aliquet",
      createdOn: new Date(),
    },
  ],
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { text: action.text, createdOn: new Date() }],
      };
    case DELETE_NOTE:
      state.notes.splice(action.index, 1);
      return {
        ...state,
        notes: [...state.notes],
      };
    default:
      return state;
  }
}
