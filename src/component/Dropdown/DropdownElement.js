import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
export const Menucontainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const MenuTrigger = styled.button`
    background: #ffffff;
    border-radius: 90px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    margin-left: auto;
    &:hover{
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    }
`;
export const UserName = styled.span`
    font-weight: 700;
    vertical-align: middle;
    font-size: 14px;
    margin: 0 10px;
`;
export const UserImg = styled.img`
    border-radius: 90px;
`;

export const MenuNav = styled.nav`
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    &.active{
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
   
`;

export const Navul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  
   
`;
export const Navli = styled.li`
    
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
    transition: 0.3;
    &:hover{
        background: #ddd;
    }
   
`;
export const NavA = styled(LinkR)`
    
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
    
`