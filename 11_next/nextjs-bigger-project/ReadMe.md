# next JS 익히기 Project

- \_app.js  
   최상위 컴포넌트와 같다.(NextJS가 렌더링하는 최상위 컴포넌트처럼 작동한다.)

  ```
    function MyApp({ Component, pageProps }) {
        return <Component {...pageProps} />
    }
  ```

  { Component, pageProps } : NextJS가 자동으로 해당 프로퍼티를 MyApp 컴포넌트로 보낸다.

  - Component : 렌더링 될 실제 페이지 콘텐츠를 저장하고 있는 프로퍼티
  - pageProps : 페이지가 받는 특수 프로퍼티

  **모든 페이지에 적용할 컴포넌트나 설정이 있다면 \_app.js 파일을 활용해 추가해준다.**
