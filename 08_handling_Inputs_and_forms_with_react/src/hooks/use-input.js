import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const inputClasses = hasError
    ? "form-control invalid"
    : "form-control";

  const inputReset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value : enteredValue,
    hasError : hasError,
    IsValid : valueIsValid,
    inputClasses,
    inputReset,
    valueChangeHandler,
    valueBlurHandler
    }
};

export default useInput;
