import React, { useContext } from "react";
import useMusic from '../../API/useMusic';
import SongItem from './SongItem'
import { AudioListContext } from "../../context/AudioListContext";

const Library = () => {

	const music = useMusic();

	const {currentID} = useContext(AudioListContext);

	return (
		<>
		Library
			<ul>
			{music.map(i => <SongItem key={i.id} name={i.name} isActive={currentID === i.id} />)}
		</ul>
		</>
		
	)

}

export default Library;