import styled from "styled-components"
import { theme } from "../../style/Theme"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Title } from "../../components/Title"

const StyledCommunity = styled.section`
    
`

const StyledCommunityFlex = styled(FlexWrapper)`
    @media ${theme.media.desktopForCards}{
        justify-content: space-around;
    }
`

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

const Photos = styled.div`
    max-width: 740px;
    width: 100%;
    height: 560px;
    position: relative;

    @media ${theme.media.tablet}{
        max-width: 343px;
        height: 260px;
    }
`

const PhotosTop = styled.img`
    position: absolute;
    top: 160px;
    left: 0;
    max-width: 410px;
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    z-index: -1;
    border-radius: 24px;
    object-position: top;

    @media ${theme.media.tablet}{
        max-width: 190px;
        max-height: 186px;
        top: 74px;
    }
`
const PhotosBottom = styled.img`
    position: absolute;
    right: 0px;
    top: 0;
    max-width: 410px;
    width: 100%;
    max-height: 475px;
    object-fit: cover;
    object-position: top;
    z-index: -2;
    border-radius: 24px;

    @media ${theme.media.tablet}{
        max-width: 190px;
        max-height: 220px;
    }
`

const PhotosBg = styled.div`
    position: absolute;
    bottom: -45px;
    right: -20px;
    z-index: -4;
    width: 346px;
    height: 128px;
    background: #1F413D;
    filter: blur(125px);
    @media ${theme.media.desktopBg}{
        filter: blur(60px);
        width: 166px;
        height: 83px;
        bottom: -40px;
        right: 5px;
    }
`
export const S = {
    StyledCommunity,
    StyledCommunityFlex,
    Content,
    CommunityTitle,
    ContentText,
    ContentLink,
    ContentButtons,
    Photos,
    PhotosTop,
    PhotosBottom,
    PhotosBg
}