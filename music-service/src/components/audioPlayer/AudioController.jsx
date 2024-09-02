import React from "react";
import secondToMinutes from "../../utills/secondToMinutes";

const AudioController = ({isPlaying, onTogglePlay, duration, currentTime}) => {
	

	return (
		<>
			<div>
				{secondToMinutes(currentTime)}
				<div></div>
				{secondToMinutes(duration)}
			</div>
			<div>
				<button>Prev</button> 
				<button onClick={onTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button> 
				<button>Next</button> 
		</div>
		</>
	)

}

export default AudioController;