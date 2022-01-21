import React, { useState } from "react";
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUserNm, setEnteredUserNm] = useState('')
    const [enteredUserAge, setEnteredUserAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (e) => {
        e.preventDefault(); //default js, 해당 이벤트의 기본 요청값을 막을 수 있음.

        //유효성 검사
        if (enteredUserNm.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError(
                {title:'Invalid input', message:'Please enter a valid name and age (non-empty values).'}
            )
            return;
        }

        if (+enteredUserAge < 1) { //숫자로 인식하도록 앞에 '+'추가
            setError(
                {title:'Invalid age', message:'Please enter a valid age (> 0).'}
            )
            return;
        }

        props.onSubmitUserInfo(enteredUserNm, enteredUserAge, Math.random().toString())

        setEnteredUserNm('') //초기화
        setEnteredUserAge('') //초기화
    }

    const errorHandler = () => {
        setError(null)
    }

    const onChngNameHandler = (e) => {
        setEnteredUserNm(e.target.value);
    }

    const onChngAgeHandler = (e) => {
        setEnteredUserAge(e.target.value);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} display={!error} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' onChange={onChngNameHandler} value={enteredUserNm}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input type='number' id='age' onChange={onChngAgeHandler} value={enteredUserAge}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )

}

export default AddUser