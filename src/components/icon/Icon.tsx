import {Sun,Moon} from "lucide-react";
import {Wechat,Tiktok,Alipay} from '@icon-park/react'
import {Theme} from "@icon-park/react/lib/runtime";

const ParkIcons = {
    wechat:Wechat,
    tiktok:Tiktok,
    alipay:Alipay
}
export const LucidIcons = {
    sun:Sun,
    moon:Moon,
}

export type ParkIconType = "wechat" | "alipay" | "tiktok"
export type ParkTheme = Theme;
export const getParkIcon = (type: ParkIconType,size:string,theme:ParkTheme) => {
    switch (type) {
        case "wechat":
            return <ParkIcons.wechat theme={theme} size={size} />
        case "alipay":
            return <ParkIcons.alipay theme={theme} size={size}  />
        case "tiktok":
            return <ParkIcons.tiktok theme={theme} size={size}  />
    }
}

export type LucidIconType = "sun" | "moon"

export const getLucidIcon = (type: LucidIconType,size:string) => {
    switch (type) {
        case "sun":
            return <LucidIcons.sun size={size} />
        case "moon":
            return <LucidIcons.moon size={size}  />
    }
}