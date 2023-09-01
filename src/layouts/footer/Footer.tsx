import React from "react";
import { Container } from "../../components/Container";
import { FooterInfo } from "./FooterInfo";
import { FooterLists } from "./FooterLists";
import { FooterCopyright } from "./FooterCopyright";
import { S } from "./Footer-Styles";



export const Footer: React.FC = () => {
    return(
        <S.StyledFooter>
            <Container>
                <S.FooterMain justify="space-between" gap="48px">
                    <FooterInfo/>
                    <FooterLists/>
                </S.FooterMain>
                <FooterCopyright/>
            </Container>
        </S.StyledFooter>
    )
}



