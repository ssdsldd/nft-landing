import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { theme } from "../../style/Theme";
import { Button } from "../../components/Button";
import artImage1 from "../../assets/shop/shop1.webp";
import artImage2 from "../../assets/shop/shop2.webp";
import artImage3 from "../../assets/shop/shop3.webp";
import { MarketArt } from "./art/Art";

const artItems = [
    {
        src: artImage1,
        title: "Cyberpunk Cocomo",
        price: "490ETH",
        date: 80000000,
    },

    {
        src: artImage2,
        title: "Charge, Qi tiao yu",
        price: "490ETH",
        date: 80000000,
    },

    {
        src: artImage3,
        title: "Surgeon, Josh Rife",
        price: "490ETH",
        date: 80000000,
    }
]

export const Market: React.FC = () => {
    return(
        <StyledMarket>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <MarketTitle><span>Amazing</span> and Super <br /> Unique Art of This <span>Week</span></MarketTitle>
                    <Button>See All</Button>
                </FlexWrapper>
                <MarketArts justify="space-between" gap="30px">
                    {artItems.map((item, index) => {
                        return(
                            <MarketArt  src={item.src}
                                        title={item.title}
                                        price={item.price}
                                        date={item.date}
                                        key={index}/>
                        )
                    })}
                    <MarketArtsBg></MarketArtsBg>
                </MarketArts>
            </Container>
        </StyledMarket>
    )
}

const StyledMarket = styled.section`

`

const MarketTitle = styled(Title)`
    span{
        color: ${theme.colors.accent};
    }
`

const MarketArts = styled(FlexWrapper)`
    margin-top: 64px;
    position: relative;
`

const MarketArtsBg = styled.div`
    width: 434px;
    height: 305px;
    position: absolute;
    z-index: -3;
    bottom: -135px;
    right: -165px;
    background:  #1F413D;
    filter: blur(175px);
`