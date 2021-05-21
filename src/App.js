import React from "react";
import MainPage from "./component/MainPage/MainPage";
import {Route} from 'react-router-dom';
import Jumbotron from "./component/MainPage/Jumbotron";
import MainNavigation from "./component/Layout/MainNavigation";
const App = () => {
  return (
    <>
      <MainNavigation/>
      <Route exact path="/">
        <Jumbotron/>
      </Route>
      <Route path="/mainpage">
        <MainPage/>
      </Route>
      
    </>
  );
};

export default App;
