import React from "react";
import useMusic from '../../API/useMusic';
import SongItem from './SongItem'

const Library = () => {

	const music = useMusic();

	return (
		<>
		Library
			<ul>
			{music.map(i => <SongItem key={i.id} name={i.name} />)}
		</ul>
		</>
		
	)

}

export default Library;