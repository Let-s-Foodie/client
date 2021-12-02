import { React, useContext, useEffect, useState, useMemo } from 'react'

import MainPage from './pages/MainPage'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import AuthForm from './component/AuthForm/AuthForm'
import SellerPage from './pages/SellerPage'
import SellerHome from './pages/SellerHome'
import SellerResgisterPage from './pages/SellerRegisterPage'
import DishForm from '../src/component/DishForm/DishForm.jsx'
import AuthContext from './store/auth-context'
import Home from './pages/Home'
import SellerAuth from '../src/component/AuthForm/SellerAuth'
import ImageUploader from './service/image_uploader'
import ShopDetailPage from './pages/ShopDetailPage'
import Yelp from './service/yelp'
import useGeoLocation from './component/hooks/useGeoLocation'
import Agreement from './component/Agreement/Agreement'

const App = ({ userStorage, dishes }) => {
  const imageUploader = new ImageUploader()
  const authCtx = useContext(AuthContext)
  const [dishLists, setDishLists] = useState([])
  const [location, setLocation] = useState({})

  const {
    loaded,
    coordinates: { lat, lng },
  } = useGeoLocation()

  const yelp = useMemo(() => {
    return new Yelp(lat, lng)
  }, [lat, lng])

  useEffect(() => {
    const dishArr = []
    dishes.getAll().then((dishes) => {
      dishes.map((dish) => dishArr.push(dish))
    })
    if (loaded) {
      yelp.getAll().then((data) => {
        data.data.map((item) => dishArr.push(item))
        setDishLists(dishArr)
        setLocation({ lat, lng })
      })
    }
  }, [dishes, lat, lng, yelp, loaded])
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthForm userStorage={userStorage} redirectLink="/" />
          </Route>
        )}

        <Route path="/mainpage">
          <MainPage dishLists={dishLists} location={location} />
        </Route>
        <Route path="/seller" exact>
          <SellerPage role={authCtx.isSeller} logoutHandler={authCtx.logout} />
        </Route>

        <Route path="/seller/auth">
          {!authCtx.isLoggedIn ? (
            <SellerAuth userStorage={userStorage} />
          ) : (
            <Redirect to="/seller/home" />
          )}
        </Route>
        <Route path="/seller/home">
          {authCtx.isLoggedIn && authCtx.isSeller ? (
            <SellerHome />
          ) : (
            <Redirect to="/seller/auth" />
          )}
        </Route>
        <Route path="/seller/shop/:shopId">
          {authCtx.isLoggedIn ? (
            <ShopDetailPage />
          ) : (
            <Redirect to="/seller/auth" />
          )}
        </Route>
        <Route path="/seller/dishes/:shopId">
          {authCtx.isLoggedIn ? (
            <DishForm imageUpdoader={imageUploader} />
          ) : (
            <Redirect to="/seller/auth" />
          )}
        </Route>
        <Route path="/seller/register/:step">
          {authCtx.isLoggedIn ? (
            <SellerResgisterPage />
          ) : (
            <Redirect to="/seller/auth" />
          )}
        </Route>

        <Route path="/seller/agreement">
          <Agreement userStorage={userStorage} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
