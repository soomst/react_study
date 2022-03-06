## react HTTP 요청 보내기  

dummyData로 더미API(https://swapi.dev/)를 사용하여 get요청을 보내보자.  

---
자바스크립트를 통해서 서버에 데이터를 요청하기 위해 사용할 API/라이브러리를 알아보자.  
<br/>

### [axios](https://github.com/axios/axios)
- 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.
- HTTP 요청 전송과 응답 관리를 아주 간단하게 만들어준다.
- 어떤 자바스크립트 라이브러리를 사용해도 상관 없다.(라이브러리 없이도 사용 가능)  

### fetch
- 자바스크립트 내에서 HTTP 요청을 전송하는 내장 매커니즘
- 데이터 전송/응답을 가능하게 해준다.  
이를 이용하여 HTTP 요청을 전송하거나 응답을 관리할 수 있다.  
- 사용이 쉽고 간단하다.
- Promise 객체로 값을 Return 받는다.
- Response 타입별로 쉽게 적용 가능하다.(JSON, Blob 등등)

```
fetch(url, options)
  .then(function(response) {
    //code...
  }).catch(function(error) {
    //error...
    console.log(error);
  });
```

- url : 요청을 전송하려는 URL (문자열 형태)
- options : http 요청 시 설정할 옵션 (객체 형태, 디폴트는 GET 방식)   
options 객체 예)  
    - method: 'POST', // *GET, POST, PUT, DELETE, etc.  
    - mode: 'cors', // no-cors, *cors, same-origin  
    - cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached  
    - credentials: 'same-origin', // include, *same-origin, omit  
    - headers: {  
      'Content-Type': 'application/json'  
      // 'Content-Type': 'application/x-www-form-urlencoded',  
    },  
    - redirect: 'follow', // manual, *follow, error  
    -  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin,  strict-origin-when-cross-origin, unsafe-url  
    - body: JSON.stringify(data) // body data type must match "Content-Type" header    
- then(...) : 정상 통신 성공했을 때 콜백 메소드
- catch(...) : 정상 통신 실패하여 에러가 발생되었을 때 어떻게 처리할 것인지를 수행하는 메소드

---

### [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:  
  
- Informational responses (100–199)  
- Successful responses (200–299)
  - 200 : success  
- Redirection messages (300–399)
  - 300 : redirect
- Client error responses (400–499)
  - 400 : bad request
  - 404 : not found
- Server error responses (500–599)
  - 500 : internal error
