import InputMask from 'react-input-mask';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { postPhone, postCode, refreshToken } from '@/pages/api/endpoints';
import Timer from './Timer';

export const Form = ({ isConfirmed, setIsConfirmed }) => {
	const [isPhoneNumber, setIsPhoneNumber] = useState('');
	const [isCodeNumber, setIsCodeNumber] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [isValidCode, setIsValidCode] = useState(true);

	const [isCallReady, setIsCallReady] = useState(false);
	const [isSendSuccess, setIsSendSuccess] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Валидация номера телефона до submit
		const isValidPhone = /^\+[\d]{11}$/.test(isPhoneNumber);

		if (isValidPhone === true) {
			postPhone(isPhoneNumber);
			setIsSendSuccess(true);
			// После нажатия submit повторного звонка начинается снова отсчёт и сбрасывается валидация и значение кода
			setIsCallReady(false);
			setIsCodeNumber('');
			setIsValidCode(true);
		} else {
			setIsValid(isValidPhone);
		}
	};

	const handleOnChangePhone = (e) => {
		const cleanedPhoneNumber = e.target.value.replace(/[^\d+]/g, '');
		const isValidPhone = /^\+[\d]{11}$/.test(cleanedPhoneNumber);
		setIsPhoneNumber(cleanedPhoneNumber);
		// Если номер телефона введён верно, то валидация true
		if (isValidPhone === true) {
			setIsValid(isValidPhone);
		}
	};

	const handleOnChangeCode = async (e) => {
		const codeValue = e.target.value;
		setIsCodeNumber(codeValue);

		console.log(codeValue);

		if (codeValue.length === 4) {
			try {
				// Получаю значение user_id
				const user_id = await postPhone(isPhoneNumber);
				const res = await postCode(user_id, codeValue);

				// Добавляю в localStorage токен
				console.log(res);

				if (res.status === 200) {
					setIsConfirmed(true);

					localStorage.setItem('refresh_token', res.data.refresh_token);
					const token = localStorage.getItem('refresh_token');
					refreshToken(token);
					localStorage.setItem('access_token', res.data.access_token);
					setIsValidCode(true);
				}
			} catch (err) {
				setIsValidCode(false);
				console.log(err);
			}
		}
	};

	return (
		//

		<form onSubmit={handleSubmit}>
			<div className='form-wrapper'>
				<label>Телефон</label>
				<div className='input-wrapper'>
					<InputMask
						mask='+7 (999) 999-99-99'
						placeholder='+7'
						id='phone'
						name='phone'
						value={isPhoneNumber}
						onChange={handleOnChangePhone}
						type='tel'
						className={isValid ? '' : 'error'}
						required
					/>
					{isConfirmed && (
						<Image src='/images/check.svg' alt='check' width={16} height={16} />
					)}
				</div>
				{!isValid && <span className='text-error'>Номер должен содержать 11 цифр</span>}
			</div>

			{!isSendSuccess && (
				<>
					<button type='submit' className='button button-blue'>
						Подтвердить номер телефона
					</button>
					<span className='description'>Мы позвоним на указанный номер телефона</span>
				</>
			)}

			{isSendSuccess && (
				<>
					<div className='form-wrapper'>
						<label>Последние 4 цифры номера входящего звонка</label>
						<input
							placeholder='****'
							id='code'
							name='code'
							value={isCodeNumber}
							onChange={handleOnChangeCode}
							maxLength={4}
							type='text'
							className={isValidCode ? '' : 'error'}
							required
						/>

						{!isValidCode && (
							<span className='text-error'>
								Код подтверждения некорректен или просрочен.
							</span>
						)}
					</div>
					{!isCallReady && (
						<span className='description'>
							Повторный звонок возможен через{' '}
							<Timer isCallReady={isCallReady} setIsCallReady={setIsCallReady} />
						</span>
					)}
					{isCallReady && (
						<button className='button button-blue'>Запросить звонок повторно</button>
					)}
				</>
			)}
		</form>
	);
};
