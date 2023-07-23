import { Form } from '@/components/Form';

export const AuthForm = ({ title, isConfirmed, setIsConfirmed }) => {
	return (
		<>
			<p className='title'>{title}</p>

			<Form isConfirmed={isConfirmed} setIsConfirmed={setIsConfirmed} />

			<div>
				<p className='text'>
					Нажимая кнопку «Подтвердить номер телефона», я даю свое согласие на сбор и
					обработку моих персональных данных в соответствии с <span>Политикой</span> и
					принимаю условия <span>Пользовательского соглашения</span>
				</p>
			</div>
		</>
	);
};
