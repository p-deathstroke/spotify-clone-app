import React from "react";
import "./Fotter.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";

function Fotter() {
	return (
		<div className="fotter">
			<div className="fotter_left">
				<img
					className="fotter_albumLogo"
					src="https://images-na.ssl-images-amazon.com/images/I/61uhSkvxkvL._SL1400_.jpg"
					alt=""
				/>
				<div className="fotter_songInfo">
					<h4> Broken Sleep</h4>
					<p> Agnes Obel</p>
				</div>
			</div>
			<div className="fotter_center">
				<ShuffleIcon className="fotter_green" />
				<SkipPreviousIcon className="fotter_icon" />
				<PlayCircleOutlineIcon fontSize="large" className="fotter_icon" />
				<SkipNextIcon className="fotter_icon" />
				<RepeatIcon className="fotter_green" />
			</div>
			<div className="fotter_right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Fotter;
