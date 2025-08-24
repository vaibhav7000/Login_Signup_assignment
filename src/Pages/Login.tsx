import { useCallback, useRef, useState } from "react";
import IconWrapper from "../Components/IconWrapper";
import Input from "../Components/Input";
import PrimaryHeading from "../Components/PrimaryHeading";
import SecondaryHeading from "../Components/SecondaryHeading";
import Container from "../Wrappers/Container";
import HeadingWrapper from "../Wrappers/HeadingWrapper";
import { Eye, EyeClosed } from "lucide-react";
import Button from "../Components/Button";
import Text from "../Components/Text";
import { useNavigate } from "react-router";
import { loginSchema, type LoginSchemaType } from "../utils/Validators/zod";
import generateToast from "../utils/Toasts";

const Login = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const loginAction = useCallback(() => {
        if(!usernameRef.current || !passwordRef.current) {
            return;
        }

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const payload: LoginSchemaType = {
            username, password
        }

        const result = loginSchema.safeParse(payload);

        if(!result.success) {
            result.error.issues.forEach(issue => {
                generateToast(issue.message, "error")
            })
            return;
        }

        generateToast("Login Successfully", "success");

    }, []);

    return (
        <Container className="flex flex-col gap-y-32">

            <HeadingWrapper className="flex flex-col items-center gap-y-3">
                <PrimaryHeading className="font-normal xl:text-5xl tracking-wider" title="Login" />
                <SecondaryHeading title="Sign in to continue" className="font-thin tracking-widest" />
            </HeadingWrapper>

            <div className="flex flex-col items-center gap-y-9">

                <Input ref={usernameRef} id="username" className="px-4 pt-4 text-xl h-16 border-b-gray-400 outline-0 w-full peer focus:border-b-custom-green border-b-2" label={{
                    className: "absolute capitalize text-sm text-gray-500 left-4 top-0 font-light peer-placeholder-shown:top-[25%] peer-placeholder-shown:text-xl  peer-focus:text-sm peer-focus:top-0 peer-focus:text-custom-green peer-focus:font-medium transition-all duration-300",
                }} containerProps={{
                    className: "flex w-1/3 relative"
                }} labelTitle="Username" placeholder="" />

                <Input type={showPassword ? "text" : "password"} ref={passwordRef} id="password" className="px-4 pt-4 text-xl h-16 border-b-gray-400 outline-0 w-full peer focus:border-b-custom-green border-b-2" label={{
                    className: "absolute capitalize text-sm text-gray-500 left-4 top-0 font-light peer-placeholder-shown:top-[25%] peer-placeholder-shown:text-xl  peer-focus:text-sm peer-focus:top-0 peer-focus:text-custom-green peer-focus:font-medium transition-all duration-300",
                }} containerProps={{
                    className: "flex w-1/3 relative"
                }} labelTitle="Password" placeholder="" Icon={<IconWrapper onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                    setShowPassword(val => !val);
                }} Component={showPassword ? EyeClosed : Eye} Componentprops={{
                    className: "w-6 h-6 absolute right-0 top-[50%] text-gray-500 cursor-pointer"
                }} />} />

                <Container className="flex flex-col gap-y-4 items-center">
                    <Button onClick={loginAction} className="px-10 text-base font-light rounded-md cursor-pointer">
                        Login
                    </Button>

                    <Container className="flex flex-row gap-x-1 font-normal">
                        <Text>Don't have Account?</Text>
                        <Text className="underline cursor-pointer" onClick={() => {
                            navigate("/register", {
                                replace: false
                            })
                        }}>SignUp</Text>
                    </Container>
                </Container>
            </div>
        </Container>
    )
}


export default Login;