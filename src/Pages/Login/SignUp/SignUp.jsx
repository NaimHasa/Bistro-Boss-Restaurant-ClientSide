import { Link, useNavigate } from "react-router-dom";
import signImg from '../../../assets/others/authentication2.png';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, password: data.password }
                        fetch('https://bistro-boss-restaurant-server-side.vercel.app/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();

                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                }
                            })

                        navigate('/');
                    })
                    .catch(error => console.error(error))

            })

    };
    return (
        <>
            <Helmet>
                <title>Bistro Boss || SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex ">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold text-center">SignUp now! </h1>
                        <img className='mt-4' src={signImg} alt="" />
                    </div>
                    <div className="card w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true, minLength: 8, maxLength: 20 })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Password Must be 8 characters or max 20.</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-2">
                                <input className="btn btn-primary" type="submit" value="signup" />
                            </div>
                        </form>
                        <p className='py-2 text-center text-teal-600'><small>Already have a Square account? <Link to='/login'>Log in.</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;