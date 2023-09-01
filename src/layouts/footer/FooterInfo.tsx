import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";
import { S } from "./Footer-Styles";


const icons = ["instagram", "linkedin", "telegram", "vk"]

export const FooterInfo: React.FC = () => {
    return(
            <S.Footerinfo>
                <Logo/>
                <S.FooterText>
                    Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!
                </S.FooterText>
                <S.FooterLinks>
                    {icons.map((item,index) => {
                        return(
                            <S.FooterLink key={index}>
                                <a href="#">
                                    <Icon iconId={item} width="20" height="20" viewbox="0 0 25 25"/>
                                </a>
                            </S.FooterLink>
                        )
                    })}
                </S.FooterLinks>
            </S.Footerinfo>

    )
}


