import React, { useState, useEffect } from "react";

import "bootstrap";

export function Secondscounter() {
	var [seconds, setSeconds] = useState(0);
	var [minutes, setMinutes] = useState(0);
	var [hours, setHours] = useState(0);
	const [isActive, setIsActive] = useState(false);

	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setSeconds(0);
		setMinutes(0);
		setHours(0);
		setIsActive(false);
	}

	useEffect(
		() => {
			let interval = null;
			if (isActive) {
				interval = setInterval(() => {
					setSeconds((seconds = seconds + 1));

					if (seconds == 60) {
						setMinutes((minutes = minutes + 1));
						setSeconds((seconds = 0));
					}
					if (minutes == 60) {
						setHours((hours = hours + 1));
						setMinutes((minutes = 0));
						setSeconds((seconds = 0));
					}
				}, 1000);
			} else if (!isActive && seconds !== 0) {
				clearInterval(interval);
			}

			return () => clearInterval(interval);
		},
		[isActive, seconds]
	);

	return (
		<div>
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
			<div className="buttonsRow">
				<div className="row">
					<button
						className={`button button-primary button-primary-${
							isActive ? "active" : "inactive"
						}`}
						onClick={toggle}>
						{isActive ? "Pause" : "Start"}
					</button>
					<button className="button button-dark" onClick={reset}>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}
