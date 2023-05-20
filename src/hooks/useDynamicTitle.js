import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = getPageTitle(location.pathname);
    }, [location]);

    const getPageTitle = (pathname) => {
        const baseTitle = 'ToyTopia';

        switch (pathname) {
            case '/':
                return `${baseTitle} | Home`;
            case '/login':
                return `${baseTitle} | Sign In`;
            case '/all-toys':
                return `${baseTitle} | All Toys`
            case '/register':
                return `${baseTitle} | Sign Up`
            case '/toy/:id':
                return `${baseTitle} | Toys Details`
            case '/my-toys':
                return `${baseTitle} | My Loys`
            case '/add-toy':
                return `${baseTitle} | Add New Toy`
            case '/blogs':
                return `${baseTitle} | Blogs`
            default:
                return baseTitle;
        }
    };

    return null; // This component doesn't render anything
};

export default useDynamicTitle;
