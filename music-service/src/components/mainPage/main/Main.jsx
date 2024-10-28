// import {React, useState} from 'react';
// import { Box, Button, Typography, TextField } from '@mui/material';
// import { styled } from '@mui/system';
// import Background from "./assets/images/background.png";
// import { InputAdornment, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import Auth from "../../authPopUp/Auth"

// const HeroSection = () => {
//   const StyledButton = styled(Button)(({ theme }) => ({
//     margin: '10px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     borderRadius: '5%',
//     padding: '10px 20px',
//   }));

//   const [isDialogOpen, setDialogOpen] = useState(false);
//   const [initialTab, setInitialTab] = useState(0);

//   const handleOpenDialog = (tabIndex) => {
// 	setInitialTab(tabIndex);
// 	setDialogOpen(true);
//  };

//  const handleCloseDialog = () => {
// 	setDialogOpen(false);
//  };

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${Background})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '695px',
// 		  width: '1381px',
//         display: 'flex',
//         flexDirection: 'column',
//         color: '#fff',
// 		  marginLeft: '435px',
// 		  marginTop: '50px',
// 		  borderRadius: '3%',
// 		  paddingTop: '16px',
// 		  paddingLeft: '25px'
//       }}>
//       {/* Пошук і меню */}
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           maxWidth: '1300px',
//         }}
//       >
//         <TextField
//           variant="outlined"
//           placeholder="Search for musics, artists..."
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <IconButton>
//                   <SearchIcon sx={{ color: '#fff' }} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//             sx: {
//               borderRadius: '20px',
//               backgroundColor: '#121212',
//               color: '#fff',
//             },
//             style: { color: '#fff' },
//           }}
//           sx={{
//             width: '400px',
//             boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//           }}
//         />
//         <Box sx={{ display: 'flex', marginLeft: '50px', alignItems: 'center'}}>
//           <Typography sx={{ color: '#fff', cursor: 'pointer', width: '120px', fontSize: '22px' }}>About Us</Typography>
//           <Typography sx={{ color: '#fff', cursor: 'pointer', width: '120px', fontSize: '22px', paddingLeft: '20px' }}>Contact</Typography>
//           <Typography sx={{ color: '#fff', cursor: 'pointer', width: '120px', fontSize: '22px', paddingLeft: '20px' }}>Premium</Typography>
//         </Box>
// 		  <Box sx={{display: 'flex', marginLeft: '100px'}}>
		  
// 			<Button variant='outlined' onClick={() => handleOpenDialog(1)}  sx={{borderColor: '#FF1493', color: '#FF1493',  width: '200px',}}>Login</Button>
// 			<Button variant='contained' onClick={() => handleOpenDialog(0)} sx={{backgroundColor: '#FF1493', color: '#fff', marginLeft: '25px',  width: '200px',}}>Sign Up</Button>
// 			<Auth open={isDialogOpen} onClose={handleCloseDialog} initialTab={initialTab} />
// 		  </Box>
//       </Box>

//       {/* Main Heading */}
//       <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop: '125px', width: '550px' }}>
//         All the <span style={{ color: '#FF1493' }}>Best Songs</span>  in One Place
//       </Typography>

//       {/* Subtext */}
//       <Typography variant="body1" sx={{ maxWidth: '600px', marginTop: '25px',  width: '450px'  }}>
//         On our website, you can access an amazing collection of popular and new songs.
//         Stream your favorite tracks in high quality and enjoy without interruptions.
//         Whatever your taste in music, we have it all for you!
//       </Typography>

//       {/* Buttons */}
//       <Box sx={{ display: 'flex', marginTop: '20px' }}>
//         <StyledButton
//           variant="contained"
//           sx={{ backgroundColor: '#FF1493', color: '#fff' }}
//         >
//           Discover Now
//         </StyledButton>
//         <StyledButton
//           variant="outlined"
//           sx={{ borderColor: '#00BFFF', color: '#00BFFF' }}
//         >
//           Create Playlist
//         </StyledButton>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;








import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, TextField, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import Background from "./assets/images/background.png";
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Auth from "../../authPopUp/Auth";
import { useAuth } from '../../../hooks/AuthHook'; 

const HeroSection = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    margin: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '5%',
    padding: '10px 20px',
  }));

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [initialTab, setInitialTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const { user, logout } = useAuth(); 

  const handleOpenDialog = (tabIndex) => {
    setInitialTab(tabIndex);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '695px',
        width: '1381px',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        marginLeft: '435px',
        marginTop: '50px',
        borderRadius: '3%',
        paddingTop: '16px',
        paddingLeft: '25px',
      }}
    >
      {/* Пошук і меню */}
      <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '1300px' }}>
        <TextField
          variant="outlined"
          placeholder="Search for musics, artists..."
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon sx={{ color: '#fff' }} />
                </IconButton>
              </InputAdornment>
            ),
            sx: { borderRadius: '20px', backgroundColor: '#121212', color: '#fff' },
          }}
          sx={{
            width: '400px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Box sx={{ display: 'flex', marginLeft: '50px', alignItems: 'center' }}>
          <Typography sx={{ color: '#fff', cursor: 'pointer', width: '120px', fontSize: '22px' }}>About Us</Typography>
          <Typography sx={{ color: '#fff', cursor: 'pointer', width: '120px', fontSize: '22px', paddingLeft: '20px' }}>Contact</Typography>
          <Typography sx={{ color: '#fff', cursor: 'pointer', width: '120px', fontSize: '22px', paddingLeft: '20px' }}>Premium</Typography>
        </Box>
        <Box sx={{ display: 'flex', marginLeft: '100px' }}>
          {user ? (
            <IconButton onClick={handleMenuOpen}>
              <Avatar src={user.photoURL} alt={user.name} sx={{ width: 40, height: 40 }} />
            </IconButton>
          ) : (
            <>
              <Button variant="outlined" onClick={() => handleOpenDialog(1)} sx={{ borderColor: '#FF1493', color: '#FF1493', width: '200px' }}>Login</Button>
              <Button variant="contained" onClick={() => handleOpenDialog(0)} sx={{ backgroundColor: '#FF1493', color: '#fff', marginLeft: '25px', width: '200px' }}>Sign Up</Button>
            </>
          )}
          <Auth open={isDialogOpen} onClose={handleCloseDialog} initialTab={initialTab} />
        </Box>

        {/* Меню профілю */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={() => { /* Функція переходу до налаштувань */ }}>Profile Settings</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>

      {/* Основний контент */}
      <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop: '125px', width: '550px' }}>
        All the <span style={{ color: '#FF1493' }}>Best Songs</span> in One Place
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '600px', marginTop: '25px', width: '450px' }}>
        On our website, you can access an amazing collection of popular and new songs.
        Stream your favorite tracks in high quality and enjoy without interruptions.
        Whatever your taste in music, we have it all for you!
      </Typography>
      <Box sx={{ display: 'flex', marginTop: '20px' }}>
        <StyledButton variant="contained" sx={{ backgroundColor: '#FF1493', color: '#fff' }}>Discover Now</StyledButton>
        <StyledButton variant="outlined" sx={{ borderColor: '#00BFFF', color: '#00BFFF' }}>Create Playlist</StyledButton>
      </Box>
    </Box>
  );
};

export default HeroSection;
