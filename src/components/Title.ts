import styled from "styled-components";
import { theme } from "../style/Theme";
import { font } from "../style/Font";

export const Title = styled.h2`
    line-height: 120%;
    white-space: nowrap;
    ${font({family: "'Canela-medium', sans-serif", weight: 500, Fmax: 48, Fmin: 31})}
    @media ${theme.media.tablet}{
        width: 343px;
        margin: 0 auto;
        text-align: center;
    }
`