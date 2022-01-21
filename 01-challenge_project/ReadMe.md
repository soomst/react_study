<h1>add User project. (practice)</h1>

<ul>
    <li>module.css practice</li>
    <li>유효성 검사 로직 구현</li>
    <li>wrapper</li>
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