import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { CommunityContent } from "./CommunityContent";
import { CommunityPhoto } from "./CommunityPhoto";

export const Community: React.FC = () => {
    return(
        <StyledCommunity>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <CommunityContent/>
                    <CommunityPhoto/>
                </FlexWrapper>
            </Container>
        </StyledCommunity>
    )
}

const StyledCommunity = styled.section`
    
`