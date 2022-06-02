# NextJS

React를 기반으로 하는 프레임워크이다.

- NextJS란?
- File-based Routing & Page Pre-rendering
- NextJS로 풀스택 애플리케이션 만들어보기

---

## NextJS란?

NextJS 공홈에 생산용 React **프레임워크**라고 소개되어져 있다.
NextJS는 React 코드를 쓰며(react 특징들을 사용할 수 있음) 단지 React 앱을 강화시키고 더 많은 특징듣을 쉽게 사용할 수 있게 해준다.
따라서 NextJS는 일반적인 문제를 해결하고 React 앱을 더 쉽게 구축할 수 있다.

### NextJS의 주요기능

1. **서버 사이드 렌더링(SSR)을 내장하고 있다.**  
   React는 클라이언트 사이드 렌더링(CSR)을 내장하고 있지만, **_NextJS는 서버 사이드 렌더링(SSR)을 내장하고 있다._**

   ***

   여기서 잠깐!!

   💡 **클라이언트 사이드 렌더링(CSR)이란?**

   반대 개념인 페이지의 내용을 브라우저에서 그리는 클라이언트 사이드 렌더링(CSR)을 내장하고 있다.  
   따라서 사용자가 페이지에 진입 후(클라이언트 쪽에서) 페이지 내 자바스크립트 코드가 실행될 때 데이터를 가져올 수 있으므로  
   데이터를 가져오는 시간을 사용자는 기다린 후 화면을 볼 수 있다.

   이러한 경우가 큰 문제가 되는건 아니지만 검색 엔진 최적화(SEO)가 중요한 경우 문제가 될 수 있다.  
   로그인을 해야만 볼 수 있는 화면 같은 경우 검색 엔진이 볼 수 없기에 검색 엔진 최적화(SEO)가 중요하지 않지만,  
   콘텐츠가 많이 공개되어 있는 화면 같은 경우 검색 엔진 최적화(SEO)가 중요하다!  
   **_검색 엔진 크롤러는 서버에서 들어온 비어있는 초기 HTML만 바라볼 수 있기 떄문에 검색 엔진 최적화(SEO)가 제대로 이루어지지 않을 수 있다._**  
   따라서 **이런 경우를 보완하기 위해 서버 사이드 렌더링(SSR)이 필요하다.**

   💡 **서버 사이드 렌더링(SSR)이란?**

   서버에서 페이지를 그려 클라이언트(브라우저)로 보낸 후 화면에 표시하는 기법을 말한다.  
   따라서 페이지 콘텐츠를 클라이언트가 아닌 서버에서 전적으로 준비하는 것을 의미한다.

   ***

   물론 ReactJS에서도 SSR을 추가할 수 있는 기능이 내장되어 있지만, 추가 설정이 까다롭기 때문에 구현하기 어려울 수 있다.  
   그러나 NextJS에서는 SSR이 내장되어 있으므로 NextJS로 앱을 만들면 추가 설정 없이 자동으로 서버에서 사전 렌더링을 하게 된다.  
   따라서 NextJS를 통해 사용자는 깜빡이는(로딩) 상태 화면을 보지 않아도 되고, 검색 엔진도 다 불러와진 데이터를 볼 수 있게 되므로 SEO 문제를 해결할 수 있다.  
   또한 NextJS에서는 SSR과 CSR을 혼합하여 사용할 수 있다.  
   대화형 인터페이스 경우 CSR을, 초기 로딩 시에는 SSR을 사용할 수 있다는 것이다.(결론 아주 좋다.)

2. **파일 기반 Routing**  
   Routing이란 사용자에게 여러 페이지가 있는 것처럼 보이게 하는 것으로, Navigator와 다른 페이지를 로딩하는 것이 주된 라우터의 역할이다.  
   보통 React에서는 React-Router 라이브러리를 사용해왔으며, 주로 React에서는 Routing이 코드에서 설정 되었다.  
   React-Router는 좋은 패키지(라이브러리)이지만...  
   코드에서 Routing이 설정 된 경우 버전에 따라 코드를 수정해야 할 수도 있고, 일단 코드를 작성해야 한다...!  
   (페이지 역할 하는 컴포넌트를 별도 폴더에 저장하고, 라우트 설정을 복제하고 등등등...)  
   **그러나!! NextJS에서는 이러한 코드 내 Route 정의를 없앤다.**  
   NextJS 앱 내 **pages**폴더에 라우트와 경로를 정의하면 Routing 설정이 끝난다.  
   ==> 코드를 적게 작성하면서 작업량을 줄일 수 있고, 이해하기가 쉬워진다.

3. **fullstack 프레임워크**  
   백엔드(서버사이드)코드를 React apps에 NextJS를 통해서 쉽게 추가할 수 있다.  
   (ex. 데이터 저장, 데이터 가져오기, 인증 프로세스 구현 등등)