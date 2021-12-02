import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
} from './SidebarElement'

const Sidebar = ({
  isOpen,
  toggle,
  linktoOne,
  linktoTwo,
  linktoThree,
  contentOne,
  contentTwo,
  contentThree,
}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to={linktoOne} onClick={toggle}>
            {contentOne}
          </SidebarLink>
          <SidebarLink to={linktoTwo} onClick={toggle}>
            {contentTwo}
          </SidebarLink>
          <SidebarLink to={linktoThree} onClick={toggle}>
            {contentThree}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/auth">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
