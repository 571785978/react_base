import {BasicPopup} from "@/components/popup/BasicPopup";
import AuthForm from "@/components/form/AuthForm.tsx";

const ToolBar = () => {
    return (
        <div
            className="h-full flex justify-center items-center hover:cursor-pointer hover:underline hover:text-blue-300">
            <BasicPopup defaultWidth={600} defaultHeight={400} state={true} consumer={LoginControl}>
                <div className="h-full flex justify-center items-center">
                    <AuthForm />
                </div>
            </BasicPopup>
        </div>
    )
}

const LoginControl = (isShown:Function) =>{
    let userName:String = localStorage.getItem("user") || '登录'
    return (
        <div onClick={() =>isShown(true)}>
            <span className="text-sm">{userName}</span>
        </div>
    );
}
export default ToolBar;