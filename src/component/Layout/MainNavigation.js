import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo from '../../static/noodle.png';
const MainNavigation = () => {
    return (
        <header className={classes.header}>
                <NavLink to ='/' className={classes.logo}> <img alt="" src={logo}/> </NavLink>
        </header>
    )
}

export default MainNavigation;