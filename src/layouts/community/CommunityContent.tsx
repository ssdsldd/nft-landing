import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Title } from "../../components/Title";
import { theme } from "../../style/Theme";
import { Button } from "../../components/Button";

export const CommunityContent: React.FC = () => {
    return(
        <Content>
            <CommunityTitle>Create And Sell <br/>Your <span>Best NFTs</span></CommunityTitle>
            <ContentText>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</ContentText>
            <ContentButtons gap="36px" align="center">
                <Button>Create Now</Button>
                <ContentLink>Learn more</ContentLink>
            </ContentButtons>
        </Content>
    )
}

const Content = styled.div`
    max-width: 426px;
`

const CommunityTitle = styled(Title)`
    span{
        color: ${theme.colors.accent};
    }

    @media ${theme.media.desktopForCards}{
        text-align: center;
    }
`

const ContentText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    margin: 20px 0 40px;


    @media ${theme.media.desktopForCards}{
        text-align: center;
    }

    @media ${theme.media.tablet}{
        margin: 20px 0 32px;
    }
`
const ContentLink = styled.a`
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

const ContentButtons = styled(FlexWrapper)`
    @media ${theme.media.desktopForCards}{
        justify-content: center;
    }
`
