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
                    <DesktopButton>See All</DesktopButton>
                </FlexWrapper>
                <MarketArts justify="space-around" gap="30px" wrap="wrap">
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
                <MobileButton>
                    See All
                </MobileButton>
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

    @media ${theme.media.tablet}{
        margin-top: 32px;
    }
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

    @media ${theme.media.desktopBg}{
        display: none;
    }
`

const DesktopButton = styled(Button)`
    @media ${theme.media.tablet}{
        display: none;
    }
`

const MobileButton = styled(Button)`
    display: none;
    margin: 0 auto;
    max-width: 134px;
    padding: 12px 0;
    margin-top: 32px;
    @media ${theme.media.tablet}{
        display: block;
    }
`