import { useState } from "react";

const useListController = () => {

	const [currentSong, setCurrentSong] = useState(0);

	const prevSong = () => {}
	const nextSong = () => {}
	const setSongByID = (id) => {}

	return {
		prevSong, nextSong, currentSong, setSongByID
	}
}

export default useListController;