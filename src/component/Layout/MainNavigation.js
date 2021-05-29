import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo from '../../static/noodle.png';
const MainNavigation = () => {
    return (
        <header className={classes.header}>
                <Link to ='/' className={classes.logo}> <img alt="" src={logo}/> </Link>
                <nav>
                <Link to ='/auth'>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-7 rounded-full">
                        Sign Up
                    </button>
                </Link>
                </nav>
        </header>
    )
}

export default MainNavigation;