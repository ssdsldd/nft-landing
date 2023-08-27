import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { theme } from "../../style/Theme";
import { Icon } from "../../components/icon/Icon";


const icons = ["instagram", "linkedin", "telegram", "vk"]

export const FooterInfo: React.FC = () => {
    return(
            <Footerinfo>
                <Logo/>
                <FooterText>
                    Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!
                </FooterText>
                <FooterLinks>
                    {icons.map((item,index) => {
                        return(
                            <FooterLink key={index}>
                                <a href="#">
                                    <Icon iconId={item} width="20" height="20" viewbox="0 0 25 25"/>
                                </a>
                            </FooterLink>
                        )
                    })}
                </FooterLinks>
            </Footerinfo>

    )
}

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
