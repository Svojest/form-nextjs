import Autosuggest from 'react-autosuggest';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getCity, patchUser } from '@/pages/api/endpoints';

export const BaseInfoForm = ({ title, setIsLoggedIn }) => {
	const [formData, setFormData] = useState({
		name: '',
		lastName: '',
	});
	const [value, setValue] = useState('');

	const [suggestions, setSuggestions] = useState([]);
	const [selectedCity, setSelectedCity] = useState('Абакан');
	const [isValid, setIsValid] = useState(false);
	const [resCities, setResCities] = useState([]);

	const [dataLoaded, setDataLoaded] = useState(false);

	const handlerCities = async () => {
		try {
			const res = await getCity();
			const cities = res.data.data;
			setResCities(cities);
			setDataLoaded(true);
		} catch (err) {
			console.log(err);
		}
	};

	const getSuggestions = (inputValue) => {
		const inputValueLowerCase = inputValue.trim().toLowerCase();
		return resCities.filter((city) => city.title.toLowerCase().includes(inputValueLowerCase));
	};
	const renderSuggestion = (suggestion) => <div>{suggestion.title}</div>;

	const getSuggestionValue = (suggestion) => suggestion.title;

	const onChange = (event, { newValue }) => {
		setValue(newValue);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isValid === true) {
			try {
				const res = await patchUser({
					city_id: selectedCity.id,
					first_name: formData.name,
					last_name: formData.lastName,
				});
				localStorage.setItem('isLoggedIn', true);
				setIsLoggedIn(true);
				return res;
			} catch (e) {
				console.log(e);
			}
		}
	};
	const onSuggestionSelected = (event, { suggestion }) => {
		setSelectedCity(suggestion);
	};

	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};
	// Обязательная константа для библиотеки react-autosuggest
	const inputProps = {
		value,
		onChange,
	};

	useEffect(() => {
		handlerCities();
		if (dataLoaded) {
			const defaultCity = resCities.find((city) => city.title === 'Абакан');
			setSelectedCity(defaultCity);
			setValue(defaultCity ? defaultCity.title : value);
		}
	}, [dataLoaded]);

	useEffect(() => {
		if (formData.name.length > 0 && formData.lastName.length > 0 && value.length > 0) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [formData]);

	return (
		<>
			<p className='title'>{title}</p>
			<form onSubmit={handleSubmit}>
				<div className='form-wrapper'>
					<label>Имя</label>
					<div className='input-wrapper'>
						<input
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							type='text'
							required
						/>
					</div>
				</div>
				<div className='form-wrapper'>
					<label>Фамилия</label>
					<div className='input-wrapper'>
						<input
							id='lastName'
							name='lastName'
							type='text'
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className='form-wrapper'>
					<label>Выберите ваш город</label>
					<div className='input-wrapper'>
						<Autosuggest
							suggestions={suggestions}
							onSuggestionsFetchRequested={onSuggestionsFetchRequested}
							onSuggestionsClearRequested={onSuggestionsClearRequested}
							onSuggestionSelected={onSuggestionSelected}
							getSuggestionValue={getSuggestionValue}
							renderSuggestion={renderSuggestion}
							inputProps={inputProps}
							value={formData.city}
							id='city'
							name='city'
							type='tel'
							required
						/>
						<Image src='/images/arrow.svg' width={20} height={20} alt='arrow' />
					</div>
				</div>
				<button type='submit' className={`button button-blue ${!isValid && 'disabled'}`}>
					Сохранить
				</button>

				<div className='step-wrapper'>
					<Image src='/images/arrow-left.svg' width={16} height={16} alt='arrowleft' />
					<span>Шаг назад</span>
				</div>
			</form>
		</>
	);
};
