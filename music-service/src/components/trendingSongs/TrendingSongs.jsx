import React from 'react';
import { Box, Typography } from '@mui/material';
import { Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Card } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import songs from "./data.js";

const TrendingSongs = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', marginTop: '65px', marginLeft: '435px' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        Trending <span style={{ color: '#ff69b4' }}>Songs</span>
      </Typography>

      <TableContainer sx={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650, borderCollapse: 'collapse' }} aria-label="song table">
          <TableHead>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom: 'none' }}>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell sx={{ color: '#ffffff', fontSize: '22px' }}>Release Date</TableCell>
              <TableCell sx={{ color: '#ffffff', fontSize: '22px' }}>Album</TableCell>
              <TableCell sx={{ color: '#ffffff', fontSize: '22px' }}>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song) => (
              <TableRow
                key={song.position}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  borderBottom: 'none',
                  '&:hover': { bgcolor: '#3d3d3d' }
                }}
              >
                <TableCell
                  sx={{ color: '#ffffff', fontSize: '22px', fontWeight: 'bold', borderBottom: 'none' }}
                  component="th"
                  scope="row"
                >
                  #{song.position}
                </TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>
                  <Box display="flex" alignItems="center">
                    <img src={song.cover} alt={song.title} style={{ width: 50, height: 50, marginRight: 10 }} />
                    <Box>
                      <Typography variant="body1" color="#ffffff">{song.title}</Typography>
                      <Typography variant="body2" color="#cccac6">{song.artist}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: '#cccac6', borderBottom: 'none' }}>{song.release}</TableCell>
                <TableCell sx={{ color: '#cccac6', borderBottom: 'none' }}>{song.album}</TableCell>
                <TableCell sx={{ color: '#cccac6', borderBottom: 'none' }} align="right">
                  <Box display="flex" alignItems="center">
                    <FavoriteIcon color="secondary" sx={{ marginRight: 1 }} />
                    {song.time}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
        <Card sx={{
          bgcolor: '#181818',
          color: 'white',
          height: '55px',
          width: '125px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10%'
        }}>
          <AddIcon sx={{ fontSize: 30, color: '#b3b3b3', marginRight: '5px' }} /> 
          View All
        </Card>
      </Box>
    </Box>
  );
};

export default TrendingSongs;
