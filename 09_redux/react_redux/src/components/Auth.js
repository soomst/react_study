import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAcions } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authAcions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
