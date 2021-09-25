import React from 'react'
import Navbar from '../component/Navbar/Seller/index'; 
import ShopInfo from '../component/ShopInfo/ShopInfo';
import {sellerMainbar} from '../component/Navbar/Data';
const ShopDetailPage = () => {
    return (
        <>
            <Navbar {...sellerMainbar}/>
            <ShopInfo/>
        </>
    )
}
export default ShopDetailPage;
