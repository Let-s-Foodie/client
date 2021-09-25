import React,{useState,useEffect,useContext} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import AuthContext from '../../store/auth-context';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer, NavLogo, MobileIcon,NavBtn, NavBtnLink} from './MainbarElement';
const Mainbar = ({toggle}) => {
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
        return () => {
            window.removeEventListener("scroll",changeNav)
        }
      }, [])
    const logoutHandler = () => {
        authCtx.logout();
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to ='/'  onClick={toggleHome} scrollnav={scrollNav ? 1 : 0}>
                        Randi
                    </NavLogo>
                    <MobileIcon  onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                   
                    {!isLoggedIn &&
                        <NavBtn>
                            <NavBtnLink to ='/auth'>Sign In</NavBtnLink>
                        </NavBtn>
                    }

                    {isLoggedIn &&
                        <NavBtn onClick={logoutHandler}>
                            <NavBtnLink to='/seller'>Logout</NavBtnLink> 
                        </NavBtn>
                    }
                    
                </NavbarContainer>
            </Nav>
        </>

    )
}

export default Mainbar;
