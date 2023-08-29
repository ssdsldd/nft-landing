import React from "react";
import styled from "styled-components";
import { theme } from "../../../style/Theme";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const MainContentButtons: React.FC = () => {
    return(
        <StyledMainContentButtons as={FlexWrapper} gap="36px" align = 'center'>
            <Button>Explore Now</Button>
            <MainContentLink>Learn more</MainContentLink>
        </StyledMainContentButtons>
    )
}

const StyledMainContentButtons = styled.div`
    margin-bottom: 72px;
    @media ${theme.media.desktop}{
        justify-content: center;
        margin-bottom: 0;
    }
`
const MainContentLink = styled.a`
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
    transition: ${theme.animation.transition};
    border-bottom: 1px solid transparent;
    padding-bottom: 2.5px;
    &:hover{
        color: ${theme.colors.font};
        border-bottom: 1px solid ${theme.colors.accent};
    }
`