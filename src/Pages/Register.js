import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import useToken from '../Hook/useToken';

const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createdEmail, setCreatedEmail] =useState('');
    const [token] =useToken(createdEmail);
    const { googleSighnIn, createUser } = useContext(AuthContext);
    const login = () => {
        googleSighnIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    if(token){
        toast.success('SuccesFully created user');
        navigate('/');
    }


    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(result=> {
          const  userInfo={
                name:data.name,
                email:data.email
            }
            console.log(userInfo)

            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(userInfo)
                
            })
            .then(res=>res.json())
            .then(result =>{
                setCreatedEmail(data.email);
            })

        })
        .catch(error=> console.log(error))
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-2xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[350px]  lg:w-[400px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />                            </div>
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

                            </div>
                            <div className="form-control mb-0 mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                            <div className="form-control flex justify-center">
                                <button onClick={login} className="btn btn-primary w-5/6 self-center mb-3 ">Login With Google</button>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;