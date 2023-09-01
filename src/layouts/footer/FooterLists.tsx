import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../style/Theme";

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
            <Lists gap = "94px" wrap="wrap">
                {sections.map((item,index) => {
                    return(
                        <ListsList key={index}>
                            <ListTitle>{item.title}</ListTitle>
                            {item.links.map((link,linkIndex) => {
                                return(
                                    <ListItem key={linkIndex}>
                                        <a href="#">
                                            {link}
                                        </a>
                                    </ListItem>
                                )
                            })}
                        </ListsList>
                    )
                })}
            </Lists>
    )
}

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