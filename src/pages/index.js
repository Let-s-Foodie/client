import React, {useState} from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import InfoSection from '../component/InfoSection';
import { homeObjOne,homeObjTwo } from '../component/InfoSection/Data';
import Services from '../component/Services';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen ={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Services />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
           
        </>
    )
}

export default Home
