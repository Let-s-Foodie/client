import React from 'react'
import {Link,useParams} from 'react-router-dom';
const ShopInfo = () => {
    const {shopId} = useParams();
    return (
        <>
        <Link to= {"/seller/dishes/" + shopId}> 
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Add Dishes
            </button>
        </Link>
        
        </>
    )
}
export default ShopInfo;
