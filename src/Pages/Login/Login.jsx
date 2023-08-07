import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication2.png';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })

    }
    const handleBulidedCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex ">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold text-center">Login now! </h1>
                    <img className='mt-4' src={loginImg} alt="" />
                </div>
                <div className="card w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <input ref={captchaRef} type="text" name='captcha' placeholder="Type the text above" className="input input-bordered" required />
                            <LoadCanvasTemplate />
                            <button onClick={handleBulidedCaptcha} className="btn btn-outline btn-xs mt-2">Valided</button>

                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='py-8 text-center text-teal-600'><small>New Here? <Link to='/signup'>Create an account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;