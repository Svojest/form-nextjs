import { Navigation } from '@/components/Navigation';
import { TopNavigation } from '@/components/TopNavigation';

export const Header = () => {
	return (
		<>
			<div className='nav navtop'>
				<div className='container'>
					<TopNavigation />
				</div>
			</div>
			<div className='nav'>
				<div className='container'>
					<Navigation />
				</div>
			</div>
		</>
	);
};
