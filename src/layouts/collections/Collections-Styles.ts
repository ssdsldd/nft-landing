import styled from "styled-components"
import { FlexWrapper } from "../../components/FlexWrapper"
import { theme } from "../../style/Theme"
import { Title } from "../../components/Title"
import { Button } from "../../components/Button"

const StyledCollecions = styled.section`
    
`

const CollectionsFlex = styled(FlexWrapper)`
    @media ${theme.media.desktop}{
        flex-wrap: wrap;
        gap: 110px;
        justify-content: center;
    }
`

const PhotoBox = styled.div`
    width: 630px;
    height: 458px;
    position: relative;

    @media ${theme.media.desktop}{
        order: 2;
    }

    @media ${theme.media.mobile}{
        width: 343px;
        height: 250px;
    }
`

const PhotoLeft = styled.img`
    border-radius: 20px;
    position: absolute;
    max-width: 410px;
    width: 100%;
    max-height: 376px;
    transform: rotate(-11.188deg);
    object-fit: cover;
    object-position: top;

    @media ${theme.media.mobile}{
        max-width: 224px;
        max-height: 204px;
    }
`

const PhotoRight = styled.img`
    border-radius: 16px;
    max-width: 282px;
    width: 100%;
    max-height: 348px;
    position: absolute;
    right: 0;
    bottom: 0;
    object-fit: cover;
    object-position: center; 
    
    @media ${theme.media.mobile}{
        max-width: 152px;
        max-height: 190px;
    }
`

const PhotoBg = styled.div`
    width: 513px;
    height: 358px;
    background: #1F413D;
    filter: blur(175px);
    position: absolute;
    left: -200px;
    top: -100px;
    z-index: -2;

    @media ${theme.media.mobile}{
        left: -55px;
        top: -35px;
        width: 152px;
        height: 176px;
        filter: blur(60px);
    }
`

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
export const S = {
    StyledCollecions,
    CollectionsFlex,
    PhotoBox,
    PhotoLeft,
    PhotoRight,
    PhotoBg,
    StyledContent,
    CollectionTitle,
    CollectionText,
    CollectionInput,
    CollectionButton,
    CollectionForm
}