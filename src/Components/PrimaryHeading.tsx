import type { HTMLAttributes } from "react";
import merge from "../utils/styles";

interface PrimaryHeadingProps extends HTMLAttributes<HTMLDivElement> {
    title: string
}

const PrimaryHeading = (props: PrimaryHeadingProps) => {
    const {title} = props;

    return (
        <div className={`${merge("text-white tracking-wide font-semibold", props.className)}`}>
            {title}
        </div>
    )
}

export default PrimaryHeading