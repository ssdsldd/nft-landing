import React from "react";
import styled from "styled-components";
import { theme } from "../../../style/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import Countdown, {CountdownRenderProps } from "react-countdown";
import { Button } from "../../../components/Button";

type MarketArtProps = {
    src: string,
    title: string,
    price: string,
    date: number
}

const CountdownRenderer: React.FC<CountdownRenderProps > = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };

export const MarketArt: React.FC<MarketArtProps> = (props: MarketArtProps) => {
    return(
        <Art>
            <ArtImage src={props.src}/>
            <ArtMainInfo justify="space-between">
                <ArtTitle>{props.title}</ArtTitle>
                <ArtPriceBox gap="4px" align="center">
                    <Icon iconId="eth" viewbox="0 0 24 24" width="24" height="24"/>
                    <ArtPrice>{props.price}</ArtPrice>
                </ArtPriceBox>
            </ArtMainInfo>
            <FlexWrapper justify="space-between">
                    <ArtTimer>
                        <ArtTimerTitle>Ending In</ArtTimerTitle>
                        <ArtTimerBox gap="12px" align="center">
                            <Icon iconId="clock2"  width="24" height="24" viewbox = "0 0 35 35"/>
                            <Countdown date={Date.now() + 80000000} renderer={CountdownRenderer}/>
                        </ArtTimerBox>
                    </ArtTimer>
                    <ArtButton>Place A Bid</ArtButton>
            </FlexWrapper>
        </Art>
    )
}

const Art = styled.div`
    border-radius: 28px;
    border-top: 1px solid ${theme.colors.accent};
    background: #131E3A;
    padding: 20px;
`

const ArtImage = styled.img`
    border-radius: 16px;
    width: 370px;
    height: 340px;
    object-fit: cover;
    object-position: top;
`

const ArtTitle = styled.a`
    
`

const ArtPrice = styled.span`
    font-size: 16px;
`

const ArtMainInfo = styled(FlexWrapper)`
    margin: 18px 0 24px;
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
`

const ArtPriceBox = styled(FlexWrapper)`
    
`

const ArtTimer = styled.div`

`

const ArtTimerBox = styled(FlexWrapper)`
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
`

const ArtTimerTitle = styled.span`
    font-size: 14px;
    display: inline-block;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 4px;
`
const ArtButton = styled(Button)`
    background-color: transparent;
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
    transition: ${theme.animation.transition};
    &:hover{
        border: 1px solid transparent;
        background-color: ${theme.colors.accent};
        color: ${theme.colors.accentFont};
    }
`
