import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'flex-start'};
    flex-wrap:${props => props.wrap || 'nowrap'};
`