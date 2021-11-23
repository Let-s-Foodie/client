import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import { sellerBar } from '../component/Navbar/Data'
import SellerHeroSection from '../component/HeroSection/Seller/SellerHeroSection'
import InfoSection from '../component/InfoSection'
import { homeObjOne, homeObjTwo } from '../component/InfoSection/Data'
import Footer from '../component/Footer'
import { useHistory } from 'react-router-dom'

const SellerPage = ({ role, logoutHandler }) => {
  const history = useHistory()
  useEffect(() => {
    if (!role) {
      logoutHandler()
    } else {
      history.replace('/seller/home')
    }
  }, [history, role, logoutHandler])
  return (
    <>
      <Navbar {...sellerBar} />

      <SellerHeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  )
}

export default SellerPage
