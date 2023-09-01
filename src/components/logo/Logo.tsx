import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";
import { S } from "./Logo-Styles";

export const Logo: React.FC = () => {
    return(
        <S.LogoLink>
            <FlexWrapper>
                    <Icon iconId="logo"/>
                    <S.LogoText>Creative<S.LogoSubtext>art</S.LogoSubtext></S.LogoText>
            </FlexWrapper>
        </S.LogoLink>
    )
}
