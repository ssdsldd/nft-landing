import React from "react";
import { Container } from "../../components/Container";
import artImage1 from "../../assets/shop/shop1.webp";
import artImage2 from "../../assets/shop/shop2.webp";
import artImage3 from "../../assets/shop/shop3.webp";
import { MarketArt } from "./art/Art";
import { S } from "./Market-Styles";

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
        <S.StyledMarket>
            <Container>
                <S.MarketWrapper>
                    <S.MarketTitle><span>Amazing</span> and Super <br /> Unique Art of This <span>Week</span></S.MarketTitle>
    
                    <S.MarketArts justify="space-around" gap="30px" wrap="wrap">
                        {artItems.map((item, index) => {
                            return(
                                <MarketArt  src={item.src}
                                            title={item.title}
                                            price={item.price}
                                            date={item.date}
                                            key={index}/>
                            )
                        })}
                        <S.MarketArtsBg></S.MarketArtsBg>
                    </S.MarketArts>

                    <S.MarketButton>See All</S.MarketButton>
                </S.MarketWrapper>
            </Container>
        </S.StyledMarket>
    )
}
