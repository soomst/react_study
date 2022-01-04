[User Interaction & State]
정적인 프로그램을 동적으로 변화 과정을 배우는 강의

<h1>Module Content</h1>
<li>Handling Events</li>
<li>Updating the UI & Working with "State"</li>
<li>A Closer Look At Components & State</li>
<li>컴포넌트 인스턴스 기반 단위, 하나 이상의 컴포넌트를 생성할 때도 개별 상태를 가지게 된다.</li>

<h3>STATE</h3>
<h5>state 사용 시  useState import 필요<h5>
<li>useState : react가 제공하는 라이브러리, 값을 상태로 정의할 수 있도록 해준다.</li>
<li>useState함수는 전역, nested function에서 선언 불가, 컴포넌트 함수 내부에서만 직접적으로 불러 올 수 있음(예외는 추후에)</li>
<li>일반적 변수와 분명한 차이가 있음, state변수의 상태 변화에 따라 변수가 생성(할당)된 함수 재렌더링됨.</li>
<li>상태가 컴포넌트 인스턴스 기반 단위로 나누어져 있음. 변수 상태가 업데이트 되면, 컴포넌트 함수가 재실행됨.</li>
<li>왜 상수를 쓸까? </li>

<b>const [value, setValue] = useState('hello world!')</b>
value    : 변수명/값
setValue : value 변수 setter 함수.


State는 여러 가지 방법으로 업데이트될 수 있습니다!
지금까지, 우리는 유저 이벤트 발생 시 상태를 업데이트 했습니다 (예: 클릭)
이는 매우 일반적이지만 상태 업데이트에 꼭 필요한 것은 아닙니다. 어떤 이유로든 상태를 업데이트할 수 있습니다.
코스 후반부에서, 
완료된 Http 요청을 볼 수 있지만(여기서 반환된 Http 응답을 기반으로 상태를 업데이트하려고 함) 타이머가 만료되어 상태를 업데이트할 수도 있습니다 ( <b>setTimeout()</b>으로 설정).