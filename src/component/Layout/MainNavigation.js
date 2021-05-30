import {useContext} from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo from '../../static/noodle.png';
import AuthContext from '../../store/auth-context';

const MainNavigation = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
  
    const logoutHandler = () => {
        authCtx.logout();
    }
    return (
        <header className={classes.header}>
                <Link to ='/' className={classes.logo}> <img alt="" src={logo}/> </Link>
                <nav>
                    {!isLoggedIn && <Link to ='/auth'>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-7 rounded-full">
                        Login
                    </button>
                </Link>}
                {isLoggedIn &&
                    <button 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-7 rounded-full"
                        onClick={logoutHandler}>
                       Logout
                    </button>
                    }
                    
                </nav>
        </header>
    )
}

export default MainNavigation;