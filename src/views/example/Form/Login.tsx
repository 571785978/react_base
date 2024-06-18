import { BasicPopup } from "@/components/popup/BasicPopup";
import AuthForm from "@/components/form/AuthForm.tsx";
import { getIcon } from "@/components/icon/Icon";
import { UsePopup } from "@/components/popup/base/UsePopup";

const ToolBar = () => {
    const defaultTitle = '登录';
    let userName: String = localStorage.getItem("user") || defaultTitle
    const {isShown} = UsePopup();
    return (
        <div
            className="h-full flex justify-center items-center hover:cursor-pointer hover:underline hover:text-blue-300">
            <div onClick={() => isShown(true)}>
                {
                    userName === defaultTitle ?
                        getIcon("Login", "18", "filled", "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-white text-black")
                        :
                        getIcon("Logout", "18", "filled", "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black")
                }
            </div>
            <BasicPopup defaultWidth={600} defaultHeight={400} state={false}>
                <div className="h-full flex justify-center items-center">
                    <AuthForm />
                </div>
            </BasicPopup>
        </div>
    )
}

export default ToolBar;