import React, { useState } from 'react';
import { Box, Typography, Button, Stack, Divider } from '@mui/material';
import { scroller } from 'react-scroll';
import Navbar from './Navbar';
import DrawerComponent from './DrawerComponent';
import { palette } from '../../theme';
import CoverImage from '../../images/cover1.jpg';

const navlinks = [
  { label: 'Profile', id: 'Profile' },
  { label: 'Expertise', id: 'Expertise' },
  { label: 'Certifications', id: 'Certifications' },
  { label: 'Work', id: 'Work' },
  { label: 'Contact', id: 'Contact' },
];

const stats = [
  { value: '18+', label: 'Years in IT Delivery' },
  { value: '6', label: 'Professional Certifications' },
  { value: 'Global', label: 'Cross-Cultural Team Leadership' },
];

function HeaderComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen((v) => !v);

  return (
    <Box id="Profile">
      <Navbar navlinks={navlinks} handleDrawerToggle={handleDrawerToggle} />
      <DrawerComponent open={drawerOpen} handleDrawerToggle={handleDrawerToggle} navlinks={navlinks} />

      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `linear-gradient(120deg, rgba(10,31,51,0.94), rgba(15,42,68,0.88)), url(${CoverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box sx={{ maxWidth: 1120, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 14, md: 10 }, width: '100%' }}>
          <Typography
            variant="overline"
            sx={{ color: palette.gold, letterSpacing: '0.2em', fontSize: 13 }}
          >
            Technical Delivery & Program Manager !
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
              lineHeight: 1.1,
              mt: 1.5,
              mb: 2.5,
            }}
          >
            Raja Chatterjee
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.82)',
              fontWeight: 400,
              maxWidth: 640,
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            18+ years of experience in IT Industry, currently working as a Technical Delivery Manager, managing a large team for Oracle Retail AMS & Implementation project. 
            Have solid experience and exposures on handling multiple complex programs, planning, budgeting, Transition planning, resourcing, financials, customer engagements & stakeholder management.
            <br></br>
            I lead cross-cultural delivery teams through complex enterprise programs —
            spanning Oracle Fusion HCM, Oracle Retail, Salesforce, SAP Concur, Guidewire and modern CI/CD —
            turning ambitious roadmaps into shipped, stable outcomes.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 7 }}>
            <Button
              onClick={() =>
                scroller.scrollTo('Certifications', {
                  spy: true,
                  smooth: true,
                  offset: -70,
                  duration: 450,
                })
              }
              variant="contained"
              sx={{
                backgroundColor: palette.gold,
                color: palette.navyDeep,
                '&:hover': { backgroundColor: palette.goldSoft },
              }}
            >
              View Certifications
            </Button>
            <Button
              onClick={() =>
                scroller.scrollTo('Contact', {
                  spy: true,
                  smooth: true,
                  offset: -70,
                  duration: 450,
                })
              }
              variant="outlined"
              sx={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: '#fff',
                '&:hover': { borderColor: palette.gold, color: palette.gold },
              }}
            >
              Get In Touch
            </Button>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: 'rgba(255,255,255,0.18)', display: { xs: 'none', sm: 'block' } }}
              />
            }
            spacing={{ xs: 2, sm: 5 }}
          >
            {stats.map((s) => (
              <Box key={s.label}>
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    color: palette.gold,
                    fontSize: '1.8rem',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, mt: 0.5 }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderComponent;
