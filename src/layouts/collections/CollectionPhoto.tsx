import React from "react";
import img1 from "../../assets/subscribe/subscribe1.webp";
import img2 from "../../assets/subscribe/subscribe2.webp";
import { S } from "./Collections-Styles";

export const CollectionPhoto: React.FC = () => {
    return(
        <S.PhotoBox>
            <S.PhotoLeft src={img1}/>
            <S.PhotoRight src={img2}/>
            <S.PhotoBg/>
        </S.PhotoBox>
    )
}
