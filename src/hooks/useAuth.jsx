import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"



const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
}
export default useAuth;



// import { useContext } from "react"
// import { AuthContext } from "../providers/AuthProvider"

// const useAuth = () => {
//     const auth = useContext(AuthContext);
//     return auth;
// }

// export default useAuth;