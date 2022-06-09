# 파일 기반 라우팅 핵심 기초 익히기 프로젝트

NextJS 프로젝트는 이미 최신 React 설정을 지원하므로, 파일 최상단에
"import React from 'react'" 는 별도로 작성하지 않아도 된다.

---

## pages 폴더 내 파일 정의

### index.js

root page, 도메인에 /까지만 있는 요청이 들어오면 index.js를 읽어 들임..(like, index.html)

### index.js외에 다른 파일들

파일 명이 곧 경로가 된다.  
예를 들어 도메인 뒤에 '/news'를 붙여서 호출 하면 news.js 파일을 불러온다.

---

이처럼 pages 폴더 내 폴더 및 파일을 통해 경로를 나타낼 수 있다.

- 중첩경로는 어떻게?  
  pages  
   news  
   index.js --> 경로 : `our-domain.com/news`  
   detail.js --> 경로 : `our-domain.com/news/detail`

## Dynamic Page(동적) 경로 지정하는 방법

- **[식별자].확장자**  
  이렇게 파일명을 지정하여 파일을 생성하면, 해당 파일의 경로가 들어갈 위치에 정해진 값이 아닌 여러 다른 값들이 들어 올 수 있다.

  - 동적 매개변수(식별자) 값 가져 오는 법

    - 'next/router'의 useRouter hook을(react hook이 아닌 next hook) 사용하여 가져올 수 있다.

      ```
      import { useRouter } from "next/router"; //hook import

      function DetailPage() {
        const router = useRouter();

        const newsId = router.query.newsId; //router 객체를 통해 동적 경로의 매개변수가 무엇인지 알 수 있다.

        return <h1>The Detail Page</h1>;
      }
      ```

---

- 페이지 간 연결

1.  a 태그 이용 : SPA가 아니게 됨.
2.  'next/link'의 기본 export 모듈(Link라 하자)을 사용.

    - SPA 유지 : Link가 a 태그를 렌더링 하고, a 태그의 클릭을 감지해서 브라우저 기본 동작으로 새로운 HTML 페이지를 받는 요청을 보내지 못하도록 한다.
    - 유저가 URL을 입력하고 직접 들어오면, 이미 완성된 HTML 페이지를 볼 수 있다. --> seo 굿굿
