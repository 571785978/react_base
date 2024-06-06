import React from "react";
import clsx from "clsx";

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface ButtonProps {
    type ? : ButtonType
    fullWidth?:Boolean,
    children?: React.ReactNode,
    onClick?: () => void,
    secondary?:boolean,
    danger?:boolean,
    disabled?:boolean
}
const Button:React.FC<ButtonProps> = ({
    type = 'button',
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}:ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(
                `flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline dark:bg-opacity-20 dark:text-gray-500 focus-visible:outline-2 focus:outline-offset-2`,
                disabled && 'opacity-50 cursor-default',
                fullWidth && 'w-full',
                secondary ? 'text-gray-900' : 'text-white',
                danger && 'bg-rose=500 hover:bg-rose-600 focus-visible:outline-rose-600',
                !secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-bg-sky-600'
            )}
        >
            {children}
        </button>
    )
}

export default Button;