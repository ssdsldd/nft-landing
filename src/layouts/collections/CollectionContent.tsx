import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { theme } from "../../style/Theme";
import { Button } from "../../components/Button";

export const CollectionContent: React.FC = () => {
    return(
        <StyledContent>
            <CollectionTitle>Subscribe And <span>get our<br /> Updates</span> Every Week</CollectionTitle>
            <CollectionText>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly</CollectionText>
            <CollectionForm>
                <CollectionInput placeholder="Enter your e-mail"/>
                <CollectionButton>Subscribe</CollectionButton>
            </CollectionForm>
        </StyledContent>
    )
}

const StyledContent = styled.div`
    max-width: 516px;
`

const CollectionTitle = styled(Title)`
    span{
        color: ${theme.colors.accent};
    }

    @media ${theme.media.desktop}{
        text-align: center;
    }
`
const CollectionText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    margin: 20px 0 40px;

    @media ${theme.media.desktop}{
        text-align: center;
    }
`

const CollectionForm = styled.form`
    position: relative;
`

const CollectionInput = styled.input`
    width: 100%;
    padding: 16px 165px 16px 24px;
    border-radius: 8px;
    background: #131E3A;
    border: none;
    color: var(--white-dissable-1, rgba(255, 255, 253, 0.72));
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
`

const CollectionButton = styled(Button)`
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 2;

    @media ${theme.media.mobile}{
        right: 50%;
        top: 80px;
        transform: translateX(50%);
    }
`