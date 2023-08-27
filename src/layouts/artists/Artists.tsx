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
                <ArtistsFlex justify="space-between" align="center">
                    <ArtistsTitle>Popular <span>Artists</span> <br />On This Week</ArtistsTitle>
                    <Button>See All</Button>
                </ArtistsFlex>
                <ArtistsGrid/>
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
    margin-bottom: 64px;
`