import React from "react";
import styled from "styled-components";
import artistImg1 from "../../assets/popular/popular1.webp";
import artistImg2 from "../../assets/popular/popular2.webp";
import artistImg3 from "../../assets/popular/popular3.webp";
import artistImg4 from "../../assets/popular/popular4.webp";
import artistImg5 from "../../assets/popular/popular5.webp";
import ownerImg1 from "../../assets/popular/owner1.webp";
import ownerImg2 from "../../assets/popular/owner2.webp";
import ownerImg3 from "../../assets/popular/owner3.webp";
import ownerImg4 from "../../assets/popular/owner4.webp";
import ownerImg5 from "../../assets/popular/owner5.webp";
import { ArtistsCard } from "./ArtistCard";


const artistsItems = [
    {
        srcBg: artistImg1,
        srcProfile: ownerImg1,
        name: "Osvaldo Percy"
    },

    {
        srcBg: artistImg2,
        srcProfile: ownerImg2,
        name: "Ranson Sqiure"
    },
    

    {
        srcBg: artistImg3,
        srcProfile: ownerImg3,
        name: "Cristio leo"
    },
    

    {
        srcBg: artistImg4,
        srcProfile: ownerImg4,
        name: "Sebastian waltan"
    },
    
    {
        srcBg: artistImg5,
        srcProfile: ownerImg5,
        name: "Abraham Zack"
    },
]

export const ArtistsGrid: React.FC = () => {
    return(
        <StyledAGrid>
            {artistsItems.map((item, index) => {
                return (
                    <ArtistsCard    srcBg={item.srcBg}
                                    srcProfile={item.srcProfile}
                                    name={item.name}
                                    key={index}/>
                )
            })}
        </StyledAGrid>
    )
}

const StyledAGrid = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 300px 80px 410px 410px;
    grid-template-rows: repeat(2, 1fr);
`