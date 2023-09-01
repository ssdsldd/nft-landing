import React from "react";
import { Container } from "../../components/Container";
import { MainContent } from "./mainContent/MainContent";
import { MainPhoto } from "./MainPhoto/MainPhoto";
import { MainContentStatistic } from "./mainContent/MainContentStatistic";
import { S } from "./Main-Styles";

export const Main: React.FC = () => {
    return(
        <S.StyledMain>
            <Container>
                <S.MainWrapper>
                    <MainContent/>
                    <MainPhoto/>
                    <MainContentStatistic/>
                </S.MainWrapper>
            </Container>
        </S.StyledMain>
    )
}







