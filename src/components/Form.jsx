import InputMask from 'react-input-mask';

import { useState } from 'react';

import postData from '@/pages/api/endpoints';

export const Form = () => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [codeNumber, setCodeNumber] = useState('');
	const [isValid, setIsValid] = useState(true);

	const [sendSuccess, setSendSuccess] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Валидация номера телефона после до submit
		const isValidPhone = /^\+[\d]{11}$/.test(phoneNumber);
		if (isValidPhone === true) {
			postData(phoneNumber);
		} else {
			setIsValid(isValidPhone);
		}
	};

	const handleOnChange = (e) => {
		const cleanedPhoneNumber = e.target.value.replace(/[^\d+]/g, '');
		const isValidPhone = /^\+[\d]{11}$/.test(cleanedPhoneNumber);
		setPhoneNumber(cleanedPhoneNumber);
		// Если номер телефона введён верно, то валидация true
		if (isValidPhone === true) {
			setIsValid(isValidPhone);
		}
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
					value={phoneNumber}
					onChange={handleOnChange}
					type='tel'
					className={isValid ? '' : 'error'}
					required
				/>
				{!isValid && <span className='text-error'>Номер должен содержать 11 цифр</span>}
			</div>

			{sendSuccess && (
				<div className='input-wrapper'>
					<label>Последние 4 цифры номера входящего звонка</label>
					<input
						placeholder='****'
						id='code'
						name='code'
						value={codeNumber}
						onChange={(e) => handleOnChange(e.target.code, e.target.value)}
						type='text'
						className={!isValid ? '' : 'error'}
						required
					/>
					{isValid && <span className='text-error'>Номер должен содержать 11 цифр</span>}
				</div>
			)}

			<button type='submit' className='button button-blue'>
				Подтвердить номер телефона
			</button>
			<span className='description'>Мы позвоним на указанный номер телефона</span>
		</form>
	);
};
