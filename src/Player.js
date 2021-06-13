import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Fotter from "./Fotter";

function Player({ spotify }) {
	return (
		<div className="player">
			<div className="player_body">
				<Sidebar />
				<Body spotify={spotify} />
				<Fotter />
			</div>
		</div>
	);
}

export default Player;
