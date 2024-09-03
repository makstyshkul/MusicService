import React, { useContext} from "react";
import secondToMinutes from "../../utills/secondToMinutes";
import { AudioListContext } from "../../context/AudioListContext";


const AudioController = ({isPlaying, onTogglePlay, duration, currentTime, onScrub}) => {
	
	const {nextSong, prevSong} = useContext(AudioListContext);

	return (
		<>
			<div>
				{secondToMinutes(currentTime)}
				<input 
				type="range" 
				min='0' step='1' 
				max={isNaN(duration) ? '0' : duration} 
				value={currentTime} 
				onMouseUp={(e) => console.log(e)}
				onChange={(e) => onScrub(e.target.value)}
				/>
				{secondToMinutes(duration)}
			</div>
			<div>
				<button onClick={prevSong}>Prev</button> 
				<button onClick={onTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button> 
				<button onClick={nextSong}>Next</button> 
		</div>
		</>
	)

}

export default AudioController;