import { theme } from "./Theme"

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    Fmax?: number,
    Fmin?: number,
}

export const font = (props: FontPropsType) => `
    font-family: ${props.family || 'Inter'};
    font-weight: ${props.weight || 400};
    color: ${props.color || theme.colors.font};
    font-size: clamp(${props.Fmin}px, calc(${props.Fmin}px + (${props.Fmax} - ${props.Fmin}) * ((100vw - 375px) / (1512 - 375))), ${props.Fmax}px);
`