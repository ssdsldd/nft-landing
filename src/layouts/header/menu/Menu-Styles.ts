import styled, { css } from "styled-components"
import { theme } from "../../../style/Theme"

const MenuNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const MenuList = styled.ul<{isOpen: boolean}>`
    display: flex;
    gap: 40px;
    transition: ${theme.animation.transition};
    
    @media ${theme.media.tablet}{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.accentFont};
        transform: translateY(-100%);
        ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: translateY(0);
        `}

        a{
            font-size: 20px;
        }
    }
`

const MenuItem = styled.li`

`

const MenuLink = styled.a`
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

const MenuButton = styled.div<{isOpen: boolean}>`
    width: 24px;
    height: 24px;
    z-index: 9999;
    display: none;
    span{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 24px;
        height: 2px;
        background-color: ${theme.colors.font};
        border-radius: 2px;
        transition: ${theme.animation.transition};
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255,255,255,0);
        `}
        &::before, &::after{
            position: absolute;
            display: inline-block;
            content: "";
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            border-radius: 2px;
            transition: ${theme.animation.transition};
        }
        &::before{
            transform: translateY(-8px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0) rotate(45deg);
            `}
        }

        &::after{
            transform: translateY(8px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0) rotate(-45deg);
            `}
        }
    }

    @media ${theme.media.tablet} {
        display: block;
    }
`

export const S = {
    MenuNav,
    MenuList,
    MenuItem,
    MenuLink,
    MenuButton
}