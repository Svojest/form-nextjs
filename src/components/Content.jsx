import { Crumbs } from '@/components/Сrumbs';
import { Popup } from '@/components/Popup';
import { useState } from 'react';

export const Content = ({ pageName }) => {
	const [popupOpen, setPopupOpen] = useState(false);

	const handlePopupOpen = () => {
		setPopupOpen(true);
	};
	const handleCloseOpen = (e) => {
		if (e.target.id === 'popup' || e.target.matches('.close')) {
			setPopupOpen(!setPopupOpen);
		}
		//
	};

	return (
		<div className='container'>
			<Crumbs />
			<h1>{pageName}</h1>

			<div className='box-content'>
				<div className='box-button'>
					<button className='button button-blue' onClick={handlePopupOpen}>
						Авторизация
					</button>
				</div>
			</div>

			<Popup isOpen={popupOpen} onClose={handleCloseOpen} />
		</div>
	);
};
