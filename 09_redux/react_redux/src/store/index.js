import { createStore } from "redux";

export const INCREMENT = "increament";
export const DECREMENT = "decrement";
export const TOGGLE = "toggle";
export const INCREASE = "increase";

const initialState = { counter: 0, showCounter: true };

//reducer 생성
const counterReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case INCREASE:
      newState.counter += 5;
      return newState;
    case INCREMENT:
      newState.counter++;
      return newState;
    case DECREMENT:
      newState.counter--;
      return newState;
    case TOGGLE:
      newState.showCounter = !newState.showCounter;
      return newState;
    default:
      return state;
  }
};

//store 생성
const store = createStore(counterReducer);

export default store;
