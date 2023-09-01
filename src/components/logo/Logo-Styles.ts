import styled from "styled-components"
import { theme } from "../../style/Theme"

const LogoText = styled.span`
    font-family: "Canela-Medium", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin: 14px 0 0 8px;
    @media ${theme.media.tablet}{
        margin: 0px 0 0 8px;
    }
`

const LogoSubtext = styled.span`
    color: ${theme.colors.accent};
`

const LogoLink = styled.a`
    z-index: 9999;
`

export const S = {
    LogoText,
    LogoSubtext,
    LogoLink
}