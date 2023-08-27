import React from "react";
import styled, { css } from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

type CardPropsType = {
    srcBg: string,
    srcProfile: string,
    name: string
}

export const ArtistsCard: React.FC<CardPropsType> = (props: CardPropsType) => {
    return(
        <Card as={"a"} srcBg={props.srcBg} srcProfile={props.srcProfile} name={props.name} direction="column" justify="flex-end">
            <CardProfile gap="12px">
                <CardProfileImg src={props.srcProfile}/>
                <CardProfileInfo>
                    <CardProfileOwner>Owner</CardProfileOwner>
                    <CardProfileName>{props.name}</CardProfileName>
                </CardProfileInfo>
            </CardProfile>
        </Card>
    )
}

const Card = styled(FlexWrapper)<CardPropsType>`
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    min-height: 310px;
    background-image: linear-gradient(2deg, rgba(19, 30, 58, 0.92) 0%, rgba(19, 30, 58, 0.00) 94.62%), url(${props => props.srcBg});
    background-color: lightgray;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    &:nth-child(2){
        grid-column: 2/4;
    }

    &:nth-child(3){
        grid-column: 4/5;
        grid-row: 1/3;
    }

    &:nth-child(4){
        grid-column: 1/3;
    }
`

const CardProfile = styled(FlexWrapper)`

`
const CardProfileImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`

const CardProfileInfo = styled.div`
    
`

const CardProfileName = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
`

const CardProfileOwner = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 160%; 
    margin-bottom: 4px;
    display: block;
`