import React from 'react'
import Mainbar from '../component/Navbar/Mainbar'; 

import SellerRegister from '../component/SellerRegister';

const SellerRegisterPage = () => {
    
    
    return (
        <>
             <Mainbar />
         
            
             <SellerRegister imgStart={true} lightBg={false}/>
        </>
    )
}

export default SellerRegisterPage;
