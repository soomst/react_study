<h1>Effects, Reducer & Context</h1>
<h3>

**상태 공유와 업데이트를 용이하게 만들어준다.**

</h3>

<ul>
    <li>Effects : Working with (Side) Effects</li>
    <li>Reducer : Managing more Complex State with Reducers</li>
    <li>Context : Managing App-Wide or Component-Wide State with Context</li>
</ul>

---

### Effect (= Side Effect)

함수가 실행되면서 함수 외부에 존재하는 값이나 상태를 변경시키는 등의 행위  
(ex. APP내에서 고려되는 모든 사항들 : 브라우저 저장소에 저장된 데이터를 백엔드 서버에 HTTP 요청 보내기, 타이머 설정 및 관리 등)  
➡️ 이러한 작업은 특히 렌더링을 차단/지연할 수 있으므로 일반적인 컴포넌트 평가 및 렌더링 주기 외부에서 발생해야 한다.

**React에서는 Side-Effect 처리를 위해 useEffect()함수를 제공**

### useEffect() hook

```
useEffect(() => {...}, [dependencies])
```

- **첫번째 인수 : 지정된 종속성이 변경된 경우, 모든 구성 요소 평가 후에 실행해야 하는 함수**
- **두번째 인수 : 이 effcet의 종속성(배열) - 종속성이 변경된 경우에만 함수가 실행됨.**

**종속성 배열값의 일부 변화가 생기면, 첫번째 인수인 함수가 실행된다.**

#### \[dependencies\] 유형

| **\[ \]**                   | app 시작 시 한번만 실행.<br/>배열 내 defendency가 존재하지 않아 이후에 defendency가 바뀌지 않기 때문.                      |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **\[state1, state2, ...\]** | effect 함수에서 사용하는 "모든 것"을 종속성으로 추가해야 함.<br/>즉, 거기에서 사용하는 모든 상태 변수와 함수를 포함합니다. |

**\[dependency 추가 시 예외사항\]**

- **상태 업데이트 기능을 추가할 필요가 없음.**  
  React는 해당 함수가 절대 변경되지 않도록 보장하므로 종속성으로 추가할 필요가 없음.

