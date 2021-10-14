import React from 'react'
import {Link,useParams} from 'react-router-dom';
import Sidebar from '../Sidebar/Seller/SellerIndex'
import {DashBoardContainer} from './ShopInfoElement';
import {SidebarData} from '../Sidebar/Seller/SidebarData';
const ShopInfo = () => {
    const {shopId} = useParams();
    return (
        <DashBoardContainer>
        <Sidebar {...SidebarData}/>
        <Link to= {"/seller/dishes/" + shopId}> 
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Add Dishes
            </button>
        </Link>
        
        </DashBoardContainer>
    )
}
export default ShopInfo;
