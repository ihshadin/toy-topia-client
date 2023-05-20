import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import loginImage from '../../../assets/images/login.png';
import { AuthContext } from '../../../routes/AuthProvider';
import useDynamicTitle from '../../../hooks/useDynamicTitle';

const Login = () => {
    useDynamicTitle()
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // Sign in with email and password
    const handleLogin = event => {
        event.preventDefault();
        setSuccess('');
        setError('')

        const form = event.target;
        const email = form.login_email.value;
        const password = form.login_password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('You are successfully loggedin');
                redirectNavigate();
            })
            .catch(error => {
                console.log(error);
                setError("Email or password doesn't match.")
            })
    }
    const redirectNavigate = () => {
        navigate(from, { replace: true })
    }

    return (
        <div className='flex xl:container mx-auto justify-between items-center'>
            <div>
                <img className='max-w-full' src={loginImage} alt="" />
            </div>
            <form onSubmit={handleLogin} className='my-12 py-12 px-16 w-11/12 md:max-w-lg rounded-lg hover:shadow-2xl'>
                <h4 className='text-xl md:text-2xl font-semibold text-center mb-5'>Please Sign in your Account</h4>
                <div className='mb-3'>
                    <label htmlFor="login_email" className='block font-medium mb-1'>Email Address</label>
                    <input type="email" name="login_email" id="login_email" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input email address' required />
                </div>
                <div className='mb-2'>
                    <label htmlFor="login_password" className='block font-medium mb-1'>Password</label>
                    <input type="password" name="login_password" id="login_password" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input Password' required />
                </div>
                <small className='block text-teal-500'>{success}</small>
                <small className='block text-red-500'>{error}</small>
                <button className='error_message block w-full px-12 py-3 mx-auto bg-p mt-5 text-white font-semibold uppercase'>Sign in</button>
                <small className='block mt-4 font-semibold text-center text-[#2a2a2e]'>Dont’t have an Account ? Please <Link to='/register' className='text-p'>Sign Up</Link></small>
                <div className="flex flex-col w-full">
                    <div className="divider"> OR </div>
                </div>
                {/* Login with social accounts */}
                <SocialLogin redirectNavigate={redirectNavigate} />
            </form>
        </div>
    );
};

export default Login;