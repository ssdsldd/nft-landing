import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { MainContent } from "./mainContent/MainContent";
import { MainPhoto } from "./MainPhoto/MainPhoto";

export const Main: React.FC = () => {
    return(
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-between">
                    <MainContent/>
                    <MainPhoto/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`

`



