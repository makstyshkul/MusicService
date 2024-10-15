import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import WeeklyTopSongs from "./components/weeklyTop/WeeklyTopSongs";
import NewSongs from "./components/newSongs/NewSongs";
import TrendingSongs from "./components/trendingSongs/TrendingSongs";
import PopularArtists from "./components/popularArtists/PopularArtists";
import PopularMusic from "./components/popularMusic/PopularMusic";
import TopAlbums from "./components/topAlbums/TopAlbums";
import MoodPlaylist from "./components/moodPlaylist/MoodPlaylist";
import JoinUs from "./components/joinUs/JoinUs";
import Footer from "./components/footer/Footer";





function App() {
  return (
    <>
      <CssBaseline />
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212'}}>
        <Sidebar />
        <div style={{  flex: 1 }}>
          <Main />
			 <WeeklyTopSongs />
			 <NewSongs />
			 <TrendingSongs />
			 <PopularArtists />
			 <PopularMusic />
			 <TopAlbums />
			 <MoodPlaylist />
			 <JoinUs />
			 <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

