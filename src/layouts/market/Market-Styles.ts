import styled from "styled-components"
import { theme } from "../../style/Theme"
import { Title } from "../../components/Title"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Button } from "../../components/Button"

const StyledMarket = styled.section`

`

const MarketWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 134px;
    grid-template-rows: 1fr, 1fr;
    align-items: center;
    grid-row-gap: 64px;

    @media ${theme.media.tablet}{
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
    }
`

const MarketTitle = styled(Title)`
    grid-column: 1/2;
    grid-row: 1/2;
    span{
        color: ${theme.colors.accent};
    }
`

const MarketArts = styled(FlexWrapper)`
    position: relative;
    grid-column: 1/3;
    grid-row: 2/3;
`

const MarketArtsBg = styled.div`
    width: 434px;
    height: 305px;
    position: absolute;
    z-index: -3;
    bottom: -135px;
    right: -165px;
    background:  #1F413D;
    filter: blur(175px);

    @media ${theme.media.desktopBg}{
        display: none;
    }
`
const MarketButton = styled(Button)`
    padding: 12px 0;

    @media ${theme.media.tablet}{
        padding: 12px 40px;
    }
`

export const S = {
    StyledMarket,
    MarketWrapper,
    MarketTitle,
    MarketArts,
    MarketArtsBg,
    MarketButton
}