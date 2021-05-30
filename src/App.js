import {React,useContext} from "react";

import MainPage from "./component/MainPage/MainPage";
import {Route,Switch, Redirect} from 'react-router-dom';
import Jumbotron from "./component/MainPage/Jumbotron";
import MainNavigation from "./component/Layout/MainNavigation";
import AuthForm from '../src/component/AuthForm/AuthForm';
import AuthContext from './store/auth-context';
const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <MainNavigation/>
     
       
          <Route exact path="/">
            <Jumbotron/>
          </Route>
          <Route path="/mainpage">
            <MainPage/>
          </Route>
          {!authCtx.isLoggedIn &&
          (<Route path="/auth">
            <AuthForm/>
          </Route>)}
        
            <Route path="*">
              <Redirect to ='/' />
              {/* OR just showing 404 page */}
            </Route>
      
     
      
    </>
  );
};

export default App;
