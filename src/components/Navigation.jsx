import Link from 'next/link';

export const Navigation = () => {
	return (
		<div className='nav-wrapper'>
			<ul className='list'>
				<li className='item'>
					<Link href='/1' className='link'>
						Пункт
					</Link>
				</li>
				<li className='item'>
					<Link href='/1' className='link'>
						Пункт 1
					</Link>
				</li>
				<li className='item'>
					<Link href='/1' className='link'>
						Пункт 1
					</Link>
				</li>
				<li className='item'>
					<Link href='/1' className='link'>
						Пункт 1
					</Link>
				</li>
			</ul>
			<button className='button'>Войти \ Зарегистрироваться</button>
		</div>
	);
};
