import type React from "react";
import type { HTMLAttributes } from "react";
import merge from "../utils/styles";

interface HeadingWrapperProps extends HTMLAttributes<HTMLDivElement>, React.PropsWithChildren {

}

const HeadingWrapper = (props: HeadingWrapperProps) => {
    const {children, className} = props;
    return (
        <div className={merge("bg-custom-green pt-6 pb-8", className)}>
            {children}
        </div>
    )
}

export default HeadingWrapper;