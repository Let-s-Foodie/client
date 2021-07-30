import React, { useRef } from 'react'
import {Menucontainer,MenuTrigger,UserName,UserImg,MenuNav,Navul,Navli,NavA} from './DropdownElement';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
const Dropdown = ({logoutHandler}) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const toggleActive = () => setIsActive(!isActive);
    return (
        <Menucontainer>
            <MenuTrigger onClick={toggleActive}>
                <UserName>User</UserName>
                <UserImg src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"/>
            </MenuTrigger>
            <MenuNav className={`${isActive ? "active" : "inactive"}`}>
                <Navul>
                    <Navli>
                        <NavA>My Account</NavA>
                    </Navli>
                    <Navli>
                        <NavA to='/seller'>Start a Selling Account</NavA>
                    </Navli>
                    <Navli>
                        <NavA onClick={logoutHandler}>Sign Out</NavA>
                    </Navli>
                </Navul>
            </MenuNav>
        </Menucontainer>
    )
}

export default Dropdown;
