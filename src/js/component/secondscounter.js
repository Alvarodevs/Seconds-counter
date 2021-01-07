import React, { useState, useEffect } from "react";

import "bootstrap";

export function Secondscounter() {
	var [seconds, setSeconds] = useState(0);
	var [minutes, setMinutes] = useState(0);
	var [hours, setHours] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((seconds = seconds + 1));

			if (seconds == 5) {
				setMinutes(minutes++);
				setSeconds((seconds = 0));
			}
			if (minutes == 5) {
				setHours(hours + 1);
				setMinutes((minutes = 0));
				setSeconds((seconds = 0));
			}
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="card-group my-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">HOURS</h5>
					<p className="card-text">{hours}</p>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">MINUTES</h5>
					<p className="card-text">{minutes}</p>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">SECONDS</h5>
					<p className="card-text">{seconds}</p>
				</div>
			</div>
		</div>
	);
}
