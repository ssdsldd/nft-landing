import React from "react";
import styled from "styled-components";
import mainPhoto from "../../../assets/main/main1.webp"
import { Icon } from "../../../components/icon/Icon";
import { MainPhotoCard } from "./MainPhotoCard";

export const MainPhoto: React.FC = () => {
    return(
        <StyledMainPhoto>
            <MainPhotoImg src={mainPhoto}/>
            <MainPhotoicon>
                <Icon iconId="main" width="171" height="171" viewbox="0 0 171 171"/>
            </MainPhotoicon>
            <MainPhotoCard/>
            <MainBigBg/>
            <MainSmallBg/>
        </StyledMainPhoto>
    )
}

const StyledMainPhoto = styled.div`
    margin-right: 50px;
    position: relative;
`

const MainPhotoImg = styled.img`
    width: 464px;
    height: 544px;
    object-fit: cover;
    object-position: top left;
    border-radius: 24px;
`

const MainPhotoicon = styled.div`
    position: absolute;
    top: 222px;
    left: -60px;
    z-index: 2;
`

const MainBigBg = styled.div`
    width: 631px;
    height: 458px;
    background-color: #1F413D;
    filter: blur(200px);
    position: absolute;
    z-index: -3;
    top: 158px;
    left: -336px;
`

const MainSmallBg = styled.div`
    width: 352px;
    height: 221px;
    background: #1A2652;
    filter: blur(125px);
    position: absolute;
    z-index: -3;
    bottom: -146px;
    right: -110px;
`