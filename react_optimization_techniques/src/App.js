import React, { useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState()

  const toggleParagraphHandler = ()=>{
    setShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>  {/* 컴포넌트가 재실행되면 모든 자식 컴포넌트도 재실행, 재평가된다! */}
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
