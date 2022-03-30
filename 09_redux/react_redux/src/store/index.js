import React from "react";
import { createStore } from "redux";

const initialState = { counter: 0 };

//reducer 생성
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

//store 생성
const store = createStore(counterReducer);

export default store;
