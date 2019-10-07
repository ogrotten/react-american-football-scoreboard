//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
// import QtrButton from "./Quarter";

function App() {
	//TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
	let [scoreHome, setscoreHome] = useState(0);
	let [scoreAway, setscoreAway] = useState(0);
	let [qtr, setQtr] = useState(1);

	const QtrButton = () => {
		return (
			<div className="homeButtons">
				<button className="homeButtons__touchdown" onClick={() => setQtr(qtr < 4 ? (qtr += 1) : (qtr = "F"))}>
					Advance Quarter
				</button>
			</div>
		);
	};

	const QtrDisplay = () => {
		return (
			<div className="quarter">
				<h3 className="quarter__title">Quarter</h3>
				<div className="quarter__value">{qtr}</div>
			</div>
		);
	};

	return (
		<div className="container">
			<section className="scoreboard">
				<div className="topRow">
					<div className="home">
						<h2 className="home__name">Lions</h2>

						{/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

						<div className="home__score">{scoreHome}</div>
					</div>
					<div className="timer">00:03</div>
					<div className="away">
						<h2 className="away__name">Tigers</h2>
						<div className="away__score">{scoreAway}</div>
					</div>
				</div>
				<BottomRow />
				<QtrDisplay />
			</section>
			<section className="scoreboard">
				<QtrButton />
				<div className="homeButtons">
					{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
					<button className="homeButtons__touchdown" onClick={() => setscoreHome((scoreHome += 7))}>
						Home Touchdown
					</button>
					<button className="homeButtons__fieldGoal" onClick={() => setscoreHome((scoreHome += 3))}>
						Home Field Goal
					</button>
				</div>
				<div className="awayButtons">
					<button className="awayButtons__touchdown" onClick={() => setscoreAway((scoreAway += 7))}>
						Away Touchdown
					</button>
					<button className="awayButtons__fieldGoal" onClick={() => setscoreAway((scoreAway += 3))}>
						Away Field Goal
					</button>
				</div>
			</section>
		</div>
	);
}

export default App;
