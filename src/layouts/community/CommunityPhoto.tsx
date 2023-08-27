import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import img1 from "../../assets/create/create1.webp"
import img2 from "../../assets/create/create2.webp"

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
`

const PhotosBg = styled.div`
    position: absolute;
    top: 410px;
    right: -30px;
    z-index: -4;
    width: 346px;
    height: 128px;
    background: #1F413D;
    filter: blur(125px);
`