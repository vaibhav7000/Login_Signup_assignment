import Input from "../Components/Input";
import PrimaryHeading from "../Components/PrimaryHeading";
import SecondaryHeading from "../Components/SecondaryHeading";
import Container from "../Wrappers/Container";
import HeadingWrapper from "../Wrappers/HeadingWrapper";

const Login = () => {
    return (
        <Container className="flex flex-col gap-y-20">

            <HeadingWrapper className="flex flex-col items-center gap-y-3">
                <PrimaryHeading className="font-normal xl:text-5xl tracking-wider" title="Login" />
                <SecondaryHeading title="Sign in to continue" className="font-thin tracking-widest" />
            </HeadingWrapper>

            <div className="flex flex-col items-center">

                <Input id="username" className="px-4 pt-4 text-xl h-16 border-b-gray-400 outline-0 w-full peer focus:border-b-custom-green border-b-2"  label={{
                    className: "absolute capitalize text-sm text-gray-500 left-4 top-0 font-light peer-placeholder-shown:top-[25%] peer-placeholder-shown:text-xl  peer-focus:text-sm peer-focus:top-0 peer-focus:text-custom-green peer-focus:font-medium transition-all duration-300",
                }} containerProps={{
                    className: "flex w-1/3 relative"
                }} labelTitle="Username" placeholder="" />

            </div>
        </Container>
    )
}


export default Login;