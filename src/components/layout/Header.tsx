import React from 'react'
import ThemeToggle from "@/components/config/ThemeToggle";
import Login from "@/views/example/login/Login";

const Header:React.FC = () => {


    return (
        <div className="w-full h-full flex justify-end gap-2 items-center border-b-2">
            <Login />
            <ThemeToggle/>
        </div>
    )

}



export default Header;
