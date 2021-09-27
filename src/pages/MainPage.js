import React,{useState} from 'react'
import Main from '../component/Main/Main';
import Navbar from '../component/Navbar/Mainbar';
import Footer from '../component/Footer/index';

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
          
            <Navbar toggle={toggle}/>
            <Main/>
            <Footer/>
            
        </>
    )
}

export default MainPage
