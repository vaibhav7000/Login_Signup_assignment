import Container from "../Wrappers/Container";
import HeadingWrapper from "../Wrappers/HeadingWrapper";
import PrimaryHeading from "../Components/PrimaryHeading";
import { useCallback, useRef, useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigate } from "react-router";
import generateToast from "../utils/Toasts";
import { signupSchema, type SignUpSchemaType } from "../utils/Validators/zod";
import Text from "../Components/Text";

const Signup = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const mobileRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmRef = useRef<HTMLInputElement>(null);

    const [nameError, setNameError] = useState<string[]>([]);
    const [usernameError, setUsernameError] = useState<string[]>([]);
    const [emailError, setEmailError] = useState<string[]>([]);
    const [mobileError, setMobileError] = useState<string[]>([]);
    const [passwordError, setPasswordError] = useState<string[]>([]);
    const [confirmError, setConfirmError] = useState<string[]>([]);

    const navigate = useNavigate();

    const signUpAction = useCallback(() => {
        if (!nameRef.current || !usernameRef.current || !emailRef.current || !mobileRef.current || !passwordRef.current || !confirmRef.current) {
            generateToast("Something up with the frontend", "error");
            return;
        }

        const name = nameRef.current.value;
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const mobile = mobileRef.current.value;
        const password = passwordRef.current.value;
        const confirm = confirmRef.current.value;

        console.log(mobile, password, confirm)

        const result = signupSchema.safeParse({
            name, username, email, mobile, password, confirm
        })

        if (!result.success) {
            console.log(result.error.issues);
            result.error.issues.forEach(issue => {
                const key = issue["path"] as [keyof SignUpSchemaType];
                const value = key[0];

                switch (value) {
                    case "name":
                        setNameError(prev => [issue["message"]]);
                        break;
                    case "username":
                        setUsernameError(prev => [issue["message"]]);
                        break;
                    case "email":
                        setEmailError(prev => [issue["message"]]);
                        break;
                    case "mobile":
                        setMobileError(prev => [issue["message"]]);
                        break;
                    case "password":
                        setPasswordError(prev => [issue["message"]]);
                        break;
                    case "confirm":
                        setConfirmError(prev => [issue["message"]]);
                        break;
                }

            })
            return;
        }

        generateToast("Signup Successfull", "success");

        navigate("/login", {
            replace: true
        })


    }, []);

    return (
        <Container className="flex flex-col gap-y-32">
            <HeadingWrapper className="flex flex-col items-center gap-y-3">
                <PrimaryHeading className="font-normal text-3xl tracking-wider" title="Create new Account" />
            </HeadingWrapper>

            <Container className="flex flex-col gap-y-10 w-3/4 mx-auto">
                <Container className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 w-full">

                    <Container className="flex flex-col gap-y-2">
                        <Input onChange={() => setNameError([])} ref={nameRef} id="name" className="px-4 pt-4 text-xl h-16 border-b-gray-400 outline-0 w-full peer focus:border-b-custom-green border-b-2" label={{
                            className: "absolute capitalize text-sm text-gray-500 left-4 top-0 font-light peer-placeholder-shown:top-[25%] peer-placeholder-shown:text-xl  peer-focus:text-sm peer-focus:top-0 peer-focus:text-custom-green peer-focus:font-medium transition-all duration-300 uppercase",
                        }} containerProps={{
                            className: "relative"
                        }} labelTitle="Name" placeholder="" />


                        {nameError.length ? <div>
                            {nameError.map(issue => {
                                return (
                                    <Text className="text-sm text-red-500">
                                        {issue}
                                    </Text>
                                )
                            })}
                        </div> : null
                        }
                    </Container>

                    <Container className="flex flex-col gap-y-2">
                        <Input onChange={() => setUsernameError([])} ref={usernameRef} id="username" className="px-4 pt-4 text-xl h-16 border-b-gray-400 outline-0 w-full peer focus:border-b-custom-green border-b-2" label={{
                            className: "absolute capitalize text-sm text-gray-500 left-4 top-0 font-light peer-placeholder-shown:top-[25%] peer-placeholder-shown:text-xl  peer-focus:text-sm peer-focus:top-0 peer-focus:text-custom-green peer-focus:font-medium transition-all duration-300 uppercase",
                        }} containerProps={{
                            className: "relative"
                        }} labelTitle="Username" placeholder="" />


                        {usernameError.length ? <div>
                            {usernameError.map(issue => {
                                return (
                                    <Text className="text-sm text-red-500">
                                        {issue}
                                    </Text>
                                )
                            })}
                        </div> : null
                        }
                    </Container>

                    <Container className="flex flex-col gap-y-2">
                        <Input onChange={() => setEmailError([])} ref={emailRef} id="email" className="px-4 pt-4 text-xl h-16 border-b-gray-400 outline-0 w-full peer focus:border-b-custom-green border-b-2" label={{
                            className: "absolute capitalize text-sm text-gray-500 left-4 top-0 font-light peer-placeholder-shown:top-[25%] peer-placeholder-shown:text-xl  peer-focus:text-sm peer-focus:top-0 peer-focus:text-custom-green peer-focus:font-medium transition-all duration-300 uppercase",
                        }} containerProps={{
                            className: "relative"
                        }} labelTitle="Email" placeholder="" />


                        {emailError.length ? <div>
                            {emailError.map(issue => {
                                return (
                                    <Text className="text-sm text-red-500">
                                        {issue}
                                    </Text>
                                )
                            })}
                        </div> : null
                        }
                    </Container>

                    <Container className="flex flex-col gap-y-2">
                        <Input onChange={() => setMobileError([])} ref={mobileRef} id="mobile" className="px-4 pt-4 text-xl h-16 border-b-gray-400 outline-0 w-full peer focus:border-b-custom-green border-b-2" label={{
                            className: "absolute capitalize text-sm text-gray-500 left-4 top-0 font-light peer-placeholder-shown:top-[25%] peer-placeholder-shown:text-xl  peer-focus:text-sm peer-focus:top-0 peer-focus:text-custom-green peer-focus:font-medium transition-all duration-300 uppercase",
                        }} containerProps={{
                            className: "relative"
                        }} labelTitle="Mobile" placeholder="" />


                        {mobileError.length ? <div>
                            {mobileError.map(issue => {
                                return (
                                    <Text className="text-sm text-red-500">
                                        {issue}
                                    </Text>
                                )
                            })}
                        </div> : null
                        }
                    </Container>

                    <Container className="flex flex-col gap-y-2">
                        <Input onChange={() => setPasswordError([])} ref={passwordRef} id="password" className="px-4 pt-4 text-xl h-16 border-b-gray-400 outline-0 w-full peer focus:border-b-custom-green border-b-2" label={{
                            className: "absolute capitalize text-sm text-gray-500 left-4 top-0 font-light peer-placeholder-shown:top-[25%] peer-placeholder-shown:text-xl  peer-focus:text-sm peer-focus:top-0 peer-focus:text-custom-green peer-focus:font-medium transition-all duration-300 uppercase",
                        }} containerProps={{
                            className: "relative"
                        }} labelTitle="New Password" placeholder="" />

                        {passwordError.length ? <div>
                            {passwordError.map(issue => {
                                return (
                                    <Text className="text-sm text-red-500">
                                        {issue}
                                    </Text>
                                )
                            })}
                        </div> : null
                        }
                    </Container>

                    <Container className="flex flex-col gap-y-2">
                        <Input onChange={() => setConfirmError([])} ref={confirmRef} id="confirm" className="px-4 pt-4 text-xl h-16 border-b-gray-400 outline-0 w-full peer focus:border-b-custom-green border-b-2" label={{
                            className: "absolute capitalize text-sm text-gray-500 left-4 top-0 font-light peer-placeholder-shown:top-[25%] peer-placeholder-shown:text-xl  peer-focus:text-sm peer-focus:top-0 peer-focus:text-custom-green peer-focus:font-medium transition-all duration-300 uppercase",
                        }} containerProps={{
                            className: "relative"
                        }} labelTitle="Confirm New Password" placeholder="" />
                        {confirmError.length ? <div>
                            {confirmError.map(issue => {
                                return (
                                    <Text className="text-sm text-red-500">
                                        {issue}
                                    </Text>
                                )
                            })}
                        </div> : null
                        }
                    </Container>
                </Container>

                <Button onClick={signUpAction} className="cursor-pointer uppercase self-end py-4 px-16 rounded-xl text-lg">
                    Sign Up
                </Button>

            </Container>

        </Container>
    )
}


export default Signup;