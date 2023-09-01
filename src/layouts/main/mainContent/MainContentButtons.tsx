import React from "react";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./MainContent-Styles";

export const MainContentButtons: React.FC = () => {
    return(
        <S.StyledMainContentButtons as={FlexWrapper} gap="36px" align = 'center'>
            <Button>Explore Now</Button>
            <S.MainContentLink>Learn more</S.MainContentLink>
        </S.StyledMainContentButtons>
    )
}

