import {createContext, useContext} from "react";

type PopupState = {
    show: Boolean;
    isShown: (show:Boolean) => void;
}

const InitState: PopupState = {
    show: false,
    isShown: () => null
}
export const PopupStateContext = createContext<PopupState>(InitState);
export const UsePopup = () => {

    const context = useContext(PopupStateContext);
    if(context === undefined) {
        throw new Error("usePopup must be used within PopupProvider")
    }
    return context
}


