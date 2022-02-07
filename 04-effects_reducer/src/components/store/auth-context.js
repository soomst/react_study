import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout : ()=> {},
    onLogIn: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
        if (storedUserLoggedInInformation === "1") {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("isLoggedIn"); //전역객체, 브라우저에서 제공
    }

    const loginHandler = (email, password) => {
        setIsLoggedIn(true)
        localStorage.setItem("isLoggedIn", "1"); //전역객체, 브라우저에서 제공
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn : isLoggedIn,
                onLogIn : loginHandler,
                onLogout : logoutHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext