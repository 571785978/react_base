import React from "react";
import {getParkIcon,ParkIconType,ParkTheme} from "@/components/icon/Icon";

interface Props {
    icon:ParkIconType,
    iconSize?: string,
    iconTheme?:ParkTheme
    onClick?: () => void,
    title?:string
}

const AuthSocialButton:React.FC<Props> = ({
    icon,
    iconSize = "20",
    iconTheme = "filled",
    onClick,
    title
}) =>{
    return (
        <button type="button"
                onClick={onClick}
                title={title}
                className="
                inline-flex
                w-4
                justify-center
                rounded-md
                bg-white
                dark:bg-blackOpt80
                dark
                px-4
                py-2
                text-gray-500
                shadow-sm
                ring-1
                ring-inset
                ring-gray-300
                hover:bg-gray-50
                focus:outline-offset-0">
            {getParkIcon(icon,iconSize,iconTheme)}
        </button>
    )
}


export default AuthSocialButton;