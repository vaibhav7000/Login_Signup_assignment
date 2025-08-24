import type { HTMLAttributes } from "react";
import type React from "react";
import merge from "../utils/styles";

interface ContainerProps extends React.PropsWithChildren, HTMLAttributes<HTMLDivElement> {};

const Container = (props: ContainerProps) => {
    return (
        <div className={merge(props.className)}>
            {props.children}
        </div>
    )
}

export default Container;