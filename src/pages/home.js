import React, {useState,useEffect} from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import InfoSection from '../component/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree } from '../component/InfoSection/Data';
import Services from '../component/Services';
import useGeoLocation from "../component/hooks/useGeoLocation";
const Home = () => {
    const [local, setLocal] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loadedLocal,setLoadedLocal] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const {
        loaded,
        coordinates: { lat, lng },
      } = useGeoLocation();

    useEffect(()=>{
        if(loaded){
            const URL = "http://localhost:5000/random/local";
            fetch(URL, {
                method: "POST",
                body: JSON.stringify({"lat": lat, "lng": lng}),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
            })
            .then((res) => {
            
                return res.json();
            })
            .then(resData=>{
                console.log(resData.data)
                setLocal(resData.data)
                setLoadedLocal(true);
        })
        }
       
    },[loaded,lat,lng])
    return (
        <>
            <Sidebar isOpen ={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Services local={local} loaded={loadedLocal ? 1: 0}/> 
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            
        </>
    )
}

export default Home
