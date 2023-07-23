import Image from 'next/image';
import Link from 'next/link';

export const Finish = ({onClose}) => {
	return (
		<>
			<Image src='/images/finish.svg' width={60} height={60} alt='finish' />
			<p className='title'>Вы успешно зарегистрировались</p>
			<span className='description'>
				Для более эффективного использования ресурса, рекомендуем заполнить профиль.
			</span>
			<Link href='/profile'>
				<button className='button button-blue button-finish'>Заполнить профиль</button>
			</Link>

			<button className='button button-finish' onClose={onClose}>Пропустить</button>
		</>
	);
};
