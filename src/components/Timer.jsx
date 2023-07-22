import { useState, useEffect } from 'react';

const Timer = ({ isCallReady, setIsCallReady }) => {
	const [seconds, setSeconds] = useState(60);

	useEffect(() => {
		// Start the countdown when the component mounts
		const interval = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds - 1);
		}, 1000);

		// Clean up the interval when the component unmounts
		return () => clearInterval(interval);
	}, []);

	// Reset the timer when it reaches 0
	useEffect(() => {
		if (seconds === 0) {
			setIsCallReady(true);
			console.log('isCallReady', isCallReady);
			// You can add logic here to handle what happens when the countdown reaches 0
			// For example, you might want to trigger some action or reset the countdown.
		}
	}, [seconds]);

	return <span style={{ fontWeight: 'bold' }}>{`${seconds} сек.`} </span>;
};

export default Timer;
