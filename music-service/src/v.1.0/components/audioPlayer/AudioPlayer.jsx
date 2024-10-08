import React, { useContext, useEffect, useRef, useState } from "react";
import useMusic from '../../API/useMusic';
import AudioController from "./AudioController.jsx";
import { AudioListContext } from "../../context/AudioListContext";

const AudioPlayer = () => {

	const {currentSong: currentIndex, nextSong} = useContext(AudioListContext);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const current = useMusic()[currentIndex];	
	const AudioRef = useRef(new Audio(current.audio));

	const intervalRef = useRef(null);	

	const play = async () => {
		await AudioRef.current.play();
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

	useEffect(() => {
		if(currentTime >= AudioRef.current.duration){
			nextSong();
		}else{
			
		}
	}, [currentTime, nextSong]);

	useEffect(() => {
		setCurrentTime(0);
		if(isPlaying){
			pause();
		}
		AudioRef.current = new Audio(current.audio);
		if(isPlaying){
			play();
		}
	}, [currentIndex]);

	const toggleHandler = () => {
		setIsPlaying(!isPlaying);
	}

	const handleScrub = (value) =>{
		setCurrentTime(value);
		AudioRef.current.currentTime = value;
	}

	return (
		<>
			<AudioController 
			isPlaying={isPlaying}  
			onTogglePlay={toggleHandler} 
			duration={AudioRef.current.duration} 
			currentTime={currentTime} 
			onScrub={handleScrub}
			/> 
		</>
	)

}

export default AudioPlayer;