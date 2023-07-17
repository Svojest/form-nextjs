import InputMask from 'react-input-mask';

import { useState } from 'react';

import postData from '@/pages/api/endpoints';

export const Form = () => {
	const [phoneNubmer, setPhoneNubmer] = useState('');
	const [isValid, setIsValid] = useState(true);

	const [sendSuccess, setSendSuccess] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		postData(phoneNubmer);
        console.log(postData(phoneNubmer))
		
	};

	const handleOnChange = (e) => {
		const cleanedPhoneNumber = e.target.value.replace(/[^\d+]/g, '');
		const isValidPhone = /^\+[\d]{11}$/.test(cleanedPhoneNumber);
		setIsValid(isValidPhone);
		setPhoneNubmer(cleanedPhoneNumber);
		// console.log(cleanedPhoneNumber);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='input-wrapper'>
				<label>Телефон</label>
				<InputMask
					mask='+7 (999) 999-99-99'
					placeholder='+7'
					id='phone'
					name='phone'
					value={phoneNubmer}
					onChange={handleOnChange}
					type='tel'
					className={!isValid && 'error'}
					required
				/>
				{!isValid && <span className='text-error'>Номер должен содержать 11 цифр</span>}
			</div>

			<button type='submit' className='button button-blue'>
				Подтвердить номер телефона
			</button>
			<span className='description'>Мы позвоним на указанный номер телефона</span>
		</form>
	);
};
