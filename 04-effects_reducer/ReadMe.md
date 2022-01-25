<h1>Effects, Reducer & Context</h1>
<h3>

**상태 공유와 업데이트를 용이하게 만들어준다.**

</h3>

<ul>
    <li>Effects : Working with (Side) Effects</li>
    <li>Reducer : Managing more Complex State with Reducers</li>
    <li>Context : Managing App-Wide or Component-Wide State with Context</li>
</ul>

<hr/>

<h3>Effect (= Side Effect)</h3>
<span>
    함수가 실행되면서 함수 외부에 존재하는 값이나 상태를 변경시키는 등의 행위<br/>
    (ex. APP내에서 고려되는 모든 사항들 :  브라우저 저장소에 저장된 데이터를 백엔드 서버에 HTTP 요청 보내기, 타이머 설정 및 관리 등)<br/>
    ➡️ 이러한 작업은 특히 렌더링을 차단/지연할 수 있으므로 일반적인 컴포넌트 평가 및 렌더링 주기 외부에서 발생해야 한다.<br/><br/>

**React에서는 Side-Effect 처리를 위해 useEffect()함수를 제공**
</span>

<br/>
<h3>useEffect() hook</h3>

    useEffect(() => {...}, [dependencies])

<ul>
    <li>첫번째 인수 : 지정된 종속성이 변경된 경우, 모든 구성 요소 평가 후에 실행해야 하는 함수</li>
    <li>두번째 인수 : 이 effcet의 종속성(배열) - 종속성이 변경된 경우에만 함수가 실행됨.</li>
</ul>
<br/>

**종속성 배열값의 일부 변화가 생기면, 첫번째 인수인 함수가 실행된다.**

<br/><br/>

<h4>[dependencies] 유형</h4>
<ul>
    <li>
        [] : app 시작 시 한번만 실행.<br/>
             배열 내 defendency가 존재하지 않아 이후에 defendency가 바뀌지 않기 때문.
    </li>
    <li>[state1, state2, ...] : effect 함수에서 사용하는 "모든 것"을 종속성으로 추가해야 함.<br/>
                                즉, 거기에서 사용하는 모든 상태 변수와 함수를 포함합니다.
    </li>
</ul><br/>
 
[종속성 추가 시  예외사항]

<ul>
    <li>

**상태 업데이트 기능을 추가할 필요가 없음.** <br/>
              React는 해당 함수가 절대 변경되지 않도록 보장하므로 종속성으로 추가할 필요가 없음.
    </li>
    <li>
    **"내장" API 또는 함수를 추가할 필요가 없음.** <br/>
              이러한 브라우저 API/전역 기능은 React 구성 요소 렌더링 주기와 관련이 없으며 변경되지 않음.<br/>
              (해당 변수가 변경되는 경우, 또는 그 반대의 경우에도 구성 요소는 재평가되지 않음.)
    </li>
        <li>
    **변수나 함수를 추가할 필요가 없음.** <br/>
              **구성 요소 외부에서 정의**된 함수 또는 변수도 구성 요소 함수 내부에서 생성되지 않으므로 변경해도 구성 요소에 영향을 주지 않음.<br/>
              (ex. fetch(), 나 localStorage 등등 - 브라우저에 내장된 함수 및 기능, 따라서 전역적으로 사용 가능)
    </li>
</ul>

effect 함수에서 사용하는 모든 "것들"을 추가해야 한다.<br/> 
구성 요소(또는 일부 상위 구성 요소)가 다시 렌더링 되어 이러한 "것들"이 변경될 수 있는 경우.<br/> 
그렇기 때문에 컴포넌트 함수에 정의된 변수나 상태, 컴포넌트 함수에 정의된 props 또는 함수는 종속성으로 추가되어야 한다!<br/><br/>

<h3>예시)</h3>
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
<hr/>

