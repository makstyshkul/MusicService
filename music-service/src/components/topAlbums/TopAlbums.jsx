import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Adele from "./images/adele.png";
import Drake from "./images/drake.png";
import HarryStyles from "./images/harry.png";
import Lana from "./images/lana.png";
import Week from "./images/week.png";


const songs = [
  {
    title: "Adele 21",
    artist: "Adele",
    cover: `${Adele}`,
  },
  {
    title: "Scorpion",
    artist: "Drake",
    cover: `${Drake}`,
	  },
  {
    title: "Harry's House",
    artist: "Harry Styles",
	 cover: `${HarryStyles}`,
  },
  {
    title: "Born To Die",
    artist: "Lana Del Ray",
	 cover: `${Lana}`,
  },
  {
    title: "Beauty Behind the...",
    artist: "The Weekend",
	 cover: `${Week}`,
  },
];

const TopAlbums = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', marginTop: '85px', marginLeft: '435px' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        Top <span style={{ color: '#ff69b4' }}>Albums</span>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '50px' }}>
			{songs.map((song) => (
				<Card key={song.id} sx={{ bgcolor: '#181818', height: '285px', width: '215px', display: 'flex', flexDirection: 'column', '&:not(:first-of-type)': { marginLeft: '45px' } , borderRadius: '5%' }}>
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

export default TopAlbums;