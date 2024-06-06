import React, {useState} from "react";
import { PopupStateContext } from "@/components/popup/base/UsePopup";

type PopupPops = {
    children: React.ReactNode;
    initState?: Boolean,
    consumer:Function
}

export const PopupProvider = ({children,initState=false,consumer}:PopupPops) => {
    const [show,isShown] = useState<Boolean>(initState);
    const value = {
        show:show,
        isShown:(show:Boolean) => {
            isShown(show)
        }
    }
    return (
        <PopupStateContext.Provider value={value}>
            <PopupStateContext.Consumer>
                {(val) => (
                    consumer(val.isShown)
                )}
            </PopupStateContext.Consumer>
            {value.show && children}
        </PopupStateContext.Provider>
    );
};
