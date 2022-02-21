import React from "react";

const MyParagraph = (props) => {
    console.log('MyParagraph RUNNING')
    return <div>{props.children}</div>
}

export default MyParagraph