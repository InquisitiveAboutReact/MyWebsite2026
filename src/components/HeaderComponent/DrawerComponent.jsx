import React from 'react';
import { Drawer, Box, List, ListItemButton, ListItemText } from '@mui/material';
import { scroller } from 'react-scroll';
import { palette } from '../../theme';

function DrawerComponent({ open, handleDrawerToggle, navlinks }) {
  return (
    <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
      <Box
        sx={{
          width: 260,
          height: '100%',
          backgroundColor: palette.navyDeep,
          pt: 4,
        }}
        role="presentation"
      >
        <List>
          {navlinks.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => {
                handleDrawerToggle();
                scroller.scrollTo(item.id, {
                  spy: true,
                  smooth: true,
                  offset: -60,
                  duration: 450,
                });
              }}
              sx={{
                color: '#fff',
                '&:hover': { color: palette.gold },
                py: 1.5,
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default DrawerComponent;
