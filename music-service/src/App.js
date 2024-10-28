import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./components/mainPage/sidebar/Sidebar";
import Main from "./components/mainPage/main/Main";
import WeeklyTopSongs from "./components/mainPage/weeklyTop/WeeklyTopSongs";
import NewSongs from "./components/mainPage/newSongs/NewSongs";
import TrendingSongs from "./components/mainPage/trendingSongs/TrendingSongs";
import PopularArtists from "./components/mainPage/popularArtists/PopularArtists";
import PopularMusic from "./components/mainPage/popularMusic/PopularMusic";
import TopAlbums from "./components/mainPage/topAlbums/TopAlbums";
import MoodPlaylist from "./components/mainPage/moodPlaylist/MoodPlaylist";
import Footer from "./components/mainPage/footer/Footer";
import { AuthProvider } from './hooks/AuthHook';





function App() {
  return (
    <>
      <CssBaseline />
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212'}}>
        <Sidebar />
        <div style={{  flex: 1 }}>
		    <AuthProvider><Main /></AuthProvider>
			 <WeeklyTopSongs />
			 <NewSongs />
			 <TrendingSongs />
			 <PopularArtists />
			 <PopularMusic />
			 <TopAlbums />
			 <MoodPlaylist />
			 <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

