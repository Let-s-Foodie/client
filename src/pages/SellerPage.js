import React from 'react'
import Navbar from '../component/Navbar'; 
import {sellerBar} from '../component/Navbar/Data';
import SellerHeroSection from '../component/HeroSection/SellerHeroSection';
import InfoSection from '../component/InfoSection';
import { homeObjOne,homeObjTwo } from '../component/InfoSection/Data';
import Footer from '../component/Footer';
const SellerPage = () => {
  
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
