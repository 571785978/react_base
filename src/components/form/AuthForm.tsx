import {useState, FC, useCallback} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import { getIcon } from "../icon/Icon";

type Variant = 'LOGIN' | 'REGISTER'
interface Pops {

}

const AuthForm:FC<Pops> = ({}:Pops) => {

    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading,setIsLoading] = useState<Boolean>(false);

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN'){
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN')
        }
    },[variant]);

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:"",
            password:"",
            email:""
        }
    });

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        debugger;
        setIsLoading(true);

        if(variant === 'REGISTER'){

        }else{

        }
    }

 
    return (
        <div
            className="mt-6 sm:max-auto sm:w-full sm:max-w-md"
        >
            <div className="px px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input id="email" label="邮箱" type="email" errors={errors} register={register}/>
                    )}
                    <Input id="user" label="用户名" placeholder="请输入用户名" errors={errors} register={register}/>
                    <Input id="password" label="密码" placeholder="请输入密码" type="password" errors={errors} register={register}/>
                    <Button
                        disabled={false}
                        fullWidth
                        type="submit"
                    >
                        {isLoading && getIcon('LoadingTwo' ,'18','filled','mr-2 animate-spin')}
                        {variant === 'LOGIN' ? '登录' : '注册'}
                    </Button>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="text-blue-500 cursor-pointer bg-light dark:bg-dark w-12 text-center" onClick={toggleVariant}>
                            {variant === 'LOGIN' ? '去注册' : '去登录'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AuthForm;