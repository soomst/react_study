import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, [])


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);

    //APP이 리로드 되도 로그인 데이터를 잊지 않기 위해, 리로딩의 영향을 받지 않는 곳에 데이터를 저장하자
    //브라우저 스토리지 : 쿠키, 로컬스토리지 등등 --> 이러한 스토리지 구조(매커니즘)는 브라우저에 내장된 것이며, 리액트로부터 완전히 독립적이다.
    localStorage.setItem('isLoggedIn', '1'); //전역객체, 브라우저에서 제공
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); //전역객체, 브라우저에서 제공
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
