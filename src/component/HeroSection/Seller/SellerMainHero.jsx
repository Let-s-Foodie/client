import React,{useEffect, useState, useContext} from 'react'
import AuthContext from '../../../store/auth-context';
import {HeroContainer} from './SellerMainHeroElement';
const SellerMainHero = () => {
    const [sellerInfo, setSellerInfo] = useState([]);
    const authCtx = useContext(AuthContext);

    useEffect(()=> {
        const URL =`http://localhost:8000/sellers/user/:userId`;
        fetch(URL,{
          
            method:"GET",
            headers: {
              
                'Accept': 'application/json, text/plain',
                'Content-Type': 'appslication/json',
                "authtoken":authCtx.token

            }
        }).then((res)=> {
            return res.json();
        })
        .then(resData => {
        
            setSellerInfo(resData);
        })
    }
    ,[])
    return (
        <>
            <HeroContainer>
             <div className="flex flex-wrap">
           {sellerInfo.map((info)=> (

       
                    <div className="py-4 px-4" key = {info.id}>
                        <div className=" ">
                            <a href={"/seller/shop/" + info.id}>
                                <div className="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
                                    <div className="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-100">
                                    0 Follower
                                    </div>
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg" className="h-32 rounded-lg w-full object-cover"/>
                                    <div className="flex justify-center">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png" className="rounded-full-mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16"/>
                                    </div>
                                    <div className="py-2 px-2">
                                    <div className=" font-bold font-title text-center">{info.name}</div>
                                        <div className="text-sm font-light text-center my-2">{info.lat}</div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>	
		       
           ))}
           </div>
           </HeroContainer>
        </>
    )
}

export default SellerMainHero
