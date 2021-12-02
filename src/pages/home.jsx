import React, { useState, useEffect } from 'react'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import InfoSection from '../component/InfoSection'
import { homeObjTwo, homeObjThree } from '../component/InfoSection/Data'
import { homeSidebar } from '../component/Sidebar/Data'
import { homeBar } from '../component/Navbar/Data'
import Services from '../component/Services'
import useGeoLocation from '../component/hooks/useGeoLocation'
import Footer from '../component/Footer'

const Home = () => {
  const [local, setLocal] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [loadedLocal, setLoadedLocal] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const {
    loaded,
    coordinates: { lat, lng },
  } = useGeoLocation()

  useEffect(() => {
    if (loaded) {
      const URL = 'http://localhost:8000/yelp/local'
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({ lat: lat, lng: lng }),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.json()
        })
        .then((resData) => {
          setLocal(resData.data)
          setLoadedLocal(true)
        })
    }
    return function cleanup() {}
  }, [loaded, lat, lng])
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} {...homeSidebar} />
      <Navbar toggle={toggle} {...homeBar} />
      <HeroSection />
      <Services local={local} loaded={loadedLocal ? 1 : 0} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Home
