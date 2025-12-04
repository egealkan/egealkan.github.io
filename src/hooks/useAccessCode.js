import { useState, useEffect } from 'react';

// Simple hashing to avoid storing plain text passwords in code
const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
};

const SECRET_HASH = -3894104269; 

export const useAccessCode = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        // Check session storage on load
        const storedAuth = sessionStorage.getItem('jury_authorized');
        if (storedAuth === 'true') {
            setIsAuthorized(true);
        }
    }, []);

    const verifyCode = (inputCode) => {
        if (hashCode(inputCode) === SECRET_HASH) {
            sessionStorage.setItem('jury_authorized', 'true');
            setIsAuthorized(true);
            return true;
        }
        return false;
    };

    return { isAuthorized, verifyCode, hashCode };
};