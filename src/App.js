import {React,useContext,useState} from "react";

import MainPage from "./pages/MainPage";
import {Route,Switch, Redirect} from 'react-router-dom';
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AuthForm from '../src/component/AuthForm/AuthForm';
import AuthContext from './store/auth-context';
import Sidebar from "./component/Sidebar";
import InfoSection from "./component/InfoSection";
import {homeObjOne,homeObjTwo} from './component/InfoSection/Data';
import Services from "./component/Services";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
     
       
          <Route exact path="/">
            {/* <Jumbotron/> */}
            <HeroSection/>
             <Services/>
         
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjOne}/>
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
