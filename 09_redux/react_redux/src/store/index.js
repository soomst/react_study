//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";

// export const INCREMENT = "increament";
// export const DECREMENT = "decrement";
// export const TOGGLE = "toggle";
// export const INCREASE = "increase";

//reducer 생성
// const counterReducer = (state = initialState, action) => {
//   const newState = { ...state };
//   switch (action.type) {
//     case INCREASE:
//       newState.counter += 5;
//       return newState;
//     case INCREMENT:
//       newState.counter++;
//       return newState;
//     case DECREMENT:
//       newState.counter--;
//       return newState;
//     case TOGGLE:
//       newState.showCounter = !newState.showCounter;
//       return newState;
//     default:
//       return state;
//   }
// };

//store 생성
//const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //: counterSlice가 여러개인 경우
  //reducer: counterSlice.reducer,
});

export default store;
