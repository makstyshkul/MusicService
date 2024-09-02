import React, { useEffect, useRef, useState } from "react";
import useMusic from '../../API/useMusic';
import AudioController from "./AudioController";

const AudioPlayer = ({currentSong}) => {

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const current = useMusic()[currentSong];	
	const AudioRef = useRef(new Audio(current.audio));

	const intervalRef = useRef(null);	

	const play = () => {
		AudioRef.current.play();
		intervalRef.current = setInterval(() => {
			setCurrentTime((c) => c + 1);
		}, 1000)
	}

	const pause = () => {
		AudioRef.current.pause();
		clearInterval(intervalRef.current);
	}

	useEffect(() => {
		if(isPlaying){
			play();
		}else{
			pause();
		}
	}, [isPlaying])	

	const toggleHandler = () => {
		setIsPlaying(!isPlaying);
	}



	return (
		<>
			<AudioController isPlaying={isPlaying}  onTogglePlay={toggleHandler} duration={AudioRef.current.duration} currentTime={currentTime} /> 
		</>
	)

}

export default AudioPlayer;