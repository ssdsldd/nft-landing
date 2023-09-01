import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Title } from "../../components/Title";
import { theme } from "../../style/Theme";
import { Button } from "../../components/Button";
import { ArtistsGrid } from "./ArtistsGrid";

export const Artists: React.FC = () => {
    return(
        <StyledArtists>
            <Container>
                <ArtistsFlex>
                    <ArtistsTitle>Popular <span>Artists</span> <br />On This Week</ArtistsTitle>
                    <ArtistsGrid/>  
                    <ArtistsButton>See All</ArtistsButton>
                </ArtistsFlex>
            </Container>
        </StyledArtists>
    )
}

const StyledArtists = styled.section`
    
`

const ArtistsTitle = styled(Title)`
    span{
        color: ${theme.colors.accent};
    }
`

const ArtistsFlex = styled(FlexWrapper)`
    display: grid;
    grid-template-columns: 1fr 134px;
    grid-template-rows: 1fr, 1fr;
    align-items: center;
    grid-row-gap: 64px;

    @media ${theme.media.tablet}{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
`

const ArtistsButton = styled(Button)`
    padding: 12px 0;

    @media ${theme.media.tablet}{
        padding: 12px 40px;
    }
`