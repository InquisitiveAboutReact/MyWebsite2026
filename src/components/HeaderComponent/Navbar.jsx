import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { scroller } from 'react-scroll';
import { palette } from '../../theme';
import ProfileImage from '../../images/profile.jpg';

function Navbar({ navlinks, handleDrawerToggle }) {
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(10, 31, 51, 0.92)' : 'rgba(10, 31, 51, 0.35)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${scrolled ? palette.hairline : 'transparent'}`,
        transition: 'background-color 250ms ease, border-color 250ms ease',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            component="img"
            src={ProfileImage}
            alt="Raja Chatterjee"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              objectFit: 'cover',
              border: `2px solid ${palette.gold}`,
            }}
          />
          <Box
            sx={{
              color: '#fff',
              fontFamily: '"Playfair Display", serif',
              fontSize: 18,
              letterSpacing: '0.02em',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Raja Chatterjee
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {navlinks.map((item) => (
            <Button
              key={item.id}
              onClick={() =>
                scroller.scrollTo(item.id, {
                  spy: true,
                  smooth: true,
                  offset: -70,
                  duration: 450,
                })
              }
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 13,
                '&:hover': { color: palette.gold },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'flex', md: 'none' }, color: palette.gold }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
