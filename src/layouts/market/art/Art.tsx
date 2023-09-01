import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import Countdown, {CountdownRenderProps } from "react-countdown";
import { S } from "./Art-Styles";

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
        <S.Art>
            <S.ArtImageBox>
                <S.ArtImage src={props.src}/> 
            </S.ArtImageBox>
            <S.ArtMainInfo justify="space-between">
                <S.ArtTitle>{props.title}</S.ArtTitle>
                <S.ArtPriceBox gap="4px" align="center">
                    <Icon iconId="eth" viewbox="0 0 24 24" width="24" height="24"/>
                    <S.ArtPrice>{props.price}</S.ArtPrice>
                </S.ArtPriceBox>
            </S.ArtMainInfo>
            <FlexWrapper justify="space-between">
                    <S.ArtTimer>
                        <S.ArtTimerTitle>Ending In</S.ArtTimerTitle>
                        <S.ArtTimerBox gap="12px" align="center">
                            <Icon iconId="clock2"  width="24" height="24" viewbox = "0 0 35 35"/>
                            <Countdown date={Date.now() + 80000000} renderer={CountdownRenderer}/>
                        </S.ArtTimerBox>
                    </S.ArtTimer>
                    <S.ArtButton>Place A Bid</S.ArtButton>
            </FlexWrapper>
        </S.Art>
    )
}

