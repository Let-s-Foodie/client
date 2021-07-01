import {React,useContext} from "react";

import Main from "./component/Main/Main";
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import AuthForm from '../src/component/AuthForm/AuthForm';
import SellerPage from './pages/SellerPage';
import AuthContext from './store/auth-context';
import Home from "./pages/home";

const App = () => {

  const authCtx = useContext(AuthContext);
  
  return (
    <Router>

      <Switch>
          <Route path="/" component={Home} exact />
          {!authCtx.isLoggedIn && <Route path="/auth" component={AuthForm} />}
          <Route path="/mainpage" component={Main} exact />
          <Route path="/seller/dishes" component={SellerPage} exact/>
          <Route path ="*" component={Redirect} />
         
      </Switch>
   
      
    </Router>
  );
};

export default App;
