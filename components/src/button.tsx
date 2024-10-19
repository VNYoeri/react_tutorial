import {ReactNode} from "react";

interface ButtonProps {
    rounded?: boolean,
    outline?: boolean,
    type: ButtonType,
    children: ReactNode,
    [x:string]:any
}

function Button({rounded, outline, type, children, ...rest}: ButtonProps) {

     return <button {...rest} className={`${buttonStyleFor(type, rounded, outline)}`}>
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

function buttonStyleFor(type: ButtonType, rounded?: boolean, outlined?: boolean): string {
    switch (type) {
        case ButtonType.PRIMARY:
            return new PrimaryButton(rounded, outlined).finalStyle()
        case ButtonType.SECONDARY:
            return new SecondaryButton(rounded, outlined).finalStyle()
        case ButtonType.SUCCESS:
            return new SuccessButton(rounded, outlined).finalStyle()
        case ButtonType.DANGER:
            return new DangerButton(rounded, outlined).finalStyle()
        case ButtonType.WARNING:
            return new WarningButton(rounded, outlined).finalStyle()
    }
}

abstract class ButtonClassStyle {
    rounded;
    outlined;
    defaultStyle = 'flex items-center px-3 py-1.5 border'
    textColor = 'text-white';
    outlineBgStyle = 'bg-white';
    abstract bgColor: string;
    abstract outlineTextColor: string;
    abstract borderColor: string;

    constructor(rounded: boolean = false, outlined: boolean = false) {
        this.rounded = rounded;
        this.outlined = outlined;
    }

    borderRadius() {
      return this.rounded ? 'rounded-full' : 'rounded-none';
    }

    finalStyle(): string {
        if (this.outlined) {
            return [this.defaultStyle, this.borderColor, this.outlineTextColor, this.outlineBgStyle, this.borderRadius()].join(' ')
        }

        return [this.defaultStyle, this.textColor, this.borderColor, this.bgColor, this.borderRadius()].join(' ')
    }
}

class PrimaryButton extends ButtonClassStyle {
    bgColor = 'bg-blue-500';
    outlineTextColor='text-blue-500';
    borderColor='border-blue-500';
}

class SecondaryButton extends ButtonClassStyle {
    bgColor = 'bg-gray-900';
    outlineTextColor='text-gray-900';
    borderColor='border-gray-900';
}

class SuccessButton extends ButtonClassStyle {
    bgColor = 'bg-green-500';
    outlineTextColor = 'text-green-500';
    borderColor='border-green-500';
}

class WarningButton extends ButtonClassStyle {
    bgColor = 'bg-amber-400';
    outlineTextColor='text-amber-400';
    borderColor='border-amber-400';
}

class DangerButton extends ButtonClassStyle {
    bgColor = 'bg-red-500';
    outlineTextColor='text-red-500';
    borderColor='border-red-500';
}
