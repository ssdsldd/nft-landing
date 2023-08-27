import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../style/Theme";

export const Logo: React.FC = () => {
    return(
        <LogoLink>
            <FlexWrapper>
                    <Icon iconId="logo"/>
                    <LogoText>Creative<LogoSubtext>art</LogoSubtext></LogoText>
            </FlexWrapper>
        </LogoLink>
    )
}

const LogoText = styled.span`
    font-family: "Canela-Medium", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin: 14px 0 0 8px;
`

const LogoSubtext = styled.span`
    color: ${theme.colors.accent};
`

const LogoLink = styled.a`

`