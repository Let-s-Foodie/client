import React from 'react'
import {
  Sidebar,
  SidebarMenu,
  SidebarRoute,
  SidebarIcon,
  SidebarText,
} from './SidebarElement'

const SellerIndex = ({
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  titleFive,
  iconOne,
  iconTwo,
  iconThree,
  iconFour,
  iconFive,
  linkOne,
  linkTwo,
  linkThree,
  linkFour,
  linkFive,
}) => {
  return (
    <Sidebar>
      <SidebarMenu>
        <SidebarRoute to={linkOne}>
          <SidebarIcon>{iconOne}</SidebarIcon>
          <SidebarText>{titleOne}</SidebarText>
        </SidebarRoute>
        <SidebarRoute to={linkTwo}>
          <SidebarIcon>{iconTwo}</SidebarIcon>
          <SidebarText>{titleTwo}</SidebarText>
        </SidebarRoute>
        <SidebarRoute to={linkThree}>
          <SidebarIcon>{iconThree}</SidebarIcon>
          <SidebarText>{titleThree}</SidebarText>
        </SidebarRoute>
        <SidebarRoute to={linkFour}>
          <SidebarIcon>{iconFour}</SidebarIcon>
          <SidebarText>{titleFour}</SidebarText>
        </SidebarRoute>
        <SidebarRoute to={linkFive}>
          <SidebarIcon>{iconFive}</SidebarIcon>
          <SidebarText>{titleFive}</SidebarText>
        </SidebarRoute>
      </SidebarMenu>
    </Sidebar>
  )
}

export default SellerIndex
