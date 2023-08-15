import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const logged = result.user;
                console.log(logged);
                const loggedUser = { name: logged.displayName, email: logged.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })

            });


    }

    return (
        <div>
            <div className="divider"></div>
            <div className="text-center p-4 flex gap-8 items-center justify-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FcGoogle></FcGoogle>
                </button>
                <button className="btn btn-circle btn-outline bg-[#4267B2] text-white">
                    <strong>f</strong>
                </button>
                <button className="btn btn-circle btn-outline">
                    <strong>X</strong>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;