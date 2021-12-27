< Component-Driven User Interfaces>
- components
- props         : 컴포넌트 간에 데이터 공유 시 사용.
- children prop(40강) : 태그 사이에 있는 내용들. 
                  태그를 사용할 때, 따로 children prop key를 지정하지 않아도 된다. (ex. Card.js)
- JSX란? (42강)
    just syntactic sugar
        프로그래밍 언어 차원에서 제공되는 논리적으로 간결하게 표현하는 것.
        중복되는 로직을 간결하게 표현하기 위해 나타나게 되었다.
- JSX는 어떻게 작동하는가?
    JSX코드를 사용할 때, JSX코드는 'React.createElement(블라블라~)'로 변환된다.
    따라서, (최신)기술적으로 jsx코드를 사용하는 js 내에 import React from 'react'를 해줄 필요는 없지만
    내부에서 react가 계속 사용되어진다는 것을 잊지 말자.

- 파일 정리방벙(43강)
- 화살표 함수 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Q. Which kind of code do you write when using React.js?
A. Declarative JS Code.

Q. What is "JSX"?
A. It's a special, non-standard syntax which is enable in React projects.

Q. Why is React all about "Components"?
A. Every UI in the end up is made up of multiple building blocks(=components), 
   hence it makes sense to think about user interfaces as "combinations of components".

