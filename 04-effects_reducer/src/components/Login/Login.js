import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//emailReducer은 컴포넌트 내에서 만들어진 데이터는 필요하지 않으므로, Login컴포넌트 외부에서 만듦!!!
//그러므로 컴포넌트 함수 내부의 것들과 상호작용 하는 일들이 없음!
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value : action.val, isValid : action.val.includes('@')}
  }

  if (action.type === 'INPUT_BLUR') {
    return {value : state.value, isValid : state.value.includes('@')}
  }

  return {value : '', isValid : false}
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value : action.val, isValid : action.val.trim().length > 6}
  }

  if (action.type === 'INPUT_BLUR') {
    return {value : state.value, isValid : state.value.trim().length > 6}
  }

  return {value : '', isValid : false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail]       = useReducer(emailReducer   , {value : '', isValid : null}) //이메일과 이메일 유효성 대해 useReducer활용
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value : '', isValid : null}) //패스워드와 패스워드 유효성 대해 useReducer활용

  //객체의 destructuring
  const { isValid: emailIsValid }    = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(()=>{
    //디바운싱(Debouncing) : 연이어 발생한 이벤트를 하나의 그룹으로 묶어서 처리하는 방식
    //한 번에 하나의 타이머만 실행됨.
    const identifier = setTimeout(() => {
      console.log("Checking from validity!")
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 500) //5초가 지난 후에 수행

    return () => {
      console.log("CLEAN UP!")
      clearTimeout(identifier)
    } //클린업 함수
  }, [emailIsValid, passwordIsValid]) //emailState/passwordState로 dependency를 잡으면, 불필요한 호출이 잦아짐.
 
  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val : event.target.value})

    // 다른 state를 참조하여 상태를 update시키므로, 참조값 상태가 가장 최신이 아닐 수도 있으니 이 방법 안씀
    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // )
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT', val:event.target.value});

    // 다른 state를 참조하여 상태를 update시키므로, 참조값 상태가 가장 최신이 아닐 수도 있으니 이 방법 안씀
    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // )
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(passwordState.isValid);
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
