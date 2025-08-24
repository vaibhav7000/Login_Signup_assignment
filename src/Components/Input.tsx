import React, { forwardRef, type HTMLAttributes, type InputHTMLAttributes, type LabelHTMLAttributes } from "react";
import merge from "../utils/styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    containerProps?: HTMLAttributes<HTMLDivElement>;
    labelTitle?: string;
    label?: LabelHTMLAttributes<HTMLLabelElement>;
    Icon?: React.JSX.Element
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {labelTitle, id} = props;
    return (
        <div className={merge("relative", props.containerProps?.className)}>
            <input type={props.type ?? "text"} onChange={props.onChange} onInput={props.onInput} onKeyDown={props.onKeyDown} className={merge("border-b border-b-gray-500 ", props.className)} placeholder={props.placeholder} id={props.id}  ref={ref}/>
            
            {labelTitle && <label className={merge(props.label?.className)} htmlFor={id}>{labelTitle}</label>}

            {props.Icon}
        </div>
    )
})

export default Input;