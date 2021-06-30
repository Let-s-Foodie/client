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
                    <NavLogo to ='/' scrollnav={scrollNav ? 1 : 0}>
                        Randi
                    </NavLogo>
                    <MobileIcon  onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to ='services' scrollnav={scrollNav ? 1 : 0}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='about' scrollnav={scrollNav ? 1 : 0} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='discover' scrollnav={scrollNav ? 1 : 0}>Discover</NavLinks>
                        </NavItem>
                       
                        
                    </NavMenu>
                    {!isLoggedIn &&
                        <NavBtn>
                            <NavBtnLink to ='/auth'>Sign In</NavBtnLink>
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