- **"내장" API 또는 함수를 추가할 필요가 없음.**  
  이러한 브라우저 API/전역 기능은 React 구성 요소 렌더링 주기와 관련이 없으며 변경되지 않음.  
  (해당 변수가 변경되는 경우, 또는 그 반대의 경우에도 구성 요소는 재평가되지 않음

- **변수나 함수를 추가할 필요가 없음.**  
  **구성 요소 외부에서 정의**된 함수 또는 변수도 구성 요소 함수 내부에서 생성되지 않으므로 변경해도 구성 요소에 영향을 주지 않음.  
  (ex. fetch(), 나 localStorage 등등 - 브라우저에 내장된 함수 및 기능, 따라서 전역적으로 사용 가능)

**💡** **effect 함수에서 사용하는 모든 "것들"을 추가해야 한다.**  
구성 요소(또는 일부 상위 구성 요소)가 다시 렌더링 되어 이러한 "것들"이 변경될 수 있는 경우.  
그렇기 때문에 컴포넌트 함수에 정의된 변수나 상태, 컴포넌트 함수에 정의된 props 또는 함수는 종속성으로 추가되어야 한다!

### 예시)

```
import { useEffect, useState } from 'react';

let myTimer;

const MyComponent = (props) => {
    const [timerIsActive, setTimerIsActive] = useState(false);

    const { timerDuration } = props; // using destructuring to pull out specific props values

    useEffect(() => {
            if (!timerIsActive) {
            setTimerIsActive(true);
            myTimer = setTimeout(() => {
                setTimerIsActive(false);
            }, timerDuration);
        }
    }, [timerIsActive, timerDuration]);
};
```

| **timerIsActive**    | **종속성으로 추가**           | 구성 요소가 변경될 때 변경될 수 있는 구성 요소 상태이기 때문에 (예: 상태가 업데이트되었기 때문에)                                                                 |
| -------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **timerDuration**    | **종속성으로 추가**           | 해당 구성 요소의 prop 값이기 때문에따라서 상위 구성 요소가 해당 값을 변경하면 변경될 수 있음. (MyComponent 구성 요소도 다시 렌더링되도록 함)                      |
| **setTimerIsActive** | **종속성으로 추가되지 않음**  | 예외 조건이기 때문에 상태 업데이트 기능을 추가할 수 있지만 React는 기능 자체가 절대 변경되지 않음을 보장하므로 추가할 필요가 없음.                                |
| **myTimer**          | **종속성으로 추가되지 않음**  | 구성 요소 내부 변수가 아니기 때문에 (어떤 상태나 prop 값이 아님) 구성 요소 외부에서 정의되고 이를 변경한다. (어디에서든) 구성 요소가 다시 평가되도록 하지 않는다. |
| **setTimeout**       | **종속성으로 추가되지 않음**  | 내장 API이기 때문에(브라우저에 내장) React 및 구성 요소와 독립적이며 변경되지 않는다.                                                                             |

---

### useReducer

상태가 여러 개인 경우/상태를 변경하는 여러 방법 또는 다른 상태에 대한 종속성이 있는 경우와 같이 복잡한 상태들이 있다.  
이런 경우 useState()는 종종 사용하기 어렵거나 오류가 발생하기 쉽다.  
이러한 시나리오에서 나쁘거나 비효율적이거나 버그가 있는 코드를 작성하기 쉽습니다.  
➡️ **보다 강력한 상태 관리** 가 필요한 경우 **useReducer()** 를 useState() 대신 사용할 수 있다.  
 (useReducer()는 사용하기 더 복잡하고 설정할 것이 더 많으므로, 보통때는 useState()를 쓰자)

### useReducer() hook

```
const [state, dispathcFn] = useReducer(reducerFn, initialState, initFn)
```

- **state : 컴포넌트에서 사용 할 수 있는 상태**
- **dispathcFn : 새로운 액션을 전달하는 데 사용하는 함수(즉, 상태 업데이트 트리거)**
- **reducerFn : '(prevState, action) => newState'**  
  작업이 디스패치되면 자동으로 트리거되는 함수(dispatchFn()를 통해) - 최신 상태 스냅샷(prevState)을 수신하고 새로운 업데이트 상태를 return한다.
- **initialState : 초기상태**
- **initFn : 초기상태 설정 함수**

---

### CONTEXT

여러개의 컴포넌트에 영향을 미치는 state를 관리할 때, prop drilling(=prop chain)을 필요로 하는데,  
이런 경우 prop으로 state를 계속해서 전달하게 되면 관리하기가 매우 어려워진다.  
이런 어려움을 해결하기 위해 **context**를 배워보자.

[**CONTEXT**](https://reactjs.org/docs/context.html)
**는 모든 수준에서 props를 수동으로 전달하지 않고도 구성 요소 트리를 통해 데이터를 전달할 수 있는 방법을 제공한다.**

<br/>

### 💡 CONTEXT를 사용해보자

- **React Context**  
  **1. createContext()를 통해 context 생성**

  전역 데이터를 관리하기 위해서 React 패키지에서 제공하는 createContext라는 함수를 사용한다.  
  개념적으로 React Context는 전역 데이터를 담고 있는 하나의 저장 공간이라고 생각할 수 있다.  
  다음과 같이 createContext 함수의 인자로 해당 컨텍스트에 디폴트로 저장할 값을 넘긴다.

  ```
  import React from "react";

  const AuthContext = React.createContext({
      isLoggedIn : false
  });

  export default AuthContext
  ```

  **2. context 저장하기**

  context를 사용하려는 컴포넌트에서 [**Provider**](https://reactjs.org/docs/context.html#contextprovider)로 감싸주면,  
  하위에 있는 모든 컴포넌트들은 React Context에 저장되어 있는 전역 데이터에 접근할 수 있다.
  **value**속성값을 지정함으로써 context값을 설정할 수 있다.

  ```
  function App() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      const loginHandler = (email, password) => {  ...  };

      const logoutHandler = () => => {  ...  };

      return (
          <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
              <MainHeader onLogout={logoutHandler} />
              <main>
                  {!isLoggedIn && <Login onLogin={loginHandler} />}
                  {isLoggedIn && <Home onLogout={logoutHandler} />}
              </main>
          </AuthContext.Provider>
      );
  }
  ```

  **3-1. context 접근하기 (Consumer)**  
  [Consumer](https://reactjs.org/docs/context.html#contextconsumer)를 통해 Context에 저장되어 있는 전역 데이터에 접근 할 수 있다.  
  Consumer는 Context 데이터를 전달인자로 받는 함수를 필요로 한다. ([render props](https://reactjs.org/docs/render-props.html) 패턴)
  해당 함수는 jsx코드를 리턴해야한다.

  ⭐️⭐️ Provider와 Consumer를 함께 사용하면 Provider의 value 속성을 통해 값을 설정해주어야 한다.  
  **context를 생성할 때 설정한 디폴트 값을 사용**하고 싶다면 Provider 없이 Consumer만 사용하면 된다.  
  하지만 생성 당시의 디폴트값이 아닌 **context에 값을 설정(수정)하여 사용**하고 싶으면 Provider에서 value 속성을 통해 값을 설정해주면 된다.

  ```
  const Navigation = (props) => {
    return (
        <AuthContext.Consumer>
        {(ctx) => {
            return (
            <nav className={classes.nav}>
                <ul>
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                )}
                </ul>
            </nav>
            );
        }}
        </AuthContext.Consumer>
    );
  };
  ```

**3-2. context 접근하기 (useContext)**  

Consumer 대신에 useContext hook을 이용하여 context에 접근해보자.  
useContext hook을 import하고 선언한다.
접근할 context를 useContext 함수에 인자 값으로 넘겨주면 접근 가능!

```
import React, {useContext} from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext) //useContext hook!!

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
```

---

참고~!

- 디스트럭처링(Destructuring)은 구조화된 배열 또는 객체를 Destructuring(비구조화, 파괴)하여 개별적인 변수에 할당하는 것이다.  
  배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할 때 유용하다.
