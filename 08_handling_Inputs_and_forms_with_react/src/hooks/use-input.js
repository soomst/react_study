import { useReducer } from "react";

const initialInputState = {value : '', isTouched : false}

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'BLUR' :
      return {value : state.value, isTouched: action.isTouched}
    case 'INPUT' :
      return {value : action.value, isTouched: state.isTouched}
    default :
      return initialInputState
  }
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({type:'INPUT', value : event.target.value})
  };

  const valueBlurHandler = (event) => {
    dispatch({type:'BLUR', isTouched : true})
  };

  const inputClasses = hasError
    ? "form-control invalid"
    : "form-control";

  const inputReset = () => {
    dispatch({type:'RESET', value: '', isTouched: false})
  };

  return {
    value : inputState.value,
    hasError : hasError,
    IsValid : valueIsValid,
    inputClasses,
    inputReset,
    valueChangeHandler,
    valueBlurHandler
    }
};

export default useInput;
