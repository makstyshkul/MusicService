import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Eminem from "./images/em.png";
import TheWeekend from "./images/week.png";
import Adele from "./images/adele.png";
import LanaDelRay from "./images/lana.png";
import HarryStyles from "./images/harry.png";
import BillieEilish from "./images/billie.png";



const songs = [
  {
    artist: "Eminem",
    cover: `${Eminem}`,
  },
  {
    artist: "TheWeekend",
    cover: `${TheWeekend}`,
	  },
  {
    artist: "Adele",
	 cover: `${Adele}`,
  },
  {
    artist: "LanaDelRay",
	 cover: `${LanaDelRay}`,
  },
  {
    artist: "HarryStyles",
	 cover: `${HarryStyles}`,
  },
  {
	artist: "BillieEilish",
	cover: `${BillieEilish}`,
 },
];

const PopularArtists = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', marginTop: '65px', marginLeft: '435px' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
       Popular <span style={{ color: '#ff69b4' }}>Artists</span>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '40px' }}>
			{songs.map((song) => (
				<Card key={song.id} sx={{ bgcolor: 'inherit', height: '178px', width: '135px', display: 'flex', flexDirection: 'column','&:not(:first-of-type)': { marginLeft: '78px' }  }}>
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
					<Typography variant="body2" color='#cccac6' marginTop={'5px'} display={'flex'} justifyContent={'center'}>
						{song.artist}
					</Typography>
					</CardContent>
				</Card>
			))}
			<Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '80px'}}>
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
					marginTop: '30px'
					
				}}>
					<AddIcon sx={{ fontSize: 30, color: '#b3b3b3' }} />
				</Card>
				<Typography sx={{ marginTop: '5px', marginLeft: '10px'}}>View All</Typography>
			</Box>
			
			</Box>
    </Box>
  );
};

export default PopularArtists;