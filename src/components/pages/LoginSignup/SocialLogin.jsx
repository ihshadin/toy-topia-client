import React, { useContext } from 'react';
import googleIcon from '../../../assets/images/Google__G__Logo.svg.png';
import githubIcon from '../../../assets/images/25231.png'
import facebookIcon from '../../../assets/images/2021_Facebook_icon.svg.png'
import { AuthContext } from '../../../routes/AuthProvider';

const SocialLogin = ({ redirectNavigate }) => {
    const { googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);

    // Google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result?.user;
                // console.log(user);
                redirectNavigate()
            })
            .catch(error => {
                const errorMessage = error?.message;
                console.log(errorMessage);
            })
    }
    // Github Login
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result?.user;
                // console.log(user);
                redirectNavigate()
            })
            .catch(error => {
                const errorMessage = error?.message;
                console.log(errorMessage);
            })
    }
    // Facebook Login
    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                const user = result?.user;
                // console.log(user);
                redirectNavigate()
            })
            .catch(error => {
                const errorMessage = error?.message;
                console.log(errorMessage);
            })
    }
    return (
        <div className='flex gap-3 justify-evenly items-center mt-5'>
            <img src={googleIcon} className='w-6 cursor-pointer' alt="Google" onClick={handleGoogleLogin} />
            <img src={githubIcon} className='w-6 cursor-pointer' alt="GitHub" onClick={handleGithubLogin} />
            <img src={facebookIcon} className='w-6 cursor-pointer' alt="Facebook" onClick={handleFacebookLogin} />
        </div>
    );
};

export default SocialLogin;