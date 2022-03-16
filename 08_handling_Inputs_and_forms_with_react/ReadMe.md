## form 입력값 확인 및 검증  

- 입력값 가져오는 법  
(DOM을 조작하는 주체는 리액트여야 바람직함. ref를 통해 DOM을 직접 조작하는 것은 바람직 하지 못함.)
  1. ref 사용(비제어) : 입력 값에 관심 있는 경우가 폼이 제출 되었을 뿐인 경우 ref가 나음(과도한 업데이트는 안좋으니까)
  2. state 사용(제어) : 즉각적인 유효성 확인 등을 위해 키 입력 이후에도 입력된 값이 필요하다면 state가 나음  

---

### useForm hook  
참고 자료 : https://academind.com/tutorials/reactjs-a-custom-useform-hook

---

### hide code hide  
참고 자료 : https://academind.com/tutorials/hide-javascript-code

---

- Formik : 컴포넌트와 예번 React버전의 패턴을 쓰는 라이브러리이다.  
형식을 렌더링 하고 복잡한 형식과 유효성 검사할 때 유용하다. (state관리와 logic을 간소화하는게 핵심)