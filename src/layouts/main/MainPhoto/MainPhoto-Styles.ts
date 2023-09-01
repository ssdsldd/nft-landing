import styled from "styled-components"
import { theme } from "../../../style/Theme"

const StyledMainPhoto = styled.div`
    margin-right: 50px;
    position: relative;
    grid-column: 2/3;
    grid-row: 1/3;
    @media ${theme.media.desktop}{
        margin-right: 0px;
    }
`

const MainPhotoImg = styled.img`
    width: 464px;
    height: 544px;
    object-fit: cover;
    object-position: top left;
    border-radius: 24px;
    
    @media ${theme.media.tablet}{
        width: 294px;
        height: 344px;
        border-radius: 16px;
    }
`

const MainPhotoiconBig = styled.div`
    position: absolute;
    top: 222px;
    left: -60px;
    z-index: 2;


    @media ${theme.media.tablet}{
        display: none;
    }
`

const MainPhotoiconSmall = styled.div`
    position: absolute;
    top: 174px;
    left: -30px;
    z-index: 2;
    display: none;

    @media ${theme.media.tablet}{
        display: block;
    }
`

const MainBigBg = styled.div`
    width: 631px;
    height: 458px;
    background-color: #1F413D;
    filter: blur(200px);
    position: absolute;
    z-index: -3;
    top: 158px;
    left: -336px;

    @media ${theme.media.tablet}{
        width: 120px;
        height: 208px;
        filter: blur(80px);
        left: -45px;
        bottom: -78px;
    }
`

const MainSmallBg = styled.div`
    width: 352px;
    height: 221px;
    background: #1A2652;
    filter: blur(125px);
    position: absolute;
    z-index: -3;
    bottom: -146px;
    right: -110px;
    @media ${theme.media.desktopBg}{
        display: none;
    }
`

export const S = {
    StyledMainPhoto,
    MainPhotoImg,
    MainPhotoiconBig,
    MainPhotoiconSmall,
    MainBigBg,
    MainSmallBg
}