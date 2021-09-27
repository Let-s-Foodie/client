import React from 'react'
import Navbar from '../component/Navbar/Seller/index'; 
import ShopInfo from '../component/ShopInfo/ShopInfo';
import {sellerMainbar} from '../component/Navbar/Data';
import Footer from '../component/Footer/index';
const ShopDetailPage = () => {
    return (
        <>
            <Navbar {...sellerMainbar}/>
            <ShopInfo/>
            <Footer/>
        </>
    )
}
export default ShopDetailPage;
