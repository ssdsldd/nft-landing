import { theme } from "../../style/Theme";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";

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

const StyledAGrid = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 300px 80px 410px 410px;
    grid-template-rows: repeat(2, 1fr);

    @media ${theme.media.desktopForCards}{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 500px);
    }

    @media ${theme.media.tablet}{
        /* max-width: 343px; */
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    @media ${theme.media.mobile}{
        width: 100%;
    }
`


const Card = styled(FlexWrapper)<{srcBg: string, srcProfile: string, name: string}>`
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    min-height: 310px;
    background-image: linear-gradient(2deg, rgba(19, 30, 58, 0.92) 0%, rgba(19, 30, 58, 0.00) 94.62%), url(${props => props.srcBg});
    background-color: lightgray;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    &:nth-child(2){
        grid-column: 2/4;

        @media ${theme.media.desktopForCards}{
            grid-column: 1/3;
            grid-row: 2/3;
        }
    }

    &:nth-child(3){
        grid-column: 4/5;
        grid-row: 1/3;

        @media ${theme.media.desktopForCards}{
            grid-column: 2/3;
            grid-row: 1/2;
        }
    }

    &:nth-child(4){
        grid-column: 1/3;

        @media ${theme.media.desktopForCards}{
            grid-column: 1/2;
            grid-row: 3/4;
        }
    }

    &:nth-child(5){

        @media ${theme.media.desktopForCards}{
            grid-column: 2/3;
            grid-row: 3/4;
        }
    }


    @media ${theme.media.tablet}{
        height: 450px;
    }

    @media ${theme.media.mobile}{
        max-height: 356px;
    }
`

const CardProfile = styled(FlexWrapper)`

`
const CardProfileImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`

const CardProfileInfo = styled.div`
    
`

const CardProfileName = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
`

const CardProfileOwner = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 160%; 
    margin-bottom: 4px;
    display: block;
`

export const S = {
    StyledArtists,
    ArtistsTitle,
    ArtistsFlex,
    ArtistsButton,
    StyledAGrid,
    Card,
    CardProfile,
    CardProfileImg,
    CardProfileInfo,
    CardProfileName,
    CardProfileOwner
}