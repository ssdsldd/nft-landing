import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { CollectionContent } from "./CollectionContent";
import { CollectionPhoto } from "./CollectionPhoto";
import { theme } from "../../style/Theme";

export const Collections: React.FC = () => {
    return(
        <StyledCollecions>
            <Container>
                <CollectionsFlex justify="space-between" align="center" gap = "30px">
                    <CollectionPhoto/>
                    <CollectionContent/>
                </CollectionsFlex>
            </Container>
        </StyledCollecions>
    )
}

const StyledCollecions = styled.section`
    
`

const CollectionsFlex = styled(FlexWrapper)`
    @media ${theme.media.desktop}{
        flex-wrap: wrap;
        gap: 110px;
        justify-content: center;
    }
`