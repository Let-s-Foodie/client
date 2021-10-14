import React from 'react'
import Mainbar from '../component/Navbar/Mainbar'; 

import SellerRegister from '../component/SellerRegister';
import Footer from '../component/Footer/index';
const SellerRegisterPage = () => {
    
    
    return (
        <>
             <Mainbar />
             <SellerRegister imgStart={true} lightBg={false}/>
             <Footer />
        </>
    )
}

export default SellerRegisterPage;
