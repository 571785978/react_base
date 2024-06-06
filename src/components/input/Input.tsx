import React from "react";
import clsx from "clsx";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form"

type LabelPlace = 'left' | 'top';

interface Pops {
    type?           :   string,
    label?          :   string,
    id              :   string,
    required?       :   boolean,
    // error?       :   FieldErrors,
    disabled?       :   boolean,
    placeholder?    :   string
    labelPosition?  :   LabelPlace,
    register        :   UseFormRegister<FieldValues>,
    errors          :   FieldErrors
}


const Input:React.FC<Pops> = ({
    type = 'text',
    label,
    id,
    required = true,
    // error,
    disabled,
    placeholder,
    labelPosition='left',
    register,
    errors
}) => {
    return (
        <div className="h-16 rounded-2xl border-2 flex justify-center w-full">
            <div className="m-2 flex justify-center items-center w-full">
                <label htmlFor={id} className={clsx(
                    `text-sm font-medium leading-6 text-green-900 text-justify-last w-16 mr-4 inline-block`,
                    labelPosition === 'top' && 'block w-full',
                    labelPosition === 'left' && 'w-12 inline-block'
                )}>{label}</label>
                <input
                        id={id}
                        type={type}
                        {...register(id,{required})}
                        placeholder={null === placeholder ? null == label ? undefined : `请输入${label}` : placeholder}
                        disabled={disabled}
                        className={clsx(
                        `w-64 
                        rounded-xl 
                        px-2
                        bg-slate-200
                        dark:bg-opacity-10
                        h-12
                        border
                        border-transparent
                        focus:outline-none
                        focus:ring-2
                        focus:ring-purple-600
                        hover:ring-purple-400
                        hover:ring-1
                        hover:transition-all
                        focus:transition-all`,
                        errors[id] && 'focus:ring-rose-500',
                        disabled && 'opacity-50 cursor-default'
                    )}
                    />
            </div>
        </div>
        
    );
}

export default Input;