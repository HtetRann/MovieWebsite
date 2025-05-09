import * as React from 'react';
// import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Movies from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  
}))

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    if (value===0) navigate("/");
    else if (value===1) navigate("/movies");
    else if (value===2) navigate("/series");
    else if (value===3) navigate("/search");
  },[value, navigate])

  return (
    <Root sx={{
        width: '100%', 
        position:"fixed",
        bottom: 0,
        zIndex: 100
    }}>
      <BottomNavigation
        sx={{ width: '100%',backgroundColor: '#2d313a' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
            style={{ color:'white', backgroundColor: '#2d313a' }} 
            label="Trending" 
            icon={<WhatshotIcon />} 
        />
        
        <BottomNavigationAction 
          style={{ color:'white', backgroundColor: '#2d313a' }} 
          label="Movies" 
          icon={<Movies />} 
        />

        <BottomNavigationAction 
          style={{ color:'white', backgroundColor: '#2d313a' }} 
          label="TV Series" 
          icon={<TvIcon />}
        />

        <BottomNavigationAction 
          style={{ color:'white', backgroundColor: '#2d313a' }} 
          label="Search" 
          icon={<SearchIcon />}
        />

      </BottomNavigation>
      </Root>
  );
}