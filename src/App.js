import {React} from "react";
import MainPage from "./component/MainPage/MainPage";
import {Route,Switch} from 'react-router-dom';
import Jumbotron from "./component/MainPage/Jumbotron";
import MainNavigation from "./component/Layout/MainNavigation";
import AuthForm from '../src/component/AuthForm/AuthForm';

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
          <Route path="/auth">
            <AuthForm/>
          </Route>
     
      
     
      
    </>
  );
};

export default App;
