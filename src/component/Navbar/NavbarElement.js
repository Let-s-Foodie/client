import styled, {keyframes} from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import userIcon from '../../static/usericon.svg';
export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgb(245, 235, 220)': 'transparent')};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 10;
    margin-top: -80px;
    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
   

`;

export const NavLogo = styled(LinkR)`
    color: ${({scrollnav}) => (scrollnav ? 'rgb(80,35,20)': '#fff')};
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.8rem;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({scrollNav}) => (scrollNav ? 'rgb(80,35,20)': '#fff')};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    algin-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;


export const NavLinks = styled(LinkS)`
    color: ${({scrollnav}) => (scrollnav ? 'rgb(80,35,20)': '#fff')};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid red;
    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
        display: none;
    }
`;


export const NavBtnLink = styled(LinkR)`

    border-radius: 50px;
    background: rgb(214,35,0);
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover{
        transition: all 0.2 ease-in-out;
        background: rgb(172, 32, 4);
        color: #fff;
    }
`;


export const AccountLink = styled(LinkR)`



background-image: url(${(userIcon)});
width: 40px;
height: 40px;
padding: 10px 20px;
cursor: pointer;
transition: all 0.2s ease-in-out;
border: none;
border-radius: 50%;


&:hover{
    transition: all 0.2 ease-in-out;
   
   box-shadow: 
}
   
`;
const topBar_open = keyframes`
    0% { transform: translateY(0px) rotate(0deg) ; width: 40px; }
    10% {transform: translateY(-8px) rotate(0deg); width: 40px; }
    50% {transform: translateY(25px) rotate(45deg); width: 60px; }
    75% {transform: translateY(12px) rotate(45deg); width: 60px; }
    100% {transform: translateY(17px) rotate(45deg); width: 64px; }
`;

const bottomBar_open = keyframes`
    0% { transform: translateY(0px) rotate(0deg) ; width: 40px; }
    10% { transform: translateY(-8px) rotate(0deg) ; width: 40px; }
    60% {transform: translateY(0px) rotate(-45deg); width: 40px; }
    75% {transform: translateY(-10px) rotate(-45deg); width: 64px; }
    100% {transform: translateY(-8px) rotate(-45deg); width: 64px; }
`;

const menuLabel_open = keyframes`
    0% { transform: translateY(0px); opacity: 1; }
    25% {transform: translateY(-18px); }
    45% {transform: translateY(44px); opacity: 1; }
    48% {transform: translateY(50px); opacity: 0; }
    100% {transform: translateY(30px); opacity: 0; }
`;

const topBar_close = keyframes`
    0% {transform: translateY(17px) rotate(45deg); width: 60px; }
    35% {transform: translateY(-8px) rotate(-4deg); width: 40px; }
    53% {transform: translateY(10px) rotate(3deg); width: 40px; }
    70% {transform: translateY(-6px) rotate(0deg); width: 40px; }
    100% { transform: translateY(-2px) rotate(0deg) ; width: 40px; }
`;

const bottomBar_close = keyframes`
    0% {transform: translateY(-8px) rotate(-45deg); width: 60px; }
    35% {transform: translateY(-18px) rotate(6deg); width: 40px; }
    53% {transform: translateY(0px) rotate(-3deg); width: 40px; }
    68% { transform: translateY(-7px) rotate(0deg) ; width: 40px; }
    100% { transform: translateY(0px) rotate(0deg) ; width: 40px; }
`;
const menuLabel_close = keyframes`
    0% {transform: translateY(30px); opacity: 0; }
    5% {transform: translateY(25px); opacity: 1; }
    25% {transform: translateY(-30px); opacity: 1; }
    37% {transform: translateY(-22px); opacity: 1; }
    45% {transform: translateY(-22px); opacity: 1; }
    58% {transform: translateY(8px) rotate(-10deg); opacity: 1; }
    83% {transform: translateY(-6px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(0px); opacity: 1; }

`;

export const MenuBtn = styled.div`
display: block;
position: relative;

margin-top:2%;
text-align: center;
width: 40px;
height: 45px;

&:before,
&:after {
  content: '';
  width: 100%;
  height: 5px;
  background-color: #fff;
  display: block;
  position: absolute;
  border-radius: 20px;
}

&:before {
   transform-origin: left center;
  
}

&:after {
  right: 0;
  top: 20px;
  transform-origin: right center;
}



&:hover {
  cursor: pointer;
}

&.open {    
  &:before {
    animation: ${topBar_open} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  
  &:after {
    animation: ${bottomBar_open} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  
  .text {
    animation: ${menuLabel_open} 1s ease-in;
    animation-fill-mode: forwards;
  }
  
}

&.close {    
  &:before {
    animation: ${topBar_close} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  
  &:after {
    animation: ${bottomBar_close} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  .text {
    animation: ${menuLabel_close} $anim_time ease-in;
    animation-fill-mode: forwards;
  }
 
  
}


@media screen and (max-width: 768px){
    display:none;
}
`
export const Text = styled.span`
    color: #fff;
    font-family: 'Black Han Sans', sans-serif;
    display: block;
    position: absolute;
    bottom: 0;
    font-size: 10px;
    letter-spacing: 2.4px;
   
`
   
  

