import {ReactNode} from "react";

interface ButtonProps {
    rounded?: boolean,
    outline?: boolean,
    type: ButtonType,
    children: ReactNode
}

function Button({rounded, outline, type, children}: ButtonProps) {


    return <button className={`px-3 py-1.5 text-white ${buttonColorFor(type)}`}>
        {children}
    </button>
}

export default Button

export const enum ButtonType {
    PRIMARY,
    SECONDARY,
    SUCCESS,
    WARNING,
    DANGER
}

function buttonColorFor(type: ButtonType): string {
    switch(type) {
        case ButtonType.SECONDARY:  return "border-black bg-gray-500"
        case ButtonType.SUCCESS:  return "border-green-600 bg-green-500"
        case ButtonType.WARNING:  return "border-red-600 bg-red-500"
        case ButtonType.DANGER:  return "border-yellow-600 bg-yellow-500"
        case ButtonType.PRIMARY: return "border-blue-600 bg-blue-500"
    }
}
