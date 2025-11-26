import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Register = () => {

    const { registerwithEmailPassword, setUser, user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        registerwithEmailPassword(email, pass)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    setUser(userCredential.user)
                }).catch((error) => {
                    console.log(error);
                });
            })
            .catch(err => {
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
                            <div>
                                <span>Already have an account? </span><Link to={'/login'} className=' text-primary'>Register</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;