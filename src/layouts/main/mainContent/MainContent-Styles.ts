import styled from "styled-components"
import { theme } from "../../../style/Theme"
import { font } from "../../../style/Font"

const StyledMainContent = styled.div`
    width: 544px;
    grid-column: 1/2;
    grid-row: 1/2;
    @media ${theme.media.desktop}{
        text-align: center;
    }

    @media ${theme.media.tablet}{
        max-width: 343px;
        padding-top: 20px;
    }
`

const MainContnetTitle = styled.h1`
    ${font({family: "'Canela-medium', sans-serif", weight: 500, Fmax: 64, Fmin: 39})}
    line-height: 120%;
    margin-bottom: 20px;
    span{
        color: ${theme.colors.accent};
    }
    @media ${theme.media.tablet}{
        font-size: 39px;
    }
`

const MainContnetText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 40px;

    @media ${theme.media.tablet}{
        margin-bottom: 32px;
    }
`

const StyledMainContentButtons = styled.div`
    margin-bottom: 72px;
    @media ${theme.media.desktop}{
        justify-content: center;
        margin-bottom: 0;
    }
`

const MainContentLink = styled.a`
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

const Statistic = styled.ul`
    list-style: none;
    text-align: start;

    @media ${theme.media.desktop}{
        margin-top: 76px;
    }

    @media ${theme.media.tablet}{
        gap: 28px;
    }
`

const Statisticitem = styled.li`
    display: flex;
    flex-direction: column;
    &:not(:last-child){
        padding-right: 28px;
        border-right: 1px solid ${theme.colors.accent};
    }
`

const StatisticValue = styled.span`
    font-family: "Canela-medium", sans-serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 120%;
    color: ${theme.colors.accent};
    margin-bottom: 8px;
    span{
        color: ${theme.colors.font};
    }

    @media ${theme.media.tablet}{
        font-size: 31px;
    }
`

const StatisticTitle = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
`

export const S = {
    StyledMainContent,
    MainContnetTitle,
    MainContnetText,
    StyledMainContentButtons,
    MainContentLink,
    Statistic,
    Statisticitem,
    StatisticValue,
    StatisticTitle
}