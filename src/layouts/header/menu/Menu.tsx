import React, { useState } from "react";
import { S } from "./Menu-Styles";

const menuItems = [
    {
        itemName: 'Marketplace',
        href: 'marketplace'
    },

    {
        itemName: 'Community',
        href: 'community'
    },

    {
        itemName: 'Artists',
        href: 'artists'
    },

    {
        itemName: 'Collections',
        href: 'collections'
    }
]

export const Menu: React.FC = () => {
    const[menuStatus, setMenuStatus] = useState(false);
    const onButtonClick = () => setMenuStatus(!menuStatus);

    return(
        <S.MenuNav>
            <S.MenuList isOpen = {menuStatus}>
                {menuItems.map((item,index) => {
                    return(
                        <S.MenuItem key={index}>
                            <S.MenuLink href="#">{item.itemName}</S.MenuLink>
                        </S.MenuItem>
                    )
                })}
            </S.MenuList>
            <S.MenuButton isOpen = {menuStatus} onClick = {() => onButtonClick()}>
                <span></span>
            </S.MenuButton>
        </S.MenuNav>
    )
}

