import React,{useState} from 'react'
import DishForm from '../component/DishForm/DishForm';
import Navbar from '../component/Navbar'; 
import {sellerBar} from '../component/Navbar/Data';
import SellerHeroSection from '../component/HeroSection/SellerHeroSection';
import InfoSection from '../component/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree } from '../component/InfoSection/Data';
import Footer from '../component/Footer';
const SellerPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <> 
            
            <Navbar {...sellerBar}/>
            
            <SellerHeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Footer/>
            
        </>
    )
}

export default SellerPage;
