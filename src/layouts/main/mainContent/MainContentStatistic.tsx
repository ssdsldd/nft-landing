import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./MainContent-Styles";

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
        <S.Statistic as={FlexWrapper} gap="94px">
                {StatisticItems.map((item,index) => {
                    return(
                        <S.Statisticitem>
                            <S.StatisticValue>
                                {item.value}
                                <span>K</span>
                            </S.StatisticValue>
                            <S.StatisticTitle>{item.title}</S.StatisticTitle>
                        </S.Statisticitem>
                    )
                })}
        </S.Statistic>
    )
}