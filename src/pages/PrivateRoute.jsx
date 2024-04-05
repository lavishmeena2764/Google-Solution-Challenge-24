import {Outlet,Navigate} from "react-router-dom";

function PrivateRoute() {
    const login=localStorage.getItem("uid")?true:false;
    if(login){
        return (
            <>
                <Outlet/>
            </>
        )
    }else{
        return <Navigate to={"/login"}/>
    }
}

export default PrivateRoute
