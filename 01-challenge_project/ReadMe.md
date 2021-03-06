<h1>add User project. (practice)</h1>

<ul>
    <li>module.css practice</li>
    <li>유효성 검사 로직 구현</li>
    <li>wrapper</li>
    <li>React Portals</li>
    <li>ref</li>
</ul>

<hr/>

<h3>module.css practice</h3>
<span>
    modul.css는 js에 import할 때, <b>import classes from '~~.modul.css'</b><br/>
    다른 js에서 import해서 사용하려고 할 때, className을 같이 쓰고 싶으면?<br/>
    (이전 버전) 변수 선언 후, props로 받아온 값이랑 이어서 바인딩 해줌.<br/>
    (이번 버전) "className={`${classes.블라블라} ${props.className}`}" 이런식으로 사용
</span>

<hr/>

<h3>유효성 검사 로직 구현</h3>
<span>
   error modal 창 컨트롤 연습 (ErrorModal.js, AddUser.js 참조)
</span>

<hr/>

<h3>wrapper</h3>
<span>
   <ul>
    <li>wrapper를 만들어서 사용하기</li>
    <li><></> 사용하기 (빌드 워크플로우가 지원해야만 가능하기 때문에 프로젝트 환경에 따라 작동이 안될 수 있다.)</li>
    <li>React.Fragment (리액트에서 제공)</li>
   </ul>
</span>

<hr/>

<h3>React Portals</h3>
<h4>컴포넌트를 랜더링 시킬 때 랜더링 시킬 DOM을 선택하여 부모 컴포넌트의 바깥에서도 렌더링 할 수 있게 해주는 기능</h4><br/>
<span>
modal은 페이지 위의 오버레이이며, 논리적으로 모든 것 위에 위치해야한다. <br/>
스타일링을 통해 div가 modal처럼 보이게 하는 것은 바람직하지 않음.<br/>
이러한 부분을 해결하기 위해 <b>React Portals</b>를 배워보자.<br/>
</span>

<br/>
<h4>portal 이용 방법</h4>

1. 컴포넌트를 이식할 위치가 필요함. <br/>
   index.html에 이식 위치를 정한다. (index.html에서는 다양한 컴포넌트에 대한 여러 루트들을 만들 수 있다.)

2. 해당 위치에 포털이 필요함을 컴포넌트에게 알려야 한다. <br/>
   ReactDOM.createPortal(<b>리액트 노드, 포인터</b>)  ➡️  ErorrModal.js참고
   <ul>
    <li>리액트 노드 : 렌더링 되어야 하는 리액트 노드 (반드시 JSX여야 한다)</li>
    <li>포인터 : 요소들이 렌더링 되어야 하는 실제 DOM 안의 컨테이너를 가리킨다.</li>
   </ul><br/>

**React.reder**와 다름 주의 <br/>

<hr/>

<h3>ref</h3>
<h4>기본 역할은 다른 DOM요소로 접근해서 작업할 수 있게 해주는 역할이다.</h4>

<span>
   선언한 useRef 변수를 HTML요소의 ref prop을 통해 연결할 수 있으며,<br/>
   uesRef 변수로 연결한 HTML요소에 접근할 수 있다.<br/>
   uesRef 변수는 항상 <b style='color:red;'>current</b> 속성을 가지고 있는 <b style='color:red;'>객체</b>를 반환한다.
</span>
<br/><br/>
<h4>ref 이용 방법 (AddUser.js 참고)</h4>

1. useRef hook을 사용하기 위해 import해주자. (함수형 컴포넌트에서만 사용 가능)<br/>
    ```
    import React, { useRef } from "react";
    ```
2. useRef 변수를 선언하자.<br/>
    ```
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    ```
3. 선언한 useRef 변수를 HTML요소와 연결하자.<br/>
    ```
        <input
            type="text"
            id="username"
            value={enteredUserNm}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredUserAge}
            ref={ageInputRef}
          />
    ```
    key prop과 마찬가지로 내장 prop이며, 어느 HTML요소에도 추가할 수 있다.</br>
    따라서 어떤 HTML요소든 하나의 ref와 연결할 수 있다.</br></br>

ref로 DOM을 조작하는 경우는 드물며, 보통 DOM에 접근하기 위해서 사용..?!

<hr/>
[참고 내용]<br/>
react : 상태 관리 등을 비롯한 리액트의 모든 기능이 존재하는 라이브러리로 생각할 수 있음.<br/>
react-dom : react를 사용해 논리와 각종 기능들을 웹 브라우저로 가져온다, DOM과 호환되도록 만들어준다.
