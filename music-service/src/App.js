import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import WeeklyTopSongs from "./components/weeklyTop/WeeklyTopSongs";
import NewSongs from "./components/newSongs/NewSongs";
import TrendingSongs from "./components/trendingSongs/TrendingSongs";



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
        </div>
      </div>
    </>
  );
}

export default App;
