import React, { useContext } from 'react';
import googleIcon from '../../../assets/images/Google__G__Logo.svg.png';
import githubIcon from '../../../assets/images/25231.png'
import facebookIcon from '../../../assets/images/2021_Facebook_icon.svg.png'
import { AuthContext } from '../../../routes/AuthProvider';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result?.user;
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error?.message;
                console.log(errorMessage);
            })
    }
    return (
        <div className='flex gap-3 justify-evenly items-center mt-5'>
            <img src={googleIcon} className='w-6 cursor-pointer' alt="Google" onClick={handleGoogleLogin} />
            <img src={githubIcon} className='w-6 cursor-pointer' alt="GitHub" />
            <img src={facebookIcon} className='w-6 cursor-pointer' alt="Facebook" />
        </div>
    );
};

export default SocialLogin;