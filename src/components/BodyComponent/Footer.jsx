import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import ProfileVisit from './ProfileVisit';
import { palette } from '../../theme';

function Footer() {
  return (
    <Box sx={{ backgroundColor: palette.navyDeep, py: 4, textAlign: 'center' }}>
      <Divider sx={{ borderColor: palette.hairline, maxWidth: 80, mx: 'auto', mb: 3 }} />
      <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, mb: 1 }}>
        Designed & Maintained by Raja Chatterjee
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, mb: 1.5 }}>
        All rights reserved, 2026 ©
      </Typography>
      <ProfileVisit />
    </Box>
  );
}

export default Footer;
