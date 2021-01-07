import React from "react";

import { Secondscounter } from "./secondscounter.js";

export function Home() {
	return (
		<div>
			<div className="text-center mt-5 d-flex flex-column align-items-center">
				<h1>On your marks, get set, GO!</h1>
				<Secondscounter />
				<p className="btn btn-success">
					Made by{" "}
					<a href="https://github.com/Alvarodevs">Alvarodevs</a>
				</p>
			</div>
		</div>
	);
}
