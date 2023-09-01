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
                <MarketWrapper>
                    <MarketTitle><span>Amazing</span> and Super <br /> Unique Art of This <span>Week</span></MarketTitle>
    
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

                    <MarketButton>See All</MarketButton>
                </MarketWrapper>
            </Container>
        </StyledMarket>
    )
}

const StyledMarket = styled.section`

`

const MarketWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 134px;
    grid-template-rows: 1fr, 1fr;
    align-items: center;
    grid-row-gap: 64px;

    @media ${theme.media.tablet}{
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
    }
`

const MarketTitle = styled(Title)`
    grid-column: 1/2;
    grid-row: 1/2;
    span{
        color: ${theme.colors.accent};
    }
`

const MarketArts = styled(FlexWrapper)`
    position: relative;
    grid-column: 1/3;
    grid-row: 2/3;
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
const MarketButton = styled(Button)`
    padding: 12px 0;

    @media ${theme.media.tablet}{
        padding: 12px 40px;
    }
`