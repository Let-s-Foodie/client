import React, { useContext } from 'react'
import Dropdown from '../../Dropdown'
import AuthContext from '../../../store/auth-context'
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
  NavBtn,
} from './NavbarElement'

const Navbar = ({ logoContent, logoLink }) => {
  const authCtx = useContext(AuthContext)
  const logoutHandler = () => {
    authCtx.logout()
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to={logoLink}>{logoContent}</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/seller/home">About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Dropdown
              logoutHandler={logoutHandler}
              logoutLink="/seller"

            />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
