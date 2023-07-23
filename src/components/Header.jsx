import { Navigation } from '@/components/Navigation';
import { TopNavigation } from '@/components/TopNavigation';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

export const Header = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<>
			<div className='nav navtop'>
				<div className='container'>
					<TopNavigation />
				</div>
			</div>
			<div className='nav'>
				<div className='container'>
					<Navigation isLoggedIn={isLoggedIn} />
				</div>
			</div>
		</>
	);
};
