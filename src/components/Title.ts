import styled from "styled-components";
import { theme } from "../style/Theme";

export const Title = styled.h2`
    color: ${theme.colors.font};
    font-family: "Canela-medium", sans-serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 120%;

    @media ${theme.media.tablet}{
        font-size: 31px;
        width: 343px;
        margin: 0 auto;
        text-align: center;
    }
`