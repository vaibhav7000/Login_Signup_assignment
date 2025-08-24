import type { HTMLAttributes, SVGAttributes } from "react";
import type React from "react";
import merge from "../utils/styles";

interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
    Component: React.ComponentType<SVGAttributes<SVGElement>>;
    Componentprops?: SVGAttributes<SVGElement>;
}

const IconWrapper: React.FC<IconWrapperProps> = (props) => {
    const {Component, Componentprops}  = props;

    return (
        <div className={merge(props.className)} onClick={props.onClick}>
            <Component className={merge(Componentprops?.className)} />
        </div>
    )
}

export default IconWrapper;