import { INCREMENT, DECREMENT, RESET } from "../type";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
export default reducer;
