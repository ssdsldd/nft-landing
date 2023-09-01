import React from "react";
import { S } from "./Footer-Styles";

const sections = [
    {
        title: "Explore",
        links: ["Art Sign In", "Collectibles", "Domain Name", "Utility"]
    }, 

    {
        title: "Statistic",
        links: ["Ranking", "Collectibles", "Activity"]
    },

    {
        title: "Company",
        links: ["About Us", "Career", "Support", "Partners"]
    },

    {
        title: "Resources",
        links: ["Help Center", "Platform Status", "Blog"]
    },
]

export const FooterLists: React.FC = () => {
    return(
            <S.Lists gap = "94px" wrap="wrap">
                {sections.map((item,index) => {
                    return(
                        <S.ListsList key={index}>
                            <S.ListTitle>{item.title}</S.ListTitle>
                            {item.links.map((link,linkIndex) => {
                                return(
                                    <S.ListItem key={linkIndex}>
                                        <a href="#">
                                            {link}
                                        </a>
                                    </S.ListItem>
                                )
                            })}
                        </S.ListsList>
                    )
                })}
            </S.Lists>
    )
}
