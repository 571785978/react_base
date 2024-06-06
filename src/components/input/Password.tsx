import React from "react";

interface Pops {
    label?          :   string,
    id?             :   string,
    required?       :   boolean,
    // error?       :   FieldErrors,
    disabled?       :   boolean,
    placeholder?    :   string
}

const Input:React.FC<Pops> = ({
    label,
    id,
    required,
    // error,
    disabled,
    placeholder
}) => {
    return (
        <div className="w-80 h-14 rounded-2xl bg-slate-50 p-1 px-2 ">
            <label htmlFor={id} className="font-mono text-sm w-12">{label}</label>
            <div className="m-2 inline-block">
                <input 
                    id={id}
                    type='password'
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="
                    w-60 
                    rounded-xl 
                    px-2 
                    bg-slate-200 
                    h-8 
                    border
                    border-transparent
                    focus:outline-none
                    focus:ring-2
                    focus:ring-purple-600
                    hover:ring-purple-400
                    hover:ring-1
                    hover:transition-all
                    focus:transition-all"
                    />
            </div>
        </div>
        
    );
}

export default Input;