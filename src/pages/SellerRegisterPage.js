import React from 'react'
import Mainbar from '../component/Navbar/Mainbar'; 

import SellerRegister from '../component/SellerRegister';
import { homeObjOne,homeObjTwo,homeObjThree } from '../component/InfoSection/Data';
const SellerRegisterPage = () => {
    
    
    return (
        <>
             <Mainbar />
             {/* <InfoSection {...homeObjTwo}/> */}
            
             <SellerRegister imgStart={true} lightBg={false}/>
        </>
    )
}

export default SellerRegisterPage;
