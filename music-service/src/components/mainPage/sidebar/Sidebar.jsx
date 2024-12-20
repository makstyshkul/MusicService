import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AlbumIcon from '@mui/icons-material/Album';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../service/firebaseConfig";
import Auth from '../../authPopUp/Auth';

const Sidebar = () => {
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [initialTab, setInitialTab] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openLoginDialog = () => {
    setInitialTab(1);
    setAuthOpen(true);
  };

  const closeLoginDialog = () => {
    setAuthOpen(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleAuthAction = async () => {
    if (isLoggedIn) {
      await signOut(auth);
      alert("You have successfully logged out.");
    } else {
      openLoginDialog();
    }
  };

  return (
    <Box
      sx={{
        width: '310px',
        height: '1000vh',
        backgroundColor: '#121212',
        color: '#fff',
        padding: '50px',
        borderRight: '1px solid #FF00FF',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          background: 'linear-gradient(45deg, #EE10B0, #0E9EEF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingBottom: '20px',
        }}
      >
        MusicWave
      </Typography>

      {/* Conditional rendering based on authentication status */}
      {isLoggedIn ? (
        <>
          {/* Full Sidebar Menu */}
          <List>
            <Typography variant="h7" sx={{ color: '#EE82EE' }}>Menu</Typography>
            <List sx={{ marginTop: '5px' }}>
              <ListItem button sx={{ backgroundColor: '#FF1493', color: '#fff', borderRadius: '8px' }}>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Discover" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AlbumIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Albums" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Artists" />
              </ListItem>
            </List>
          </List>
          <Divider sx={{ backgroundColor: '#333', margin: '10px 0' }} />
          <List>
            <Typography variant="h7" sx={{ color: '#EE82EE' }}>Library</Typography>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Recently Added" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <BarChartIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Most Played" />
              </ListItem>
            </List>
          </List>
          <Divider sx={{ backgroundColor: '#333', margin: '10px 0' }} />
          <List>
            <Typography variant="h7" sx={{ color: '#EE82EE' }}>Playlist and Favorites</Typography>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <FavoriteIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Your Favorites" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlaylistPlayIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Your Playlist" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlaylistAddIcon sx={{ color: '#00BFFF' }} />
                </ListItemIcon>
                <ListItemText primary="Add Playlist" />
              </ListItem>
            </List>
          </List>
          <Divider sx={{ backgroundColor: '#333', margin: '10px 0' }} />
          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={handleAuthAction}>
              <ListItemIcon>
                <ExitToAppIcon sx={{ color: '#FF1493' }} />
              </ListItemIcon>
              <ListItemText primary="Logout" style={{ cursor: 'pointer' }} />
            </ListItem>
          </List>
        </>
      ) : (
        <>
          {/* Limited Sidebar Menu for Guests */}
          <List>
            <Typography variant="h7" sx={{ color: '#EE82EE' }}>Menu</Typography>
            <List sx={{ marginTop: '5px' }}>
              <ListItem button sx={{ backgroundColor: '#FF1493', color: '#fff', borderRadius: '8px' }}>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Discover" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AlbumIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Albums" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Artists" />
              </ListItem>
            </List>
          </List>
          <Divider sx={{ backgroundColor: '#333', margin: '10px 0' }} />
          <List>
            <ListItem button onClick={handleAuthAction}>
              <ListItemIcon>
                <ExitToAppIcon sx={{ color: '#FF1493' }} />
              </ListItemIcon>
              <ListItemText primary="Login" style={{ cursor: 'pointer' }} />
            </ListItem>
          </List>
        </>
      )}

      <Auth open={isAuthOpen} onClose={closeLoginDialog} />
    </Box>
  );
};

export default Sidebar;
