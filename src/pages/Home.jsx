import React, { useState, useEffect, useMemo } from 'react'
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
import Yelp from '../service/yelp'

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

  const yelp = useMemo(() => new Yelp(lat, lng), [lat, lng])

  useEffect(() => {
    if (loaded) {
      yelp.searchLocation().then(({ data }) => {
        setLocal(data)
        setLoadedLocal(true)
      })
    }
    return function cleanup() { }
  }, [loaded, lat, lng, yelp])
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
