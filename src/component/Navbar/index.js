import React,{useContext,useState,useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import AuthContext from '../../store/auth-context';
import Dropdown from '../Dropdown';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElement';
const Navbar = ({toggle,logoLink,logoContent,linktoOne,linktoTwo,linktoThree,contentOne,contentTwo,contentThree, signoutLink}) => {
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
        window.addEventListener("scroll",changeNav)
        //component will unmount
        return() => {
            window.removeEventListener("scroll",changeNav)
        }
      }, [])
    const logoutHandler = () => {
        authCtx.logout();
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }
 
   const userName = authCtx.token;
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to ={logoLink}  onClick={toggleHome} scrollnav={scrollNav ? 1 : 0}>
                       {logoContent}
                    </NavLogo>
                    <MobileIcon  onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                    to ={linktoOne}
                                    scrollnav={scrollNav ? 1 : 0}
                                    smooth={true} duration={500} spy={true}
                                    exact='true' offset={-80} >{contentOne}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to ={linktoTwo}
                                scrollnav={scrollNav ? 1 : 0}
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80} >{contentTwo}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to = {linktoThree}
                                scrollnav={scrollNav ? 1 : 0}
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}>{contentThree}</NavLinks>
                        </NavItem>
                      
                       
                        
                    </NavMenu>
                    {!isLoggedIn &&
                        <NavBtn>
                            <NavBtnLink to = {signoutLink === 
                                '/' ? `${signoutLink}auth`:`${signoutLink}/auth`}>Sign In</NavBtnLink>
                        </NavBtn>
                    }
                   
                    {isLoggedIn &&
                        <NavBtn>
     
                           <Dropdown logoutHandler={logoutHandler} user={userName} logoutLink={signoutLink}/>
                         
                        </NavBtn>
                      
                    }
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;