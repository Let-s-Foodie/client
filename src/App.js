import {React,useContext,useState} from "react";

import Main from "./component/Main/Main";
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AuthForm from '../src/component/AuthForm/AuthForm';
import AuthContext from './store/auth-context';
import Sidebar from "./component/Sidebar";
import InfoSection from "./component/InfoSection";
import {homeObjOne,homeObjTwo} from './component/InfoSection/Data';
import Services from "./component/Services";
import Home from "./pages";
const App = () => {

  const authCtx = useContext(AuthContext);
  return (
    <Router>

    <Switch>
      <Route path = "/" component={Home} exact />
      {!authCtx.isLoggedIn && <Route path="/auth" component={AuthForm} />}
      <Route path="/mainpage" component={Main} exact />
      <Route path ="*" component={Redirect} />
    </Switch>
   
      
    </Router>
  );
};

export default App;
