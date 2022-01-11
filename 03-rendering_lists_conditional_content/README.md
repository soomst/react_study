<h1>[Rendering Lists & Condtional content]</h1>
 - Working With Really Dynamic Content

<h3>Array.prototype.map()</h3>
<li>Creates a new array populated with the results of calling a provided function on every element in the calling array.</li>
<li>아이템 목록을 map을 통해 출력할 때는, 항상 key를 추가해야 한다.(section 68)</li>

<h3>STATE</h3>
<h5>state 사용 시  useState import 필요<h5>
<li>useState : react가 제공하는 라이브러리, 값을 상태로 정의할 수 있도록 해준다.</li>
<li>useState함수는 전역, nested function에서 선언 불가, 컴포넌트 함수 내부에서만 직접적으로 불러 올 수 있음(예외는 추후에)</li>
<li>일반적 변수와 분명한 차이가 있음, state변수의 상태 변화에 따라 변수가 생성(할당)된 함수 재렌더링됨.</li>
<li>상태가 컴포넌트 인스턴스 기반 단위로 나누어져 있음. 변수 상태가 업데이트 되면, 컴포넌트 함수가 재실행됨.</li>
<li>왜 상수를 쓸까? </li>

<b>const [value, setValue] = useState(title : 'hello world!')</b>
value    : 변수명/값
setValue : value 변수 setter 함수.


State는 여러 가지 방법으로 업데이트될 수 있습니다!
지금까지, 우리는 유저 이벤트 발생 시 상태를 업데이트 했습니다 (예: 클릭)
이는 매우 일반적이지만 상태 업데이트에 꼭 필요한 것은 아닙니다. 어떤 이유로든 상태를 업데이트할 수 있습니다.
코스 후반부에서, 
완료된 Http 요청을 볼 수 있지만(여기서 반환된 Http 응답을 기반으로 상태를 업데이트하려고 함) 타이머가 만료되어 상태를 업데이트할 수도 있습니다 ( <b>setTimeout()</b>으로 설정).

useState사용 시, 이전 상태의 snapshot에 의존하는 경우..
setValue({...value, title : 'bye world~'})가 아닌, 

<b>setValue((prevState)=>{
    return { ...prevState, title : 'bye world~'}
})</b>
로 사용하자!

prevState : 이전 상태의 snapshot을 가져올 수 있음.<br/>
return은 새로운 상태의 snapshot을 해줘야 겠지..?!<br/>
이전 방법처럼이 아닌 이렇게 왜 해야하는가?? react가 상태 업데이트를 계획하는 경우를 생각해야 한다.<br/>
==> 즉시 일어나는 업데이트를 해주는 것이 아닌 계획성이므로 <br/>
*** 동시에 많은 상태 업데이트를 하게 된다면, 오래되거나 잘못된 상태 snapshot에 의존할 가능성이 열린다. ***<br/>
*** 이렇게 하면 inner function에서 제공하는 상태 snapshot이 항상 최신 상태 snapshot이라는걸 React가 보장한다. ***<br/>

<h3>상향식 컴포넌트 통식(Lifting State Up)</h3>
<li>차례차례로 자식에서 부모에게 props전달. (중간 단계 건너뛸 수 없음~!)</li>
<li>자식 컴포넌트 호출 시, props지정. props를 통해 자식 컴포넌트가 부모 컴포넌트로 소통할 수 있음.</li>

 