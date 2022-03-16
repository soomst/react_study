import useInputTest from "../hooks/use-input2";

const checkName = (value) => (/^[a-zA-Z가-힣]{1,}$/).test(value)
const checkEmail = (value)=> (/^[a-zA-Z0-9]+@[a-zA-Z0-9.]+$/).test(value)

const BasicForm = (props) => {
  const {
    value : enteredFname,
    valueIsValid : fnameIsValid,
    hasError : fnameHasError,
    inputClasses : fnameClasses,
    chngHandler : fnameChngHadler,
    blurHandler : fnameBlurHandler,
    resetValue : resetFname,
  } = useInputTest(checkName)

  const {
    value : enteredLname,
    valueIsValid : lnameIsValid,
    hasError : lnameHasError,
    inputClasses : lnameClasses,
    chngHandler : lnameChngHadler,
    blurHandler : lnameBlurHandler,
    resetValue : resetLname,
  } = useInputTest(checkName)

  const {
    value : enteredEmail,
    valueIsValid : emailIsValid,
    hasError : emailHasError,
    inputClasses : emailClasses,
    chngHandler : emailChngHadler,
    blurHandler : emailBlurHandler,
    resetValue : resetEmail,
  } = useInputTest(checkEmail)

  const formIsValid = fnameIsValid && lnameIsValid && emailIsValid

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    resetFname()
    resetLname()
    resetEmail()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={fnameClasses}>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' value={enteredFname} onChange={fnameChngHadler} onBlur={fnameBlurHandler}/>
          {fnameHasError && <p className='error-text'>성을 입력해주세요.</p>}
        </div>
        <div className={lnameClasses}>
          <label htmlFor='fname'>Last Name</label>
          <input type='text' id='fname' value={enteredLname} onChange={lnameChngHadler} onBlur={lnameBlurHandler}/>
          {lnameHasError && <p className='error-text'>이름을 입력해주세요.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={enteredEmail} onChange={emailChngHadler} onBlur={emailBlurHandler}/>
        {emailHasError && <p className='error-text'>올바른 이메일 형식이 아닙니다.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
