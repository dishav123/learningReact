import userContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
    const {user}=useContext(userContext);

    if (!user) return <p>Please! Login</p>


    return <div>Welcome {user.username}</div>

}

export default Profile
;