import { Crumbs } from '@/components/Сrumbs';
import { Popup } from '@/components/Popup';
import { useState } from 'react';

export const Content = ({ pageName, isLoggedIn, setIsLoggedIn }) => {
	const [popupOpen, setPopupOpen] = useState(false);

	const handlePopupOpen = () => {
		setPopupOpen(true);
	};
	const handleCloseOpen = (e) => {
		if (e.target.id === 'popup' || e.target.matches('.close')) {
			setPopupOpen(!setPopupOpen);
		}
		if (isLoggedIn && e.target.matches('.button')) {
			setPopupOpen(!setPopupOpen);
		}
		//
	};

	return (
		<div className='container'>
			<Crumbs crumbs='Главная' />
			<h1>{pageName}</h1>

			{isLoggedIn ? <div>1</div> : <div>2</div>}
			<div className='box-content'>
				<div className='box-button'>
					<button className='button button-blue' onClick={handlePopupOpen}>
						Авторизация
					</button>
				</div>
			</div>

			<Popup
				isOpen={popupOpen}
				onClose={handleCloseOpen}
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
			/>
		</div>
	);
};
