import styled from "styled-components"
import { FlexWrapper } from "../../components/FlexWrapper"
import { theme } from "../../style/Theme"

const StyledFooter = styled.footer`
    padding: 92px 0;
`

const FooterMain = styled(FlexWrapper)`
    padding-bottom: 48px;
    border-bottom: 1px solid var(--white-dissable, #838382);
    margin-bottom: 48px;

    @media ${theme.media.desktop}{
        flex-direction: column;
    }
`
const Copyright = styled(FlexWrapper)`
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;

    @media ${theme.media.tablet}{
        flex-direction: column;
        gap: 16px;
    }
`

const Privacy = styled(FlexWrapper)`
    @media ${theme.media.tablet}{
        flex-direction: column;
        gap: 16px;
    }
`

const Lists = styled(FlexWrapper)`
    @media ${theme.media.tablet}{
        row-gap: 32px;
    }
`

const ListsList = styled.ul`

`

const ListItem = styled.li`
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    &:not(:last-child){
        margin-bottom: 8px;
    }
`

const ListTitle = styled.span`
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 24px;
    display: inline-block;
`

const Footerinfo = styled.div`
    width: 272px;
`

const FooterText = styled.p`
    margin: 5px 0 24px;
`

const FooterLinks = styled.ul`
    display: flex;
    gap: 12px;
`

const FooterLink = styled.li`
    background-color: ${theme.colors.font};
    border-radius: 4px;
    transition: ${theme.animation.transition};
    a{
        padding-left: 2px;
        padding-top: 1px;
        width: 24px;
        height: 24px;
        color: #090F1D;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover{
        background-color: ${theme.colors.accent};
    }
`
export const S = {
    StyledFooter,
    FooterMain,
    Copyright,
    Privacy,
    Lists,
    ListsList,
    ListItem,
    ListTitle,
    Footerinfo,
    FooterText,
    FooterLinks,
    FooterLink
}