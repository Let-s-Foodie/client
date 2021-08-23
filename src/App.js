import {React,useContext} from "react";


import MainPage from "./pages/MainPage";
import {BrowserRouter as Router,Route,Switch, useParams} from 'react-router-dom';
import AuthForm from '../src/component/AuthForm/AuthForm';
import SellerPage from './pages/SellerPage';
import SellerResgisterPage from './pages/SellerRegisterPage';
import DishForm from '../src/component/DishForm/DishForm';
import AuthContext from './store/auth-context';
import Home from "./pages/home";
import SellerAuth from '../src/component/AuthForm/SellerAuth';
const App = () => {

  const authCtx = useContext(AuthContext);
  
  return (
    <Router>

      <Switch>
          <Route path="/" component={Home} exact />
          {!authCtx.isLoggedIn && <Route path="/auth" ><AuthForm redirectLink="/"/></Route>}
          <Route path="/mainpage" component={MainPage} exact />
          <Route path="/seller" component={SellerPage} exact/>
          <Route path="/seller/dishes" component={DishForm} exact/>
          <Route path="/seller/register/:step" component={SellerResgisterPage} exact />
          
          {!authCtx.isLoggedIn  && <Route path="/seller/auth"><SellerAuth redirectLink="/seller" exact /></Route>}
          {/* <Route path ="*" component={Redirect} /> */}
         
      </Switch>
   
      
    </Router>
  );
};

export default App;
