import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../style/Theme";

const StatisticItems = [
    {
        value: "8.9",
        title: "Art work",
    },

    {
        value: "65",
        title: "Artist",
    },

    {
        value: "87",
        title: "Collection",
    },

]

export const MainContentStatistic: React.FC = () => {
    return(
        <Statistic as={FlexWrapper} gap="94px">
                {StatisticItems.map((item,index) => {
                    return(
                        <Statisticitem>
                            <StatisticValue>
                                {item.value}
                                <span>K</span>
                            </StatisticValue>
                            <StatisticTitle>{item.title}</StatisticTitle>
                        </Statisticitem>
                    )
                })}
        </Statistic>
    )
}

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