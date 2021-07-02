import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgb(245, 235, 220);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: rgb(80,35,20);
`


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: rgb(80,35,20);
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: noen;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: rgb(80,35,20);
    cursor: pointer;


    &:hover {
        color: rgb(214,35,0);
        transition: 0.2 ease-in-out;
    }
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
`;
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;


export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: rgb(214,35,0);
    white-space: no-wrap;
    padding: 16px 63px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: rgb(172, 32, 4);
        color: #fff;
    }
`

