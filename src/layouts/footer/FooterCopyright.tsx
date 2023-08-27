import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";

export const FooterCopyright: React.FC = () => {
    return(
        <Copyright justify="space-between">
            © Copyright 2023 - Creativeart
            <Privacy gap="28px">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </Privacy>
        </Copyright>
    )
}

const Copyright = styled(FlexWrapper)`
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
`

const Privacy = styled(FlexWrapper)`
`