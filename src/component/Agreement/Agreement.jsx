import React, { useState, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { useHistory } from 'react-router-dom'
import './Agreement.css'

const Agreement = ({ userStorage }) => {
  const [checked, setChecked] = useState(false)
  const history = useHistory()
  const authCtx = useContext(AuthContext)

  const checkboxHandler = (e) => {
    setChecked(!checked)
  }

  const onUpgrade = (e) => {
    if (checked) {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      userInfo.role = 'seller'

      userStorage
        .updateRole(userInfo.userId, userInfo.role, userInfo)
        .then((data) => {
          console.log('DATA: ', data)
          const expirationTime = new Date(new Date().getTime() + 3600 * 1000)
          authCtx.login(
            userInfo.authtoken,
            expirationTime.toISOString(),
            data.role,
          )
          localStorage.removeItem('userInfo')
          history.replace('/seller/home')
        })
    }
  }

  return (
    <section className="agreement-page">
      <div className="agreement-container">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>

        <input type="checkbox" checked={checked} onChange={checkboxHandler} />
        <label className="checkbox-label">Agree</label>
        <button onClick={onUpgrade}>Submit</button>
      </div>
    </section>
  )
}

export default Agreement
