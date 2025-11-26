import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {setUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                console.log(error);
                
            });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-primary">Welcome Back to WarmPaws</h1>
                    <p className="py-6">
                        Log in to continue caring for your furry friends this winter
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <span>Don't have an account? </span><Link to={'/signup'} className=' text-primary'>Register</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;