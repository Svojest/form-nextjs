import { checkToken as apiCheckToken, getUserInfo as apiGetUserInfo } from '@/pages/api/endpoints';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        const loggedIn = localStorage.getItem('isLoggedIn');

        if (loggedIn === 'true') {
            const checkToken = async () => {
                const isAuthenticated = await apiCheckToken(access_token);
                setIsLoggedIn(isAuthenticated);
            };
            const getUserInfo = async () => {
                const response = await apiGetUserInfo()
                const userInfo = response.data
                setUserInfo(userInfo)

            }
            getUserInfo()
            checkToken();
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        // Сохраняем значение isLoggedIn в localStorage при его изменении
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
