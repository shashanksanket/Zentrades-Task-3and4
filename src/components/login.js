import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;
        return re.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Invalid email format');
            return;
        }

        if (!validatePassword(password)) {
            alert('Password should contain at least 8 characters, an uppercase letter, a number and only a @ special character');
            return;
        }

        if (password === 'SmartServTest@123') {
            alert('Logged in successfully, Redirecting...');
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        } else {
            alert('Incorrect password. Please try again.');
        }
    };
    const handleForgotPassword = () => {
        window.location.href = 'mailto:support@smartserv.io';
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#222] min-h-screen flex items-center justify-center">
            <div className="bg-[#141414] gap-y-5 flex flex-col p-10 rounded-lg shadow-md w-full md:w-[35%]">
                <img src={logo} alt="logo" />
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Username'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 text-xl rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border text-xl border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-[#71be59] text-white rounded-lg hover:bg-[#71be22]">
                    Login
                </button>
                <p onClick={handleForgotPassword} className='text-[#989797] cursor-pointer underline text-center'>Forgot Password?</p>
             </div>
        </form>
    );
};

export default LoginForm;