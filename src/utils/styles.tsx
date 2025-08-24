import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const merge = (...arr: ClassValue[]): string => {
    return twMerge(clsx(...arr));
}

export default merge;