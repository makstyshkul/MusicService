import React from "react";
import Library from './components/library/Library';
import AudioPlayer from './components/audioPlayer/AudioPlayer';
import useListController from "./hooks/useListController";


function App() {

	const {currentSong, setSongByID, prevSong, nextSong} = useListController();

  return (
    <div >
      <Library currentSong={currentSong} setSongByID={setSongByID} />
		<AudioPlayer currentSong={currentSong} prevSong={prevSong} nextSong={nextSong} />
    </div>
  );
}

export default App;
