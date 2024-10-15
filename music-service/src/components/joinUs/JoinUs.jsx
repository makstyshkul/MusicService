import React from 'react';
import { TextField, Button, Box, Typography, Tabs, Tab } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { useState } from 'react';

const JoinUs = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: '#121212', marginLeft: '310px' }}
    >
	     <Box
        sx={{
          color: '#fff',
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Join Our Platform
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, width: '475px', height: '150px' }}>
          You can be one of the <span style={{ color: '#ff69b4' }}>members</span> of our platform by just adding some
          necessary information. If you already have an account on our website, you can just hit the{' '}
          <span style={{ color: '#ff69b4' }}>Login</span> button.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '675px',
          bgcolor: '#56006e',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
			 color: '#ffffff',
			 marginLeft: '200px'
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          centered
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Sign Up" />
          <Tab label="Login" />
        </Tabs>

        {tabValue === 0 && (
          <Box mt={3}>
			 <TextField
					fullWidth
					label="Name"
					variant="outlined"
					margin="normal"
					InputProps={{
						style: { color: '#fff' }, 
						sx: {
							'& .MuiOutlinedInput-notchedOutline': {
							borderColor: '#fff', 
							},
							'&:hover .MuiOutlinedInput-notchedOutline': {
							borderColor: '#ff69b4', 
							},
							'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
							borderColor: '#ae00ff', 
							},
						},
					}}
					InputLabelProps={{
						style: { color: '#fff' }, 
					}}
					/>
					<TextField
					fullWidth
					label="Phone Number"
					variant="outlined"
					margin="normal"
					InputProps={{
						style: { color: '#fff' }, 
						sx: {
							'& .MuiOutlinedInput-notchedOutline': {
							borderColor: '#fff', 
							},
							'&:hover .MuiOutlinedInput-notchedOutline': {
							borderColor: '#ff69b4', 
							},
							'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
							borderColor: '#ae00ff', 
							},
						},
					}}
					InputLabelProps={{
						style: { color: '#fff' }, 
					}}
					/>
					<TextField
					fullWidth
					label="Email"
					variant="outlined"
					margin="normal"
					InputProps={{
						style: { color: '#fff' }, 
						sx: {
							'& .MuiOutlinedInput-notchedOutline': {
							borderColor: '#fff', 
							},
							'&:hover .MuiOutlinedInput-notchedOutline': {
							borderColor: '#ff69b4', 
							},
							'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
							borderColor: '#ae00ff', 
							},
						},
					}}
					InputLabelProps={{
						style: { color: '#fff' }, 
					}}
					/>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#ff00cc',
                '&:hover': {
                  backgroundColor: '#cc00a3',
                },
              }}
            >
              Sign Up
            </Button>

            <Typography align="center" sx={{ mt: 2, color: '#fff' }}>
              Or
            </Typography>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                mt: 2,
                color: '#fff',
                borderColor: '#fff',
                '&:hover': {
                  borderColor: '#ff00cc',
                },
              }}
            >
              Sign Up With Google
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default JoinUs;

