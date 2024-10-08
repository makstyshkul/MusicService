import { useMemo, useState } from "react";

const useListController = (list = []) => {

	const [currentSong, setCurrentSong] = useState(0);

	const prevSong = () => {
		if(currentSong === 0){
			setCurrentSong(list.length - 1);
		}else{
			setCurrentSong(currentSong - 1);
		}
	}

	const nextSong = () => {
		if(list.length === currentSong + 1){
			setCurrentSong(0);
		}else{
			setCurrentSong(currentSong + 1);
		}
	}

	const setSongByID = (id) => {
		const index = list.findIndex((item) => item.id === id);

		if(index > -1){
			setCurrentSong(index);
		}
	}

	const currentID = useMemo(() => list[currentSong].id , [currentSong]);

	return {
		prevSong, nextSong, currentSong, setSongByID, currentID
	}
}

export default useListController;