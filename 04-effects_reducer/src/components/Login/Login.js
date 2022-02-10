import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input from '../UI/Input/Input';

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

  const authCtx = useContext(AuthContext)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

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
    if (formIsValid) {
      authCtx.onLogIn(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailIsValid}
          id='email'
          label='E-Mail'
          type='email'
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={emailInputRef}
        />
        <Input
          isValid={passwordIsValid}
          id='password'
          label='Password'
          type='password'
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          ref={passwordInputRef}
        />
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
