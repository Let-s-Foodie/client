import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Redirect } from "react-router-dom";
import SellerRegisterPage from "../SellerRegisterPage";
const SellerRoute = ({ loaded }) => {
  const authCtx = useContext(AuthContext);
  const isLoading = () => {
    if (!loaded) {
      return <></>;
    } else {
      if (authCtx.isLoggedIn && authCtx.isSeller) {
        return <SellerRegisterPage />;
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
