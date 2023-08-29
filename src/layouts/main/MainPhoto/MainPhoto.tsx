import React from "react";
import styled from "styled-components";
import mainPhoto from "../../../assets/main/main1.webp"
import { Icon } from "../../../components/icon/Icon";
import { MainPhotoCard } from "./MainPhotoCard";
import { theme } from "../../../style/Theme";

export const MainPhoto: React.FC = () => {
    return(
        <StyledMainPhoto>
            <MainPhotoImg src={mainPhoto}/>
            <MainPhotoiconBig>
                <Icon iconId="main" width="171" height="171" viewbox="0 0 171 171"/>
            </MainPhotoiconBig>
            <MainPhotoiconSmall>
                <Icon iconId="smallStar" width="82" height="82" viewbox="0 0 82 82"/>
            </MainPhotoiconSmall>
            <MainPhotoCard/>
            <MainBigBg/>
            <MainSmallBg/>
        </StyledMainPhoto>
    )
}

const StyledMainPhoto = styled.div`
    margin-right: 50px;
    position: relative;
    @media ${theme.media.tablet}{
        margin-right: 0px;
    }
`

const MainPhotoImg = styled.img`
    width: 464px;
    height: 544px;
    object-fit: cover;
    object-position: top left;
    border-radius: 24px;
    
    @media ${theme.media.tablet}{
        width: 294px;
        height: 344px;
        border-radius: 16px;
    }
`

const MainPhotoiconBig = styled.div`
    position: absolute;
    top: 222px;
    left: -60px;
    z-index: 2;


    @media ${theme.media.desktopForCards}{
        display: none;
    }
`

const MainPhotoiconSmall = styled.div`
    position: absolute;
    top: 174px;
    left: -30px;
    z-index: 2;
    display: none;

    @media ${theme.media.desktopForCards}{
        display: block;
    }
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

    @media ${theme.media.tablet}{
        width: 120px;
        height: 208px;
        filter: blur(80px);
        left: -45px;
        bottom: -78px;
    }
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
    @media ${theme.media.desktopBg}{
        display: none;
    }
`
