import Link from 'next/link';

export const TopNavigation = () => {
	return (
		<div className='nav-wrapper'>
			<Link href='/1' className='link white'>
				Красноярск
			</Link>

			<ul className='list'>
				<li className='item'>
					<Link href='/1' className='link white'>
						О проекте
					</Link>
				</li>
				<li className='item'>
					<Link href='/1' className='link white'>
						Блог
					</Link>
				</li>
			</ul>
		</div>
	);
};
