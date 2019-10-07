import React, { useState } from "react";

const QtrButton = () => {
	let [qtr, setQtr] = useState(1);
	return (
		<div className="homeButtons">
			<button className="homeButtons__touchdown" onClick={() => setQtr(qtr < 5 ? (qtr += 1) : (qtr = "F"))}>
				Advance Quarter
			</button>
		</div>
	);
};

const QtrDisplay = () => {
	let [qtr, setQtr] = useState(1);
	return (
		<div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{qtr}</div>
      </div>
	);
};

export {QtrButton, QtrDisplay};
