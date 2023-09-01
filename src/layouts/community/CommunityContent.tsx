import React from "react";
import { Button } from "../../components/Button";
import { S } from "./Community-Styles";

export const CommunityContent: React.FC = () => {
    return(
        <S.Content>
            <S.CommunityTitle>Create And Sell <br/>Your <span>Best NFTs</span></S.CommunityTitle>
            <S.ContentText>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</S.ContentText>
            <S.ContentButtons gap="36px" align="center">
                <Button>Create Now</Button>
                <S.ContentLink>Learn more</S.ContentLink>
            </S.ContentButtons>
        </S.Content>
    )
}


