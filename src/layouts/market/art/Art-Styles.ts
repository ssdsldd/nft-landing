import styled from "styled-components"
import { theme } from "../../../style/Theme"
import { Button } from "../../../components/Button"
import { FlexWrapper } from "../../../components/FlexWrapper"

const Art = styled.div`
    border-radius: 28px;
    border-top: 1px solid ${theme.colors.accent};
    background: #131E3A;
    padding: 20px;

    @media ${theme.media.tablet}{
        padding: 16px;
        border-radius: 24px;
    }
`

const ArtImageBox = styled.div`
    overflow: hidden;
    border-radius: 16px;
    height: 340px;
`

const ArtImage = styled.img`
    width: 370px;
    height: 340px;
    object-fit: cover;
    object-position: top;

    @media ${theme.media.tablet}{
        width: 310px;
        transform: scale(1.2) translateY(20px);
        object-position: top;
    }
`

const ArtTitle = styled.a`
    @media ${theme.media.tablet}{
        font-size: 20px;
    }
`

const ArtPrice = styled.span`
    font-size: 16px;
`

const ArtMainInfo = styled(FlexWrapper)`
    margin: 18px 0 24px;
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
`

const ArtPriceBox = styled(FlexWrapper)`
    
`

const ArtTimer = styled.div`

`

const ArtTimerBox = styled(FlexWrapper)`
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
`

const ArtTimerTitle = styled.span`
    font-size: 14px;
    display: inline-block;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 4px;
`
const ArtButton = styled(Button)`
    background-color: transparent;
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
    transition: ${theme.animation.transition};
    &:hover{
        border: 1px solid transparent;
        background-color: ${theme.colors.accent};
        color: ${theme.colors.accentFont};
    }
`

export const S = {
    Art,
    ArtImageBox,
    ArtImage,
    ArtTitle,
    ArtPrice,
    ArtMainInfo,
    ArtPriceBox,
    ArtTimer,
    ArtTimerBox,
    ArtTimerTitle,
    ArtButton
}