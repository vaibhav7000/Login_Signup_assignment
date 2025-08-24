import type { HTMLAttributes } from "react";
import merge from "../utils/styles";

interface SecondaryHeadingProps extends HTMLAttributes<HTMLDivElement> {
    title: string
}

const SecondaryHeading = (props: SecondaryHeadingProps) => {
    const {title, className} = props;

    return (
        <div className={`${merge("text-white tracking-wide xl:text-2xl font-light", className)}`}>
            {title}
        </div>
    )
}

export default SecondaryHeading