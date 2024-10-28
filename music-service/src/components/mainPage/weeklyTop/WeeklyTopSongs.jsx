import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ImagineDragons from "./images/imdr.png";
import Adele from "./images/adele.png";
import Eminem from "./images/em.png";
import TheNeighborhood from "./images/neigh.png";
import Måneskin from "./images/man.png";


const songs = [
  {
    title: "Whatever It Takes",
    artist: "Imagine Dragons",
    cover: `${ImagineDragons}`,
  },
  {
    title: "Skyfall",
    artist: "Adele",
    cover: `${Adele}`,
	  },
  {
    title: "Superman",
    artist: "Eminem",
	 cover: `${Eminem}`,
  },
  {
    title: "Softcore",
    artist: "The Neighborhood",
	 cover: `${TheNeighborhood}`,
  },
  {
    title: "The Lonliest",
    artist: "Måneskin",
	 cover: `${Måneskin}`,
  },
];

const WeeklyTopSongs = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', marginTop: '65px', marginLeft: '435px' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        Weekly Top <span style={{ color: '#ff69b4' }}>Songs</span>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '20px' }}>
			{songs.map((song) => (
				<Card key={song.id} sx={{ bgcolor: '#181818', height: '285px', width: '215px', display: 'flex', flexDirection: 'column', '&:not(:first-of-type)': { marginLeft: '50px' }, borderRadius: '5%' }}>
					<CardMedia
					component="img"
					height="200"
					image={song.cover} 
					alt={song.title}
					/>
					<CardContent>
					<Typography variant="h7" component="div" noWrap color='#ffffff'>
						{song.title}
					</Typography>
					<Typography variant="body2" color='#cccac6' marginTop={'5px'}>
						{song.artist}
					</Typography>
					</CardContent>
				</Card>
			))}
			<Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '25px'}}>
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
					marginTop: '100px'
					
				}}>
					<AddIcon sx={{ fontSize: 30, color: '#b3b3b3' }} />
				</Card>
				<Typography sx={{ marginTop: '5px', marginLeft: '10px'}}>View All</Typography>
			</Box>
			
			</Box>
    </Box>
  );
};

export default WeeklyTopSongs;