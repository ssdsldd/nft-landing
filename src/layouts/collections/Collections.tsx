import React from "react";
import { Container } from "../../components/Container";
import { CollectionContent } from "./CollectionContent";
import { CollectionPhoto } from "./CollectionPhoto";
import { S } from "./Collections-Styles";

export const Collections: React.FC = () => {
    return(
        <S.StyledCollecions>
            <Container>
                <S.CollectionsFlex justify="space-between" align="center" gap = "30px">
                    <CollectionPhoto/>
                    <CollectionContent/>
                </S.CollectionsFlex>
            </Container>
        </S.StyledCollecions>
    )
}

