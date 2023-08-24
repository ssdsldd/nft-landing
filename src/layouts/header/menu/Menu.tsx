import React from "react";
import styled from "styled-components";
import { theme } from "../../../style/Theme";

const menuItems = [
    {
        itemName: 'Marketplace',
        href: 'marketplace'
    },

    {
        itemName: 'Artists',
        href: 'artists'
    },

    {
        itemName: 'Community',
        href: 'community'
    },

    {
        itemName: 'Collections',
        href: 'collections'
    }
]

export const Menu: React.FC = () => {
    return(
        <MenuNav>
            <MenuList>
                {menuItems.map((item,index) => {
                    return(
                        <MenuItem key={index}>
                            <MenuLink href="#">{item.itemName}</MenuLink>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </MenuNav>
    )
}

export const MenuNav = styled.nav`
    
`

    
export const MenuList = styled.ul`
    display: flex;
    gap: 40px;
`

export const MenuItem = styled.li`

`

export const MenuLink = styled.a`
    color:  rgba(255, 255, 253, 0.72);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%; 
    transition: ${theme.animation.transition};
    padding-bottom: 2.5px;
    &:hover{
        color: ${theme.colors.font};
        border-bottom: 1px solid ${theme.colors.accent};
    }
`