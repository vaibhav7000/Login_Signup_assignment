import { Outlet } from "react-router";

const AuthWrapper = () => {
    return (
        <div className="min-h-screen min-w-screen">
            <Outlet />
        </div>
    )
}

export default AuthWrapper;