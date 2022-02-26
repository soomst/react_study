## 컴포넌트가 재실행되면 모든 자식 컴포넌트도 re-rendering, re-evaluating 된다.  
#### re-rendering, re-evaluating 되지 않아도 되는 자식 컴포넌트가 있는 경우는 어떻게 해야할까?  
  
---

### [React.memo]

**React.memo()** 란?  

React.memo()로 wrap한 컴포넌트에 대해 React는 컴퍼넌트를 렌더링하고 결과를 메모이징(Memoizing)한다.  
그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.  
(React.memo()는 함수형 컴포넌트에 대해서만 메모이징 할 수 있다.)  
==> 퍼포먼스를 향상시킬 수 있다.  
<br/>
React.memo()는 컴포넌트 re-evaluating 효율과 props를 비교하는 효율을 바꾸는 것이므로 props의 수와 컴포넌트의 복잡성, 컴포넌트의 자식 컴포넌트 수에 따라 React.memo()가 유용할 수 있다.  
예를 들어, 자식 컴포넌트가 많아서 컴포넌트 트리가 크다면, 컴포넌트 트리의 상위에서 불필요한 가지가 리렌더링 되는것을 방지하므로써 React.memo가 유용하다.  
반면 컴포넌트의 props가 부모 컴포넌트가 re-evaluating 될 때마다 변한다면 React.memo는 적합하지 않다.

### >> React.memo()를 사용해보자.

App.js
```
import React, { useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState()

  const toggleParagraphHandler = ()=>{
    setShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
```

MyParagraph.js
```
import React from "react";

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNIG')
    return <div> {props.show ? 'This is new!' : ''} </div>
}

export default React.memo(DemoOutput)
```

Button.js
```
import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNIG')
  return (
    <button ... onClick={props.onClick} >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
```

App.js의 state값 변화로 인해 리렌더링 될 때,  
MyParagraph 컴포넌트는 메모이징(Memoizing)된 내용을 재사용하고, Button 컴포넌트는 리렌더링 된다.  
<br/>

#### 왜 그럴까?  
string, number (en-US), bigint (en-US), boolean, undefined, symbol, null은 js에서 원시값이다.  
그러나 배열이나 함수, 객체는 참조값 이므로 Button 컴포넌트에서 이전 props.onClick 함수와 App에서부터 새롭게 넘겨받은 props.onClick 함수는 다르다.  
<br/>

[참고자료]
- [js에서 원시값과 참조형의 차이란?!!]('https://academind.com/tutorials/reference-vs-primitive-values')  

---
  
### useCallback() 이란?  
기본적으로 컴포넌트 실행 전반에 걸친 함수를 저장하는 hook이다. react에 함수를 저장하여 매 실행마다 재생성하지 않도록 한다.  
메모리 내의 동일한 위치 중 하나에 저장되므로 동일한 함수(객체)인지 비교가 가능하다.  

<br/>

```
useCallback(() => {...}, [dependencies])
```

- 첫 번째 인수 : 저장할 함수
- 두 번째 인수 : useCallback 호출의 dependency 배열 (useEffect와 동일)  

<br/>

**useCallback**을 왜 사용해야 할까?  
1. js 함수 동등성
2. 의존 배열로 함수를 넘길 때 (클로져 개념 알기)
3. React.memo와 함께 사용하기  

<br/>

[참고자료]
- [클로져란?!!]('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures')  
- [useCallback 사용 이유 상세 페이지1]('https://www.daleseo.com/react-hooks-use-callback/')  
- [useCallback 사용 이유 상세 페이지2]('https://dmitripavlutin.com/dont-overuse-react-usecallback/')  