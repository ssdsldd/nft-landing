import React from "react";
import styled from "styled-components";
import { theme } from "../../../style/Theme";
import { MainContentButtons } from "./MainContentButtons";
import { MainContentStatistic } from "./MainContentStatistic";

export const MainContent: React.FC = () => {
    return(
        <StyledMainContent>
            <MainContnetTitle>
              Discover and Collect The Best NFTs <span> Digital Art.</span>
            </MainContnetTitle>
            <MainContnetText>
                Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!
            </MainContnetText>
            <MainContentButtons/>
            <MainContentStatistic/>
        </StyledMainContent>
    )
}

const StyledMainContent = styled.div`
    max-width: 544px;
`

const MainContnetTitle = styled.h1`
    font-family: "Canela-medium", sans-serif;
    font-size: 64px;
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 20px;
    span{
        color: ${theme.colors.accent};
    }
`

const MainContnetText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 40px;
`


