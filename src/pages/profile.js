import { Crumbs } from '@/components/Сrumbs';
import { Popup } from '@/components/Popup';
import { useState, useContext } from 'react';
import { ProfileComponent } from '@/components/ProfileComponent';
import { AuthContext } from '@/context/AuthContext';

const Profile = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    return (
        <>
            <ProfileComponent pageName='Настройка аккаунта' isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </>
    );
};

export default Profile;