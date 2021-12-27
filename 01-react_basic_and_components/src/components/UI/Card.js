import React from 'react';
import './Card.css';

//wrapper component
const Card = (props) => {
    // children prop : 태그 사이에 있는 내용들. 태그를 사용할 때, 따로 children prop key를 지정하지 않아도 된다.
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;