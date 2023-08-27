import React from "react";
import styled from "styled-components";
import img1 from "../../assets/subscribe/subscribe1.webp";
import img2 from "../../assets/subscribe/subscribe2.webp";

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
`

const PhotoLeft = styled.img`
    border-radius: 20px;
    position: absolute;
    width: 410px;
    height: 376px;
    transform: rotate(-11.188deg);
    object-fit: cover;
    object-position: top;
`

const PhotoRight = styled.img`
    border-radius: 16px;
    width: 282px;
    height: 348px;
    position: absolute;
    right: 0;
    bottom: 0;
    object-fit: cover;
    object-position: center;   
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
`