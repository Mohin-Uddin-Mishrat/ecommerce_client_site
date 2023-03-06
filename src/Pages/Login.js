import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import useToken from '../Hook/useToken';

const Login = () => {

    const navigate =useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {googleSighnIn, signIn} = useContext(AuthContext);
    const [loginEmail, setLoginEmail] = useState('');
    const [token]=useToken(loginEmail);
    const googleLogin =()=>{
        googleSighnIn()
        .then(result =>{
            const user = result.user;

            console.log(user);
        })
    }

    const onSubmit = (data) => {
        signIn(data.email, data.password)
        .then(result=> {
            setLoginEmail(data.email);
        })
    }
    if(token){
        navigate('/')
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-2xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[350px]  lg:w-[400px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span>New to kino.com</span>?<Link to='/register' className=" link link-hover text-primary">Create a new account</Link>
                                </label>
                            </div>
                            <div className="form-control mb-0 mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                            <div className="form-control flex justify-center">
                                <button onClick={googleLogin} className="btn btn-primary w-5/6 self-center mb-3  ">Login With Google</button>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;