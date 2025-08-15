import { useParams } from "react-router-dom";

function User() {
    const {userId}=useParams()
    return ( 
        <div>
            <h1 className="bg-amber-700 text-2xl text-white text-center p-4">User:{userId}</h1>
        </div>
        
     );
}

export default User;