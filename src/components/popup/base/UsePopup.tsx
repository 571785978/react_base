import React,{createContext} from "react";
import { useContext } from "react";

type PopupState = {
    show: Boolean;
    isShown: (show:Boolean) => void;
}
export type PopupPops = {
    children: React.ReactNode;
    initState?: Boolean,
}

const InitState: PopupState = {
    show: false,
    isShown: () => null
}

export const UsePopup = () => {
    const context = useContext(PopupStateContext);
    if(context === undefined) {
        throw new Error("usePopup must be used within ThemeProvider")
    }
    return context
}

export const PopupStateContext = createContext<PopupState>(InitState);
