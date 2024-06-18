import React, { useState } from 'react'
import { PopupStateContext } from "@/components/popup/base/UsePopup";


interface IProps {
    state?: Boolean,
    children: React.ReactNode,
}

export const PopupStateProvider = ({
    state = false,
    children
}: IProps) => {
    if (!children) throw new Error("children is required")
    const [show, isShown] = useState<Boolean>(state);
    const root = window.document.documentElement
    const value = {
        show:show,
        isShown:(val:Boolean)=>{
            isShown(val);
        }
    }
    return (
        <PopupStateContext.Provider value={value}>
            {children}
        </PopupStateContext.Provider>
    );

}
