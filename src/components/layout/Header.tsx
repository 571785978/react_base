import React from 'react'
import ThemeToggle from "@/components/config/ThemeToggle";
import ToolBar from "@/views/example/Form/Login";

const Header:React.FC = () => {


    return (
        <header className="sticky backgrop-blur transition-colors diration-500 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backgrop-blur:bg-white/60 dark:bg-transparent w-full h-12 flex justify-end gap-2 items-center border-solid border-y">
            <ToolBar />
            <ThemeToggle/>
        </header>
    )

}

export default Header;
