## react에서 redux 사용하기

필요 패키지

- redux : npm install redux
- react-redux : npm install redux react-redux : react app과 redux의 store, reducer에 간단히 접속할 수 있게 한다..

선택 패키지 : 코드 구조를 좀더 짧고 가독성을 좋게 해주는 특징이 있다.

- redux-actions
- immer
- redux-toolkit ; npm install @reduxjs/toolkit

---

1. store와 리듀서 생성.
2. index.js에서 react-redux의 Provider로 가장 상위에 있는 컴포넌트 감싸줌.
3. store 내 state에 접근 및 dispatch가 필요한 컴포넌트에서 작업.
   - 함수형 컴포넌트
     - useSeletor : store 내에 있는 가장 최신 상태의 state를 가져올 수 있음.
     - useDispatch : 원하는 action을 dispatch 해줌.
   - 클래스형 컴포넌트
     - connect (stateProps, dispatchProps)(컴포넌트명)

---

## reduxjs/toolkit

- createSlice > createReducer

  - createSlice는 서로 다른 리듀서에 해당하는 unique action 식별자를 자동으로 생성한다.

    ```
    const counterSlice = createSlice({ ... });
    counterSlice.actions.toggleCounter();
    // returns an action object of this shape : {type: 'some auto-generated unique idenfier'}

    ```

    따라서 action 식별자에 대해 신경쓰지 않아도 된다.  
    createSlice의 actions key 및 객체를 사용하면 된다.

- configureStore : createStore처럼 store를 만들고, 여러 개의 reducer를 하나의 reducer로 쉽게 합칠 수 있다.
