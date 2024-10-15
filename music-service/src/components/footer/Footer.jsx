import React from 'react';
import { Box, Typography, Link, List, ListItem, ListItemText } from '@mui/material';
import { Facebook, Instagram, Twitter, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ marginLeft: '435px', display: 'flex' }}>
	 	<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			color: '#fff',
		}}>
			<Typography variant='h3'>About</Typography>
			<Typography width={'350px'} height={'150px'} mt={1}>Melodies is a website that has been created for over <span style={{ color: '#ff69b4' }}>5 year’s</span>  now and it is one of the most famous music player website’s in the world. in this website you can listen and download songs for free. also of you want no limitation you can buy our <span style={{ color: '#ff69b4' }}>premium pass’s.</span></Typography>
		</Box>
		<Box sx={{
			display: 'flex',
			width: '475px',
			marginLeft: '100px',
			gap: 6
		}}>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				color: '#fff',
				alignItems: 'center'
			}}>
				<Typography variant='h3'>Melodies</Typography>
				<Box sx={{
					border: '2px solid #fff',
					width: '190px',
					height: '0px',
					mt: 1
				}}></Box>
				<List>
					<ListItem>
					<ListItemText primary="Songs" />
					</ListItem>
					<ListItem>
					<ListItemText primary="Radio" />
					</ListItem>
					<ListItem>
					<ListItemText primary="Podcast" />
					</ListItem>
				</List>
			</Box>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				color: '#fff',
				alignItems: 'center'
			}}>
				<Typography variant='h3'>Access</Typography>
				<Box sx={{
					border: '2px solid #fff',
					width: '160px',
					height: '0px',
					mt: 1
				}}></Box>
								<List>
					<ListItem>
					<ListItemText primary="Explor" />
					</ListItem>
					<ListItem>
					<ListItemText primary="Artists" />
					</ListItem>
					<ListItem>
					<ListItemText primary="Playlists" />
					</ListItem>
					<ListItem>
					<ListItemText primary="Albums" />
					</ListItem>
					<ListItem>
					<ListItemText primary="Trending" />
					</ListItem>
				</List>
			</Box>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				color: '#fff',
				alignItems: 'center'
			}}>
				<Typography variant='h3'>Contact</Typography>
				<Box sx={{
					border: '2px solid #fff',
					width: '170px',
					height: '0px',
					mt: 1
				}}></Box>
								<List>
					<ListItem>
					<ListItemText primary="About" />
					</ListItem>
					<ListItem>
					<ListItemText primary="Policy" />
					</ListItem>
					<ListItem>
					<ListItemText primary="Social Media" />
					</ListItem>
					<ListItem>
					<ListItemText primary="Support" />
					</ListItem>
				</List>
			</Box>
		</Box>
		  <Box sx={
			{
				display: 'flex',
				flexDirection: 'column',
				background: 'linear-gradient(45deg, #EE10B0, #0E9EEF)',
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				marginLeft: '205px',
				mt: 10
			}
		  }>
			<Typography 
        variant="h3" 
        sx={{  fontSize: '42px'}}
      >
        MusicWave
      </Typography>
		<Box sx={{ display: 'flex', gap: 4,  mt: 2, justifyContent: 'center' }}>
          <Link href="#" color="#fff"><Facebook /></Link>
          <Link href="#" color="#fff"><Instagram /></Link>
          <Link href="#" color="#fff"><Twitter /></Link>
          <Link href="#" color="#fff"><Phone /></Link>
        </Box>
		  </Box>
    </Box>
  );
};

export default Footer;
