import React from "react";
import mainPhoto from "../../../assets/main/main1.webp"
import { Icon } from "../../../components/icon/Icon";
import { MainPhotoCard } from "./MainPhotoCard";
import { S } from "./MainPhoto-Styles";


export const MainPhoto: React.FC = () => {
    return(
        <S.StyledMainPhoto>
            <S.MainPhotoImg src={mainPhoto}/> 
            <S.MainPhotoiconBig>
                <Icon iconId="main" width="171" height="171" viewbox="0 0 171 171"/>
            </S.MainPhotoiconBig>
            <S.MainPhotoiconSmall>
                <Icon iconId="smallStar" width="82" height="82" viewbox="0 0 82 82"/>
            </S.MainPhotoiconSmall>
            <MainPhotoCard/>
            <S.MainBigBg/>
            <S.MainSmallBg/>
        </S.StyledMainPhoto>
    )
}

