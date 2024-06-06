import React, {useState} from 'react'
import {PopupProvider} from "@/components/popup/base/PopupProvider";

interface IProps {
    defaultWidth:Number,
    defaultHeight:Number,
    state?:Boolean,
    children:React.ReactNode,
    consumer:Function
}

export const BasicPopup:React.FC<IProps> = ({
    defaultWidth,
    defaultHeight,
    state,
    children,
    consumer
}:IProps) => {
    if(!defaultWidth || !defaultHeight) throw new Error("width and height is required") ;
    if(!children) throw new Error("children is required")
    if(!consumer) throw new Error("consumer is required")
    const [style] = useState({
        width:`${defaultWidth}px`,
        height:`${defaultHeight}px`
    });
    return (

        <PopupProvider initState={state} consumer={consumer}>
            <div className="fixed top-0 left-0 w-full h-full backdrop-blur-xs" onClick={e => {
                console.debug(e)
                e.stopPropagation()
            }}>
                <div
                    className="fixed justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
                     shadow-lg shadow-gray-500
                     rounded-lg
                    "
                    style={style}>
                    {children}
                </div>
            </div>
        </PopupProvider>
    )
}