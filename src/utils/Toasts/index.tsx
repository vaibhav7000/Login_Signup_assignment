import { toast } from "react-toastify";

type ToastType = "default" | "success" | "error" | "error" | "info"

const generateToast = (message: string, type: ToastType = "default") => {
    toast(message, {
        type
    })
}


export default generateToast;