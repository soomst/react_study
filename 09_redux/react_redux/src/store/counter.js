import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increament(state) {
      state.counter++; // toolkit에서는 가능,
      //자동으로 원래 state를 복제하여 새로운 state 객체를 생성하고 모든 state 를 변경할 수 없게 유지하고, 사용자가 변경한 상태는 변하지 않도록 오버리이드한다.
    },
    decreament(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAcions = counterSlice.actions;

export default counterSlice;
