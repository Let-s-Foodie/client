import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Redirect } from "react-router-dom";
import SellerRegisterPage from "../SellerRegisterPage";
import { Route } from "react-router-dom";
const SellerRoute = ({ component: Component, loaded }) => {

  const authCtx = useContext(AuthContext);
  const isLoading = () => {
    if (!loaded) {
      return <></>;
    } else {
      if (authCtx.isLoggedIn && authCtx.isSeller) {
        return <Component />;
      } else if (authCtx.isLoggedIn && !authCtx.isSeller) {
        return <Redirect to="/" />;
      } else {
        return <Redirect to="/seller/home" />;
      }
    }
  };

  return <>{isLoading()}</>;
};

export default SellerRoute;
