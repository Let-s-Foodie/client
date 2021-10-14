import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
    background: 'transparent';
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
     position: relative;
    top: 0;
    z-index: 10;
    font-size: 1.2rem;
`;
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
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.8rem;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-with: 768px){
        display: none;
    }
`;
export const NavItem = styled.li`
    height: 80px;
`;
export const NavLinks = styled(LinkR)`
    display:flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    text-decoration: none;
    &.active {
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