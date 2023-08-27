import styled from "styled-components";
import { theme } from "../style/Theme";

export const Button = styled.a`
    display: inline-block;
    text-align: center;
    padding: 12px 40px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    height: 48px;
    color: ${theme.colors.accentFont};
    background-color: ${theme.colors.accent};
    transition: ${theme.animation.transition};
    border: 1px solid transparent;

    &:hover{
        border: 1px solid ${theme.colors.accent};
        background-color: transparent;
        color: ${theme.colors.accent};
    }
`