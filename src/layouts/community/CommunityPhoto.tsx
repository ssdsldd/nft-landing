import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import img1 from "../../assets/create/create1.webp"
import img2 from "../../assets/create/create2.webp"
import { theme } from "../../style/Theme";
import { S } from "./Community-Styles";

export const CommunityPhoto: React.FC = () => {
    return(
        <S.Photos>
            <S.PhotosTop src={img1}/>
            <S.PhotosBottom src={img2}/>
            <S.PhotosBg/>
        </S.Photos>
    )
}