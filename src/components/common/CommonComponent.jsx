import React from 'react';
import { Box, Typography } from '@mui/material';
import { palette } from '../../theme';

/**
 * Signature element: a small gold "milestone marker" — a dot on a rule —
 * echoing the roadmap / milestone language of delivery & program management.
 * Used consistently to introduce every section.
 */
export function SectionEyebrow({ label, dark }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
      <Box
        sx={{
          width: 9,
          height: 9,
          borderRadius: '50%',
          backgroundColor: palette.gold,
          flexShrink: 0,
        }}
      />
      <Box sx={{ width: 40, height: '1px', backgroundColor: palette.gold, opacity: 0.6 }} />
      <Typography
        variant="overline"
        sx={{ color: dark ? palette.goldSoft : palette.gold, fontSize: 12 }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, dark, align = 'left' }) {
  return (
    <Box sx={{ textAlign: align, mb: 6 }}>
      <Box sx={{ display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
        <SectionEyebrow label={eyebrow} dark={dark} />
      </Box>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '1.9rem', md: '2.4rem' },
          color: dark ? '#fff' : palette.navyDeep,
          mb: subtitle ? 1.5 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: dark ? 'rgba(255,255,255,0.72)' : palette.slate,
            maxWidth: 640,
            mx: align === 'center' ? 'auto' : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
