import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, Tab, Tabs, TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import { Google as GoogleIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { registerUser, loginUser } from '../../service/UserService'; 

const Auth = ({ open, onClose, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setErrors({});
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = 'Invalid email format';
    }
    if (name === 'password') {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if (!passwordRegex.test(value)) error = 'Password must be 6+ characters, with an uppercase letter, a number, and a symbol';
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSignUp = async () => {
	try {
	  await registerUser(signUpData.email, signUpData.password, signUpData.name);
	  alert("Registration successful!"); 
	  onClose(); 
	  setSignUpData({
		name: '',
		email: '',
		password: ''
	 });
	} catch (error) {
	  console.error("Registration error:", error);
	  alert("Registration failed!"); 
	  console.log("Sign Up Data:", signUpData);
	}
 };

  const handleLogin = async () => {
    try {
      const user = await loginUser(loginData.email, loginData.password);
      console.log("Login successful!", user);
      alert(`Welcome back, ${user.email}!`); 
      onClose(); 
		setLoginData({
			email: '',
			password: ''
		 });
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed!"); 
    }
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ '& .MuiDialog-paper': { backgroundColor: '#FF1493', color: '#FFFFFF' } }}>
      <DialogTitle>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange} 
          centered 
          sx={{
            '& .MuiTab-root': { color: '#FFFFFF' },
            '& .Mui-selected': { color: '#FFFFFF', fontWeight: 'bold' }
          }}
        >
          <Tab label="Sign Up" />
          <Tab label="Login" />
        </Tabs>
      </DialogTitle>
      <DialogContent>
        {activeTab === 0 ? (
          // Форма для реєстрації (Sign Up)
          <Box display="flex" marginTop={'10px'} flexDirection="column" gap={2}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={signUpData.name}
              onChange={handleSignUpChange}
              InputProps={{
                style: { backgroundColor: '#FFFFFF', color: '#000', height: '50px', borderRadius: '8px' },
              }}
              InputLabelProps={{
                sx: { top: '-4px' }
              }}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              value={signUpData.email}
              onChange={handleSignUpChange}
              error={!!errors.email}
              helperText={errors.email}
              FormHelperTextProps={{
                sx: { color: '#FFFFFF !important' }
              }}
              InputProps={{
                style: { backgroundColor: '#FFFFFF', color: '#000', height: '50px', borderRadius: '8px' },
              }}
              InputLabelProps={{
                sx: { top: '-4px' }
              }}
            />
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              value={signUpData.password}
              onChange={handleSignUpChange}
              error={!!errors.password}
              helperText={errors.password}
              FormHelperTextProps={{
                sx: { color: '#FFFFFF !important' }
              }}
              InputProps={{
                style: { backgroundColor: '#FFFFFF', color: '#000', height: '50px', borderRadius: '8px' },
                sx: { padding: '0 12px' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { top: '-4px' }
              }}
            />
            <Button variant="contained" fullWidth sx={{ backgroundColor: '#4A148C', color: '#FFFFFF' }} onClick={handleSignUp}>
              Sign Up
            </Button>
            <Box textAlign="center" mt={2}>Or</Box>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{
                color: '#FFFFFF ',
                borderColor: '#FFFFFF',
                '&:hover': {
                  borderColor: '#4A148C'
                }
              }}
            >
              Sign Up with Google
            </Button>
          </Box>
        ) : (
          // Форма для входу (Login)
          <Box display="flex" marginTop={'10px'} flexDirection="column" gap={2}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              value={loginData.email}
              onChange={handleLoginChange}
              InputProps={{
                style: { backgroundColor: '#FFFFFF', color: '#000', height: '50px', borderRadius: '8px' },
              }}
              InputLabelProps={{
                sx: { top: '-4px' }
              }}
            />
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              value={loginData.password}
              onChange={handleLoginChange}
              InputProps={{
                style: { backgroundColor: '#FFFFFF', color: '#000', height: '50px', borderRadius: '8px' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { top: '-4px' }
              }}
            />
            <Button variant="contained" fullWidth sx={{ backgroundColor: '#4A148C', color: '#FFFFFF' }} onClick={handleLogin}>
              Login
            </Button>
            <Box textAlign="center" mt={2}>Or</Box>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{
                color: '#FFFFFF ',
                borderColor: '#FFFFFF',
                '&:hover': {
                  borderColor: '#4A148C'
                }
              }}
            >
              Login with Google
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Auth;
