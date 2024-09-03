import React from "react";
import Library from './components/library/Library';
import AudioPlayer from './components/audioPlayer/AudioPlayer';
import useListController from "./hooks/useListController";
import useMusic from "./API/useMusic";
import {AudioListContext} from './context/AudioListContext'


function App() {

	const music = useMusic();
	const controller = useListController(music);

  return (
    <AudioListContext.Provider value={controller}>
      <Library />
		<AudioPlayer />
    </AudioListContext.Provider>
  );
}

export default App;
