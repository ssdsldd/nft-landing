import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import img1 from "../../assets/create/create1.webp"
import img2 from "../../assets/create/create2.webp"
import { theme } from "../../style/Theme";

export const CommunityPhoto: React.FC = () => {
    return(
        <Photos>
            <PhotosTop src={img1}/>
            <PhotosBottom src={img2}/>
            <PhotosBg/>
        </Photos>
    )
}

const Photos = styled.div`
    width: 740px;
    height: 560px;
    position: relative;

    @media ${theme.media.tablet}{
        width: 343px;
        height: 260px;
    }
`

const PhotosTop = styled.img`
    position: absolute;
    top: 160px;
    left: 0;
    width: 410px;
    height: 400px;
    object-fit: cover;
    z-index: -1;
    border-radius: 24px;
    object-position: top;

    @media ${theme.media.tablet}{
        width: 190px;
        height: 186px;
        top: 74px;
    }
`
const PhotosBottom = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    width: 410px;
    height: 400px;
    object-fit: cover;
    object-position: top;
    z-index: -2;
    border-radius: 24px;

    @media ${theme.media.tablet}{
        width: 190px;
        height: 220px;
    }
`

const PhotosBg = styled.div`
    position: absolute;
    top: 410px;
    right: -30px;
    z-index: -4;
    width: 346px;
    height: 128px;
    background: #1F413D;
    /* filter: blur(125px); */
    @media ${theme.media.desktopBg}{
        display: none;
    }

    @media ${theme.media.tablet}{
        display: block;
        background-color: #fff;
        width: 166px;
        height: 83px;
        bottom: -40px;
        right: 5px;
    }
`