import React from "react";
import sprite from "../../assets/sprite.svg";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewbox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return(
        <svg width={props.width || '28px'} 
             height={props.height || '28px'} 
             viewBox={props.viewbox || "0 0 28 28"}>
                 <use xlinkHref={`${sprite}#${props.iconId}`} />
        </svg>
    )
}