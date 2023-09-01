import React from "react";
import { Container } from "../../components/Container";
import { CommunityContent } from "./CommunityContent";
import { CommunityPhoto } from "./CommunityPhoto";
import { S } from "./Community-Styles";

export const Community: React.FC = () => {
    return(
        <S.StyledCommunity>
            <Container>
                <S.StyledCommunityFlex justify="space-between" align="center" wrap="wrap" gap="48px">
                    <CommunityContent/>
                    <CommunityPhoto/>
                </S.StyledCommunityFlex>
            </Container>
        </S.StyledCommunity>
    )
}

