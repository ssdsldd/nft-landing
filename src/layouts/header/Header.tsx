import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "./menu/Menu";
import styled from "styled-components";

export const Header: React.FC = () => {
    return(
        <StyledHeader> 
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 28px 0;
`


