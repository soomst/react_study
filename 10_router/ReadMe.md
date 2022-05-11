# Router

react-route-dom..!!  
중첩 route를 지원해준다.  
따라서, 특정 컴포넌트 내에 정의된 route는 해당 컴포넌트가 활성화 되면 사용할 수 있다..!

## basic

1. 'react-router-dom' install
2. index.js에서 BrowserRouter import하여, 제일 상위 컴포넌트를 감싸줌.
3. 컴포넌트(e.g. app.js)에서 경로(path) 설정 해줌.

---

## Link

페이지 이동을 할 때, a 태그를 사용할 수 있지만 그렇게 되면 새로운 요청을 보내게 된다.  
따라서 SPA의 의미를 가져가지 못하게 된다.  
이러한 부분을 해결하기 위해, '**Link**'를 사용하자.

### e.g. Link

```
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
```

## Nav Link

기존 Link와 다르게 **활성화된 Link**에 css class를 설정해줄 수 있다.  
**activeClassName** props를 통해서!

```
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
```

---

## useParams

파라미터(매개변수)를 return해주는 hook

---

## Switch

경로의 시작이 url과 맞는 경우, wrapping된 컴포넌트를 보여준다. (버전 5)  
경로가 전체 경로랑 정확히 맞는지 확인하려면, Switch 컴포넌트에 **exact** prop을 추가해주면 된다.

```
import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
```

---

## Redirect

특정 URL로 들어온 경우, 다른 경로로 redirect 해줌

---

## useHistory

(페이지)이동 경로를 확인하고 변경할 수 있다.

---

## [Prompt](https://v5.reactrouter.com/core/api/Prompt)

```
import { Prompt } from "react-router-dom";

<Prompt
  when={ formIsHalfFilledOut  }
  message={(location) =>
    "Are you sure ypu want to leave? All your entered data will be lost!"
  }
/>
```

- when: boolean  
  Instead of conditionally rendering a <Prompt> behind a guard, you can always render it but pass when={true} or when={false} to prevent or allow navigation accordingly.
- message([location, action]): func  
  Will be called with the next location and action the user is attempting to navigate to. Return a string to show a prompt to the user or true to allow the transition.

  ## useLocation

  location 객체에 접근하게 하고, location 객체엔 최근 로드된 페이지와 URL에 대한 정보가 있다.

  ### new URLSearchParams : js에 원래 있음.

---

# firebase 통해서 배포하기

배포 후 설정된 url : https://react-http-42cd7.web.app
커스텀 url도 만들 수 있음.

host를 끊고 싶다면,
firebase hosting:disable 하면 됨
