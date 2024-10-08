import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';



const flags = {
  ua: 'ua',
  en: 'en',
};

const Header = () => {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [language, setLanguage] = useState('ua');

  const handleProfileMenu = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLanguageMenu = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    handleLanguageClose();
  };

  return (
    <AppBar position="static" sx={{ background: "#000000"}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Логотип
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Button color="inherit">Головна</Button>
          <Button color="inherit">Про нас</Button>
          <Button color="inherit">Контакти</Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account"
            onClick={handleProfileMenu} 
            sx={{ mr: 2 }}
          >
            <AccountCircle />
          </IconButton>

          <IconButton color="inherit" onClick={handleLanguageMenu} sx={{ mx: 2 }}>
            <Typography variant="h6">{flags[language]}</Typography>
          </IconButton>

          <Menu
            anchorEl={languageAnchorEl} 
            open={Boolean(languageAnchorEl)}
            onClose={handleLanguageClose}
          >
            <MenuItem onClick={() => handleLanguageChange('ua')}>
              🇺🇦 Українська
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange('en')}>
              🇺🇸 English
            </MenuItem>
          </Menu>

          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Brightness4Icon />
          </IconButton>
        </Box>
      </Toolbar>

      <Menu
        id="menu-appbar"
        anchorEl={profileAnchorEl} 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileClose}
      >
        <MenuItem onClick={handleProfileClose}>Профіль</MenuItem>
        <MenuItem onClick={handleProfileClose}>Налаштування</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;