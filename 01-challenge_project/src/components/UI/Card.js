import React from "react";
import classes from './Card.module.css' //모듈 css를 사용할 땐 이렇게!

const Card = (props) => {
    return (
        <div className={`${classes.card} ${props.className}`}>  {/* card 모듈의 클래스도 적용하면서 card를 쓰는 다른 js들의 클래스명도 적용하게 함 */}
            {props.children}
        </div>
    )
}

export default Card;