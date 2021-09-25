import React from 'react'
import Navbar from '../component/Navbar/Seller/index'; 
import SellerMainHero from '../component/HeroSection/Seller/SellerMainHero'
import {sellerMainbar} from '../component/Navbar/Data';
const SellerInfoPage = () => {
    return (
        <>
            <Navbar {...sellerMainbar}/>
            <SellerMainHero/>
        </>
    )
}
export default SellerInfoPage;