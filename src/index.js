import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AuthContextProvider } from './store/auth-context'
import UserStorage from './service/auth'
import Dishes from './service/dishes'

const userStorage = new UserStorage(process.env.REACT_APP_API_KEY)

const dishes = new Dishes()
ReactDOM.render(
  <AuthContextProvider>
    <App userStorage={userStorage} dishes={dishes} />
  </AuthContextProvider>,
  document.getElementById('root'),
)
reportWebVitals()
