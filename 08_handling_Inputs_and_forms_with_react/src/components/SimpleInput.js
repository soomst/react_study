import {useRef, useState} from 'react'

const SimpleInput = (props) => {
  const [enterdName, setEnteredName] = useState('')
  const nameInputRef = useRef()

  const nameInputChngHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    console.log(enterdName)
    console.log(nameInputRef.current.value)

    setEnteredName('')
    nameInputRef.current.value = ''
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} value={enterdName} onChange={nameInputChngHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
