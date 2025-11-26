import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    
    const {registerwithEmailPassword} = useContext(AuthContext);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        registerwithEmailPassword(email, pass)
        .then(userCredential =>{
            const user = userCredential.user
            console.log(user)
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-primary">Create Your WarmPaws Account</h1>
                    <p className="py-6">
                        Sign up to access pet services, grooming, and winter essentials
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your Full Name" />
                            <label className="label">Photo URL</label>
                            <input name='photoUrl' type="text" className="input" placeholder="Your Photo Url" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <span>Already have an account? </span><Link to={'/login'} className=' text-primary'>Login</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;