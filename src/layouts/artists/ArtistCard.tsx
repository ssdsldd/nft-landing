import React from "react";
import styled, { css } from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

type CardPropsType = {
    srcBg: string,
    srcProfile: string,
    name: string
}

export const ArtistsCard: React.FC<CardPropsType> = (props: CardPropsType) => {
    return(
        <Card>
            
        </Card>
    )
}

const Card = styled(FlexWrapper)`
    
`