import React from "react";
import { S } from "./Collections-Styles";


export const CollectionContent: React.FC = () => {
    return(
        <S.StyledContent>
            <S.CollectionTitle>Subscribe And <span>get our<br /> Updates</span> Every Week</S.CollectionTitle>
            <S.CollectionText>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly</S.CollectionText>
            <S.CollectionForm>
                <S.CollectionInput placeholder="Enter your e-mail"/>
                <S.CollectionButton>Subscribe</S.CollectionButton>
            </S.CollectionForm>
        </S.StyledContent>
    )
}
