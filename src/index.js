import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from './store/auth-context';
import UserStorage from './service/auth';
import Dishes from './service/dishes';

const userStorage = new UserStorage(process.env.REACT_APP_API_KEY);
const dishes = new Dishes();
ReactDOM.render(
    <AuthContextProvider>
        <App userStorage={userStorage} dishes={dishes}/>
    </AuthContextProvider>
 ,
    document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
