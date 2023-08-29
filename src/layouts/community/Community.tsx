import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { CommunityContent } from "./CommunityContent";
import { CommunityPhoto } from "./CommunityPhoto";
import { theme } from "../../style/Theme";

export const Community: React.FC = () => {
    return(
        <StyledCommunity>
            <Container>
                <StyledCommunityFlex justify="space-between" align="center" wrap="wrap" gap="48px">
                    <CommunityContent/>
                    <CommunityPhoto/>
                </StyledCommunityFlex>
            </Container>
        </StyledCommunity>
    )
}

const StyledCommunity = styled.section`
    
`

const StyledCommunityFlex = styled(FlexWrapper)`
    @media ${theme.media.desktopForCards}{
        justify-content: space-around;
    }
`