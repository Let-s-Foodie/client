import React, { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
const SellerRoute = (rest) => {
  const authCtx = useContext(AuthContext)
  const isLoading = () => {
    if (!rest.loaded) {
      return <></>
    } else {
      if (authCtx.isLoggedIn && authCtx.isSeller) {
        return <Route {...rest} />
      } else if (authCtx.isLoggedIn && !authCtx.isSeller) {
        return <Redirect to="/" />
      } else {
        return <Redirect to="/seller/home" />
      }
    }
  }

  return <>{isLoading()}</>
}

export default SellerRoute
