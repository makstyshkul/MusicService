import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Gossip from "./images/gossip.png";
import Soy from "./images/soy.png";
import Sly from "./images/sly.png";


const songs = [
  {
	 title: "Gossip",
    artist: "Måneskin",
    cover: `${Gossip}`,
	 viewers: "3M views",
  },
  {
	title: "Shape Of You",
	artist: "Ed Sheeran",
	cover: `${Soy}`,
	viewers: "5M views",
 },
 {
	title: "Someone Like You",
	artist: "Adele",
	cover: `${Sly}`,
	viewers: "3M views",
 },
];

const PopularMusic = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', marginTop: '75px', marginLeft: '435px' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        Music <span style={{ color: '#ff69b4' }}>Video</span>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '20px' }}>
			{songs.map((song) => (
				<Card key={song.id} sx={{ bgcolor: '#181818', height: '260px', width: '350px', display: 'flex', flexDirection: 'column', '&:not(:first-of-type)': { marginLeft: '90px' }, borderRadius: '5%', marginTop: '20px' }}>
					<CardMedia
					component="img"
					height="190"
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
					<Typography variant="body2" color='#cccac6' marginTop={'-20px'} marginLeft={'75%'}>
						{song.viewers}
					</Typography>
					</CardContent>
				</Card>
			))}
			<Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '50px'}}>
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

export default PopularMusic;