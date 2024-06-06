import {createContext, useContext} from "react";

export const UseTheme = () => {
    const context = useContext(ThemeProviderContext);
    if(context === undefined) {
        throw new Error("useTheme must be used within ThemeProvider")
    }
    return context
}

export type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
    theme: Theme;
    setTheme: (newTheme: Theme) => void;
}

const initialState: ThemeProviderState = {
    theme:  "system",
    setTheme: () => null
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);