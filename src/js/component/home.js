import React from "react";
import SecondsCounter from "./component/secondscounter.js";

export function Home() {
	const counter = <SecondsCounter />;

	return (
		<div>
			<div className="text-center mt-5">
				<h1>On your marks, get set, GO!</h1>

				<div>{counter}</div>

				<a href="#" className="btn btn-success">
					Made by{" "}
					<a href="https://github.com/Alvarodevs">Alvarodevs</a>
				</a>
			</div>
		</div>
	);
}
