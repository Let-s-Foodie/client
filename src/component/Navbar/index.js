import {useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/noodle.png';
import AuthContext from '../../store/auth-context';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElement';
const Navbar = ({toggle}) => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
  
    const logoutHandler = () => {
        authCtx.logout();
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to ='/'>
                        Randi
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to ='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='services'>Services</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    {!isLoggedIn &&
                        <NavBtn>
                            <NavBtnLink to ='/auth'>Sign In</NavBtnLink>
                        </NavBtn>
                    }

                    {isLoggedIn &&
                        <NavBtn onClick={logoutHandler}>
                            <NavBtnLink>Log out</NavBtnLink> 
                        </NavBtn>
                    }
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;