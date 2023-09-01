import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { FooterInfo } from "./FooterInfo";
import { FooterLists } from "./FooterLists";
import { FooterCopyright } from "./FooterCopyright";
import { theme } from "../../style/Theme";



export const Footer: React.FC = () => {
    return(
        <StyledFooter>
            <Container>
                <FooterMain justify="space-between" gap="48px">
                    <FooterInfo/>
                    <FooterLists/>
                </FooterMain>
                <FooterCopyright/>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    padding: 92px 0;
`

const FooterMain = styled(FlexWrapper)`
    padding-bottom: 48px;
    border-bottom: 1px solid var(--white-dissable, #838382);
    margin-bottom: 48px;

    @media ${theme.media.desktop}{
        flex-direction: column;
    }
`


