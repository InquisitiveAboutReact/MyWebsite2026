import React from 'react';
import { Box, Container, Stack, IconButton, Chip, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SectionHeading } from '../common/CommonComponent';
import { palette } from '../../theme';

const otherProfiles = [
  { label: 'Salesforce Trailblazer', href: 'https://www.salesforce.com/trailblazer/rajachatterjee2024' },
  { label: 'Docker Hub', href: 'https://hub.docker.com/repository/docker/rajach2023/' },
];

function Contact() {
  return (
    <Box id="Contact" sx={{ backgroundColor: palette.paper, py: { xs: 10, md: 14 } }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <SectionHeading
          eyebrow="Let's Connect"
          title="Get In Touch"
          subtitle="Open to connecting on LinkedIn or exploring my earlier engineering work on GitHub."
          align="center"
        />

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Tooltip title="LinkedIn">
            <IconButton
              href="https://www.linkedin.com/in/rajachatterjee84/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: `1px solid ${palette.hairline}`,
                color: palette.navyDeep,
                '&:hover': { backgroundColor: palette.gold, color: '#fff' },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              href="https://github.com/InquisitiveAboutReact"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: `1px solid ${palette.hairline}`,
                color: palette.navyDeep,
                '&:hover': { backgroundColor: palette.gold, color: '#fff' },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Stack>

        <Stack direction="row" spacing={1.5} justifyContent="center" flexWrap="wrap" useFlexGap>
          {otherProfiles.map((p) => (
            <Chip
              key={p.label}
              label={p.label}
              component="a"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              clickable
              size="small"
              sx={{
                backgroundColor: 'rgba(201,162,75,0.10)',
                border: `1px solid ${palette.hairline}`,
                color: palette.navyDeep,
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Contact;
