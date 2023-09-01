import React from "react";
import { Container } from "../../components/Container";
import { ArtistsGrid } from "./ArtistsGrid";
import { S } from "./Artists-Styles";

export const Artists: React.FC = () => {
    return(
        <S.StyledArtists>
            <Container>
                <S.ArtistsFlex>
                    <S.ArtistsTitle>Popular <span>Artists</span> <br />On This Week</S.ArtistsTitle>
                    <ArtistsGrid/>  
                    <S.ArtistsButton>See All</S.ArtistsButton>
                </S.ArtistsFlex>
            </Container>
        </S.StyledArtists>
    )
}

