import React, { useState, useEffect, useCallback } from 'react'
let logoutTimer
const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  isSeller: false,
  login: (token) => {},
  logout: () => {},
})

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime()
  const adjExpirationTime = new Date(expirationTime).getTime()

  const remainingDuration = adjExpirationTime - currentTime
  return remainingDuration
}
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token')
  const storedExpirationDate = localStorage.getItem('expirationTime')
  const role = localStorage.getItem('role')
  const remainingTime = calculateRemainingTime(storedExpirationDate)
  if (remainingTime <= 60000) {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    localStorage.removeItem('role')
    return null
  }

  return {
    token: storedToken,
    duration: remainingTime,
    role: role,
  }
}
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken()

  let initialToken, initialRole
  if (tokenData) {
    initialToken = tokenData.token
    initialRole = tokenData.role
  }
  initialToken = localStorage.getItem('token')
  initialRole = localStorage.getItem('role')
  const [token, setToken] = useState(initialToken)
  const [role, setRole] = useState(initialRole)
  const userIsLoggedIn = !!token //if token is a string that is empty, this will return false
  const userIsSeller = role === 'seller' ? true : false
  const logoutHandler = useCallback(() => {
    setToken(null)
    setRole(null)
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    localStorage.removeItem('role')
    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  }, [])

  const loginHandler = (token, expirationTime, role) => {
    setToken(token)
    setRole(role)
    localStorage.setItem('token', token)
    localStorage.setItem('expirationTime', expirationTime)
    localStorage.setItem('role', role)
    const remainingTime = calculateRemainingTime(expirationTime)
    logoutTimer = setTimeout(logoutHandler, remainingTime)
  }

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration)
    }
  }, [tokenData, logoutHandler])
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    isSeller: userIsSeller,
  }
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext

