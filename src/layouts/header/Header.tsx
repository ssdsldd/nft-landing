import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "./menu/Menu";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { theme } from "../../style/Theme";

export const Header: React.FC = () => {
    return(
        <StyledHeader> 
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo/>
                    <Menu/>
                    <Button>Contact</Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 28px 0;
    ${Button}{
        @media ${theme.media.desktop}{
            display: none;
        }
    }
`


