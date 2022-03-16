import { useState } from "react"

//커스텀 hook 다시 만들어보기~
const useInputTest = (valueIsValid) => {
    const [value, setValue] = useState('');
    const [valueTouched, setValueTouched] = useState(false);
    const IsValid = valueIsValid(value);
    const hasError = !IsValid && valueTouched

    console.log(IsValid)
    console.log(hasError)

    const chngHandler = (e) => {
        setValue(e.target.value)
    }

    const blurHandler = (e) => {
        setValueTouched(true)
    }

    const inputClasses = hasError ? "form-control invalid" : "form-control";

    const resetValue = () => {
        setValue('')
        setValueTouched(false)
    }

    return {
        value : value,
        valueIsValid : IsValid,
        hasError : hasError,
        inputClasses : inputClasses,
        chngHandler : chngHandler,
        blurHandler : blurHandler,
        resetValue : resetValue,
    }
}

export default useInputTest