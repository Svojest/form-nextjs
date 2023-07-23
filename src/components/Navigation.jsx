import Link from 'next/link';
import Image from 'next/image';

import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export const Navigation = ({ isLoggedIn }) => {
	const { userInfo } = useContext(AuthContext);

	
	return (
		<div className='nav-wrapper'>
			<ul className='list'>
				<li className='item'>
					<Link href='/' className='link'>
						Пункт
					</Link>
				</li>
				<li className='item'>
					<Link href='/' className='link'>
						Пункт 1
					</Link>
				</li>
				<li className='item'>
					<Link href='/' className='link'>
						Пункт 1
					</Link>
				</li>
				<li className='item'>
					<Link href='/' className='link'>
						Пункт 1
					</Link>
				</li>
			</ul>
			{isLoggedIn ? (
				<>
					<div className='nav-user-info'>
						{userInfo.photo ? (
							<Image src={userInfo.photo} alt='avatar' width={40} height={40} />
						) : (
							<div
								style={{
									width: 40,
									height: 40,
									borderRadius: '50%',
									backgroundColor: '#E8EAED',
								}}
							/>
						)}
						<Link href="/profile" className='link'>
							{userInfo.last_name} {userInfo.first_name}
						</Link>
					</div>
				</>
			) : (
				<button className='button'>Войти \ Зарегистрироваться</button>
			)}
		</div>
	);
};
