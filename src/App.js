import {React,useContext} from "react";


import MainPage from "./pages/MainPage";
import {BrowserRouter as Router,Route,Switch, useParams, Redirect} from 'react-router-dom';
import AuthForm from './component/AuthForm/AuthForm';
import SellerPage from './pages/SellerPage';
import SellerInfoPage from './pages/SellerInfoPage';
import SellerResgisterPage from './pages/SellerRegisterPage';
import DishForm from '../src/component/DishForm/DishForm.jsx';
import AuthContext from './store/auth-context';
import Home from "./pages/home";
import SellerAuth from '../src/component/AuthForm/SellerAuth';
import ImageUploader from './component/Services/image_uploader';
import ShopDetailPage from './pages/ShopDetailPage';
const App = () => {
  const imageUploader = new ImageUploader();
  const authCtx = useContext(AuthContext);
  
  return (
    <Router>

      <Switch>
          <Route path="/" component={Home} exact /> 
          {!authCtx.isLoggedIn && <Route path="/auth" ><AuthForm redirectLink="/"/></Route>}
          <Route path="/mainpage" component={MainPage} exact />
          <Route path="/seller" component={SellerPage} exact/>
          {/* Protecting front end page */}
       
          <Route path="/seller/auth">
            {!authCtx.isLoggedIn ? <SellerAuth /> : <Redirect to="/seller/home"/>}      
          </Route>
          <Route path="/seller/home">
            {authCtx.isLoggedIn ? <SellerInfoPage /> : <Redirect to="/seller/auth" />}
          </Route>
          <Route path ="/seller/shop/:shopId">
            {authCtx.isLoggedIn ? <ShopDetailPage/> : <Redirect to="/seller/auth" />}
          </Route>
          <Route path ="/seller/dishes/:shopId">
            {authCtx.isLoggedIn ? <DishForm imageUpdoader={imageUploader} /> : <Redirect to="/seller/auth" />}
          </Route>
          <Route path ="/seller/register/:step">
            {authCtx.isLoggedIn ? <SellerResgisterPage /> : <Redirect to="/seller/auth"/>}
          </Route>
          
         
         
          
          
          {/* <Route path ="*"><Redirect to="/"></Redirect></Route> */}
         
      </Switch>
   
      
    </Router>
  );
};

export default App;
