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
