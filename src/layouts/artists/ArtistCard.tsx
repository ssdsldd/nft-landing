import React from "react";
import { S } from "./Artists-Styles";

type CardPropsType = {
    srcBg: string,
    srcProfile: string,
    name: string
}

export const ArtistsCard: React.FC<CardPropsType> = (props: CardPropsType) => {
    return(
        <S.Card as={"a"} srcBg={props.srcBg} srcProfile={props.srcProfile} name={props.name} direction="column" justify="flex-end">
            <S.CardProfile gap="12px">
                <S.CardProfileImg src={props.srcProfile}/>
                <S.CardProfileInfo>
                    <S.CardProfileOwner>Owner</S.CardProfileOwner>
                    <S.CardProfileName>{props.name}</S.CardProfileName>
                </S.CardProfileInfo>
            </S.CardProfile>
        </S.Card>
    )
}

