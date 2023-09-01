import styled from "styled-components"
import { theme } from "../../style/Theme"

const StyledMain = styled.section`
    
`

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-template-rows: 1fr, 1fr;
    justify-content: space-between;

    @media ${theme.media.desktop}{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 48px;
    }
`

export const S = {
    StyledMain,
    MainWrapper
}