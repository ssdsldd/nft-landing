import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { MainContent } from "./mainContent/MainContent";
import { MainPhoto } from "./MainPhoto/MainPhoto";
import { theme } from "../../style/Theme";
import { MainContentStatisticMobile } from "./mainContent/MainContentStatisticMobile";

export const Main: React.FC = () => {
    return(
        <StyledMain>
            <Container>
                <MainFlexWrapper justify="space-between" wrap="wrap">
                    <MainContent/>
                    <MainPhoto/>
                    <MainContentStatisticMobile/>
                </MainFlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    
`

const MainFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.desktop}{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 48px;
    }
`





