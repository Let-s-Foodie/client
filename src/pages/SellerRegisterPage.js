import React from 'react'
import Mainbar from '../component/Navbar/Mainbar'; 
import {sellerBar} from '../component/Navbar/Data';
import InfoSection from '../component/InfoSection';
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
