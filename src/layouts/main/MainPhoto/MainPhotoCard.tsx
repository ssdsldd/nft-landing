import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { theme } from "../../../style/Theme";
import Countdown, {CountdownRenderProps } from "react-countdown";

const CountdownRenderer: React.FC<CountdownRenderProps > = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
};

export const MainPhotoCard: React.FC = () => {
    return(
        <Card>
            <CardInfo as={FlexWrapper} justify = "space-between">
                <CardTimer>
                    <CardTimerTitle>Ends in</CardTimerTitle>
                    <CardTimerValue>
                        <Countdown date={Date.now() + 80000000} renderer={CountdownRenderer}/>
                    </CardTimerValue>
                </CardTimer>
                <CardPrice>
                    <CardTimerTitle>Current bid</CardTimerTitle>
                    <CardPriceValue>0.24ETH</CardPriceValue>
                </CardPrice>
            </CardInfo>
            <CardButton as={Button}>Place A Bid</CardButton>
        </Card>
    )
}

const Card = styled.div`
    border-radius: 16px;
    border-top: 1px solid var(--primary, #D3F85A);
    background-color:  #131E3A;
    box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
    padding: 20px;
    position: absolute;
    z-index: 2;
    top: 468px;
    right: -50px;
    width: 304px;
`
const CardInfo = styled.div`
    color: ${theme.colors.accent};
    margin-bottom: 20px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
`

const CardTimer = styled.div`
    
`

const CardTimerTitle = styled.span`
    display: block;
    margin-bottom: 8px;
`

const CardTimerValue = styled.span`
    display: block;
    color: ${theme.colors.font};
    font-weight: 700;
    line-height: 120%;
`

const CardPrice = styled.div`
    margin-bottom: 8px;
`

const CardPriceValue = styled.span`
    display: block;
    color: ${theme.colors.font};
    font-weight: 700;
    line-height: 120%;
`

const CardButton = styled.a`
    width: 100%;
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
