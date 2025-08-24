import type React from "react";
import type { HTMLAttributes } from "react";
import merge from "../utils/styles";

interface TextProps extends HTMLAttributes<HTMLDivElement> {};

const Text: React.FC<TextProps> = (props) => {

    return (
        <div onClick={props.onClick} className={merge("text-black",props.className)}>
            {props.children}
        </div>
    )
}

export default Text;