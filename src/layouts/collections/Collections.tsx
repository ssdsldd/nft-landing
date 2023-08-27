import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { CollectionContent } from "./CollectionContent";
import { CollectionPhoto } from "./CollectionPhoto";

export const Collections: React.FC = () => {
    return(
        <StyledCollecions>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <CollectionPhoto/>
                    <CollectionContent/>
                </FlexWrapper>
            </Container>
        </StyledCollecions>
    )
}

const StyledCollecions = styled.section`
    
`