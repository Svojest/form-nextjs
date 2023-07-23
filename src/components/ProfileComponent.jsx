import { Crumbs } from '@/components/Сrumbs';
import { Popup } from '@/components/Popup';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export const ProfileComponent = ({ pageName, isLoggedIn, setIsLoggedIn }) => {
	const { userInfo } = useContext(AuthContext);

	return (
		<div className='container'>
			<Crumbs crumbs='Главная - Личный кабинет - Настройки аккаунта' />
			<h1>{pageName}</h1>

			<div className='profile-wrapper'>
				<div className='profile-nav'>
					<div className='nav-user-info'>
						<span>info</span>
					</div>
					<div className='profile-nav-links'>
						<Link className='link-wrapper' href='/'>
							<Image src='/images/megaphone.svg' width={24} height={24} />
							<span>Уведомления</span>
						</Link>
						<Link className='link-wrapper' href='/'>
							<Image src='/images/question-circle.svg' width={24} height={24} />
							<span>Служба поддержки</span>
						</Link>
						<Link className='link-wrapper link-wrapper_active' href='/'>
							<Image src='/images/setting.svg' width={24} height={24} />
							<span>Настройки аккаунта</span>
						</Link>
					</div>
				</div>
				<div className='box-content'>
					<form className='setting-form'>
						<p className='box-title'>Настройки аккаунта</p>
						<div className='box-section-first'>
							<div className='box-avatar'>
								<div className='box-avatar-wrapper'>
									<button className='setting-button'>Загрузите фото</button>
								</div>
							</div>
							<div className='box-wrapper'>
								<div className='box-input-wrapper'>
									<label>Фамилия</label>
									<input
										placeholder='Введите фамилию'
										id='last_name'
										name='last_name'
										type='text'
										value={''}
									/>
								</div>
								<div className='box-input-wrapper'>
									<label>Имя</label>
									<input
										placeholder='Введите имя'
										id='first_name'
										name='first_name'
										type='text'
									/>
								</div>
								<div className='box-input-wrapper'>
									<label>Отчество</label>
									<input
										placeholder='Введите фамилию'
										id='middle_name'
										name='middle_name'
										type='text'
									/>
								</div>
							</div>
						</div>
						<div className='box-section-second'>
							<div className='box-wrapper'>
								<div className='box-input-wrapper'>
									<label>Пол</label>
									<input
										placeholder='Введите фамилию'
										id='last_name'
										name='last_name'
										type='text'
										value={''}
									/>
								</div>
								<div className='box-input-wrapper'>
									<label>Дата рождения</label>
									<input
										placeholder='Введите имя'
										id='first_name'
										name='first_name'
										type='text'
									/>
								</div>
								<div className='box-input-wrapper'>
									<label>Город</label>
									<input
										placeholder='Введите фамилию'
										id='middle_name'
										name='middle_name'
										type='text'
									/>
								</div>
								<div className='box-input-wrapper'>
									<label>Адрес</label>
									<input
										placeholder='Введите фамилию'
										id='last_name'
										name='last_name'
										type='text'
										value={''}
									/>
								</div>
								<div className='box-input-wrapper'>
									<label>Телефон</label>
									<input
										placeholder='Введите имя'
										id='first_name'
										name='first_name'
										type='text'
									/>
								</div>
							</div>
						</div>
						<button className='button button-blue disabled setting-submit'>
							Сохранить
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
