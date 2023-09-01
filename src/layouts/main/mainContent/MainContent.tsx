import React from "react";
import { MainContentButtons } from "./MainContentButtons";
import { S } from "./MainContent-Styles";

export const MainContent: React.FC = () => {
    return(
        <S.StyledMainContent>
            <S.MainContnetTitle>
              Discover and <br />Collect The Best <br />NFTs <span> Digital Art.</span>
            </S.MainContnetTitle>
            <S.MainContnetText>
                Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!
            </S.MainContnetText>
            <MainContentButtons/>
        </S.StyledMainContent>
    )
}



