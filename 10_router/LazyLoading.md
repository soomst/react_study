# Lazy Loading

Load code only when it's needed  
필요할때만 코드를 다운로드한다! 고로 다운로드 하는 동안 대체 UI 필요.

---

```
import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NoQuotesFound = React.lazy(() =>
  import("./components/quotes/NoQuotesFound")
);

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NoQuotesFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

```

1. React import
2. import한 컴포넌트를 React.lazy를 통해 import한다.
3. Suspense를 통해 대체 UI를 설정한다.
   - React.lazy를 통해 import한 컴포넌트를 사용하는 부분을 Suspense로 감싼다.
   - 해당 컴포넌트를 다운로드 하는 동안 보여줄 UI를 fallback에 선언한다.
