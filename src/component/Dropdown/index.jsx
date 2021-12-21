import React, { useRef, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Menucontainer,
  MenuTrigger,
  UserName,
  UserImg,
  MenuNav,
  Navul,
  Navli,
  NavA,
} from './DropdownElement'
import { useDetectOutsideClick } from './useDetectOutsideClick'

const Dropdown = ({ logoutHandler, logoutLink }) => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const toggleActive = () => setIsActive(!isActive)
  const location = useLocation()

  const accountLink = useMemo(
    () =>
      localStorage.getItem('role') === 'seller' ? `Go To My Seller Account` : `Go To Seller Page`,
    [],
  )

  return (
    <Menucontainer>
      <MenuTrigger onClick={toggleActive}>
        <UserName>user</UserName>
        <UserImg src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" />
      </MenuTrigger>
      <MenuNav className={`${isActive ? 'active' : 'inactive'}`}>
        <Navul>
          <Navli>
            <NavA to="/account">My Account</NavA>
          </Navli>
          {location.pathname !== '/seller/home' && (
            <Navli>
              <NavA to="/seller">{accountLink}</NavA>
            </Navli>
          )}
          <Navli>
            <NavA to={logoutLink} onClick={logoutHandler}>
              Sign Out
            </NavA>
          </Navli>
        </Navul>
      </MenuNav>
    </Menucontainer>
  )
}

export default Dropdown
