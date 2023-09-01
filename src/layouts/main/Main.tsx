import React from "react";
import { Container } from "../../components/Container";
import styled from "styled-components";
import { MainContent } from "./mainContent/MainContent";
import { MainPhoto } from "./MainPhoto/MainPhoto";
import { theme } from "../../style/Theme";
import { MainContentStatistic } from "./mainContent/MainContentStatistic";

export const Main: React.FC = () => {
    return(
        <StyledMain>
            <Container>
                <MainWrapper>
                    <MainContent/>
                    <MainPhoto/>
                    <MainContentStatistic/>
                </MainWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    
`

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-template-rows: 1fr, 1fr;
    justify-content: space-between;

    @media ${theme.media.desktop}{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 48px;
    }
`





