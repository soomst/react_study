const redux = require("redux");

const initialState = {
  counter: 0,
};

//2.creates Reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

//1. creates store
const store = redux.createStore(counterReducer);

//3. Subscription : 파라미터 X, trigger
const counterSubscriber = () => {
  // getState() : 함수 내부에서 스토어에 도달 할 수 있음.
  //              스토어에서 사용 가능하며, createStore에서 만들어진다.
  //              업데이트가 마친 가장 최신 상태의 state를 전달해준다.
  const latestState = store.getState();
  console.log(latestState);
};

// state가 변경될 때마다 Subscription(counterSubscriber)를 호출하도록 한다.
store.subscribe(counterSubscriber);

//4. Dispatch : action(객체)을 넘겨받는다.
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
