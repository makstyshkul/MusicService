import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Sad from "./images/sad.png";
import Chill from "./images/chill.png";
import Workout from "./images/workout.png";
import Love from "./images/love.png";
import Happy from "./images/happy.png";


const songs = [
  {
    genre: "Sad Playlist",
    cover: `${Sad}`,
  },
  {
	genre: "Chill Playlist",
	cover: `${Chill}`,
 },
 {
	genre: "Workout Playlist",
	cover: `${Workout}`,
 },
 {
	genre: "Love Playlist",
	cover: `${Love}`,
 },
 {
	genre: "Happy Playlist",
	cover: `${Happy}`,
 },

];

const MoodPlaylist = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', marginTop: '85px', marginLeft: '435px' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        Mood <span style={{ color: '#ff69b4' }}>Playlist</span>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '50px' }}>
			{songs.map((song) => (
				<Card key={song.id} sx={{ bgcolor: '#181818', height: '225px', width: '210px', display: 'flex', flexDirection: 'column', '&:not(:first-of-type)': { marginLeft: '50px' } , borderRadius: '5%' }}>
					<CardMedia
					component="img"
					height="175"
					image={song.cover} 
					alt={song.title}
					/>
					<CardContent>
					<Typography variant="h7" component="div" noWrap color='#ffffff'>
						{song.genre}
					</Typography>
					</CardContent>
				</Card>
			))}
			<Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '30px'}}>
				<Card sx={{ 
					bgcolor: '#181818', 
					color: 'white', 
					height: '75px', 
					width: '75px',
					display: 'flex', 
					flexDirection: 'column',
					justifyContent: 'center', 
					alignItems: 'center',
					borderRadius: '50%',
					marginTop: '50px'
					
				}}>
					<AddIcon sx={{ fontSize: 30, color: '#b3b3b3' }} />
				</Card>
				<Typography sx={{ marginTop: '5px', marginLeft: '10px'}}>View All</Typography>
			</Box>
			
			</Box>
    </Box>
  );
};

export default MoodPlaylist;