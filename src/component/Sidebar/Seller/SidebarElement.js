import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Sidebar = styled.div`
    height: 100%;
    width: 216px;
    display: inline-block;
    vertical-align: top;
    margin-left: 5%;
`
export const SidebarIcon = styled.div`
   margin-right: 10px;
    font-size: 1.7rem;
    align-items: center;
   
`
export const SidebarText = styled.div`
    font-size: 1rem;
    align-items: center;
`
export const SidebarMenu = styled.ul`
    display: grid;
    gird-template-columns: 1fr 2fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center: 
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }

`

export const SidebarRoute = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: start;
   
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
   
    cursor: pointer;


    &:hover {
        background-color: #F1EEED;
        transition: 0.2 ease-in-out;
    }
`