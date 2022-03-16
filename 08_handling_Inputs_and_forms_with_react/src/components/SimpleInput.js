import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    IsValid: nameIsValid,
    inputClasses: nameInputClasses,
    inputReset: resetNameInput,
    valueChangeHandler: nameChngHandler,
    valueBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    IsValid: emailIsValid,
    inputClasses: emailInputClasses,
    inputReset: resetEmailInput,
    valueChangeHandler: emailChngHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput((value) => /^[a-zA-Z0-9]+@[a-zA-Z0-9.]+$/.test(value));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();


    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChngHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChngHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
