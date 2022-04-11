import { Route } from "react-router";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <h2>Welcome, new user!</h2>
      </Route>
    </section>
  );
};

export default Welcome;
