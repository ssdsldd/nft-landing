import React from "react";
import styled from "styled-components";
import img1 from "../../assets/subscribe/subscribe1.webp";
import img2 from "../../assets/subscribe/subscribe2.webp";
import { theme } from "../../style/Theme";

export const CollectionPhoto: React.FC = () => {
    return(
        <PhotoBox>
            <PhotoLeft src={img1}/>
            <PhotoRight src={img2}/>
            <PhotoBg/>
        </PhotoBox>
    )
}

const PhotoBox = styled.div`
    width: 630px;
    height: 458px;
    position: relative;

    @media ${theme.media.desktop}{
        order: 2;
    }

    @media ${theme.media.mobile}{
        width: 343px;
        height: 250px;
    }
`

const PhotoLeft = styled.img`
    border-radius: 20px;
    position: absolute;
    max-width: 410px;
    width: 100%;
    max-height: 376px;
    transform: rotate(-11.188deg);
    object-fit: cover;
    object-position: top;

    @media ${theme.media.mobile}{
        max-width: 224px;
        max-height: 204px;
    }
`

const PhotoRight = styled.img`
    border-radius: 16px;
    max-width: 282px;
    width: 100%;
    max-height: 348px;
    position: absolute;
    right: 0;
    bottom: 0;
    object-fit: cover;
    object-position: center; 
    
    @media ${theme.media.mobile}{
        max-width: 152px;
        max-height: 190px;
    }
`

const PhotoBg = styled.div`
    width: 513px;
    height: 358px;
    background: #1F413D;
    filter: blur(175px);
    position: absolute;
    left: -200px;
    top: -100px;
    z-index: -2;

    @media ${theme.media.mobile}{
        left: -55px;
        top: -35px;
        width: 152px;
        height: 176px;
        filter: blur(60px);
    }
`