import { createContext } from "react";


export const AudioListContext = createContext({
	nextSong: () => {},
	prevSong: () => {},
	currentSong: 0,
	setSongByID: (id) => {},
	currentID: 0
});


