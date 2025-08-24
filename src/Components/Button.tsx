import type React from "react"
import type { ButtonHTMLAttributes } from "react"
import merge from "../utils/styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{};

const Button: React.FC<ButtonProps> = (props) => {

    return (
        <button onClick={props.onClick}  className={merge("py-1 px-4 text-center text-white uppercase text-sm bg-custom-green ", props.className)}>
            {props.children}
        </button>
    )
}

export default Button;