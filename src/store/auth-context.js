import React, {useState} from 'react';
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});


export const AuthContextProvider = (props) => {
     const [token, setToken] = useState(null);
     const userIsLoggedIn = !!token; //if token is a string that is empty, this will return false
     const loginHandler = (token) => {
        setToken(token);
        console.log("token", token)
    };
     const logoutHandler = () => {
         setToken(null);
     }

     const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
     return <AuthContext.Provider value={contextValue}>
         {props.children}
     </AuthContext.Provider>;
}

export default AuthContext;