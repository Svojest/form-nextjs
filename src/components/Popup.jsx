import { Form } from '@/components/Form';

export const Popup = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className={`popup ${isOpen && 'popup_opened'}`} onClick={onClose} id='popup'>
			<div className='popup-content'>
				<p className='title'>Вход \ Регистрация</p>
				<span className='close' onClick={onClose}>
					&times;
				</span>
				<Form />

				<div>
					<p className='text'>
						Нажимая кнопку «Подтвердить номер телефона», я даю свое согласие на сбор и
						обработку моих персональных данных в соответствии с <span>Политикой</span> и принимаю
						условия <span>Пользовательского соглашения</span>
					</p>
				</div>
			</div>
		</div>
	);
};
