import React, { useContext, useState } from 'react';
import SocialLogin from './SocialLogin';
import signUpImage from '../../../assets/images/register.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../routes/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { user, createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('')

        const form = event.target;
        const name = form.reg_name.value;
        const email = form.reg_email.value;
        const password = form.reg_pass.value;
        const photoLink = form.reg_photo.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please input at least one uppper latter');
            return;
        } else if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(createdUser, name, photoLink)
                setSuccess('Congrates! You are successfully register an Account!')
            })
            .catch(error => {
                setError('Ops! Registration faild. Please try again')
                console.log(error?.message)
            })
    }

    const updateUserData = (loggedUser, userName, photo) => {
        updateProfile(loggedUser, {
            displayName: userName,
            photoURL: photo,
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='flex xl:container mx-auto justify-between items-center'>
            <div>
                <img className='max-w-full' src={signUpImage} alt="" />
            </div>
            <form onSubmit={handleRegister} className='my-12 py-12 px-16 w-11/12 md:max-w-lg rounded-lg hover:shadow-2xl'>
                <h4 className='text-xl md:text-2xl font-semibold text-center mb-5'>Please Register an Account</h4>
                <div className='mb-3'>
                    <label htmlFor="reg_name" className='block font-medium mb-1'>Name</label>
                    <input type="text" name="reg_name" id="reg_name" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input Name' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="reg_email" className='block font-medium mb-1'>Email Address</label>
                    <input type="email" name="reg_email" id="reg_email" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input email address' required />
                </div>
                <div className='mb-2'>
                    <label htmlFor="reg_pass" className='block font-medium mb-1'>Password</label>
                    <input type="password" name="reg_pass" id="reg_pass" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input Password' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="reg_photo" className='block font-medium mb-1'>Photo URL</label>
                    <input type="text" name="reg_photo" id="reg_photo" className='block w-full bg-teal-100 px-3 py-2 rounded-md' placeholder='Input Photo URL' required />
                </div>
                <small className='block text-teal-500'>{success}</small>
                <small className='block text-red-500'>{error}</small>
                <button className='error_message block w-full px-12 py-3 mx-auto bg-p mt-5 text-white font-semibold uppercase'>Sign up</button>
                <small className='block mt-4 font-semibold text-center text-[#2a2a2e]'>Already have an Account ? Please <Link to='/login' className='text-p'>Sign In</Link></small>
                <div className="flex flex-col w-full">
                    <div className="divider"> OR </div>
                </div>
                <SocialLogin />
            </form>
        </div>
    );
};

export default Signup;