import { AuthForm } from './AuthForm';
import { BaseInfoForm } from './BaseInfoForm';

import { useState } from 'react';
import { Finish } from './Finish';

export const Popup = ({ isOpen, onClose, isLoggedIn, setIsLoggedIn }) => {
	if (!isOpen) return null;

	const [isConfirmed, setIsConfirmed] = useState(false);

	return (
		<div className={`popup ${isOpen && 'popup_opened'}`} onClick={onClose} id='popup'>
			<div className='popup-content'>
				{!isLoggedIn && (
					<span className='close' onClick={onClose}>
						&times;
					</span>
				)}
				{isLoggedIn ? (
					<Finish onClose={onClose} />
				) : !isConfirmed ? (
					<AuthForm
						title='Вход / Регистрация'
						isConfirmed={isConfirmed}
						setIsConfirmed={setIsConfirmed}
					/>
				) : (
					<BaseInfoForm title='Основные данные' setIsLoggedIn={setIsLoggedIn} />
				)}
			</div>
		</div>
	);
};
