import React,{useContext,useState,useEffect} from 'react';
import AuthContext from '../../store/auth-context';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElement';
const Navbar = ({toggle}) => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
      }, [])
    const logoutHandler = () => {
        authCtx.logout();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo scrollNav={scrollNav} to ='/'>
                        Randi
                    </NavLogo>
                    <MobileIcon scrollNav={scrollNav} onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to ='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to ='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to ='services'>Services</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    {!isLoggedIn &&
                        <NavBtn>
                            <NavBtnLink scrollNav={scrollNav} to ='/auth'>Sign In</NavBtnLink>
                        </NavBtn>
                    }

                    {isLoggedIn &&
                        <NavBtn onClick={logoutHandler}>
                            <NavBtnLink>Logout</NavBtnLink> 
                        </NavBtn>
                    }
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;