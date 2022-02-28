import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggele , setAllowToggele]  = useState(false)

  console.log('APP RUNNING')

  const toggleParagraphHandler = useCallback(()=>{
    if (allowToggele) { //APP 컴포넌트가 처음 실행되었을 때의 allowToggele 값
      setShowParagraph((prevShowParagraph) => !prevShowParagraph)
    }
  }, [allowToggele])

  const allowToggeleHandler = () => {
    setAllowToggele(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>  {/* 컴포넌트가 재실행되면 모든 자식 컴포넌트도 재실행, 재평가된다! */}
      <Button onClick={allowToggeleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;

//useMemo test
// import React, { useState, useCallback, useMemo } from 'react';
// import Button from './components/UI/Button/Button'
// import DemoList from './components/Demo/DemoList';

// import './App.css';

// function App() {
//   const [listTitle, setListTitle] = useState('My List')

//   const chngTitleHandler = useCallback(()=>{
//     setListTitle('NewTitle')
//   }, [])

//   const listItems = useMemo(()=> [5,3,1,10,9], [])

//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       <DemoList title={listTitle} items={listItems}/>
//       <Button onClick={chngTitleHandler}>Change List Title</Button>
//     </div>
//   );
// }

// export default App;