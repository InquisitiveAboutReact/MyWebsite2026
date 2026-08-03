import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SectionHeading } from '../common/CommonComponent';
import { palette } from '../../theme';

const projects = [
  {
    title: 'Server-Side Rendering with Express',
    description:
      'Demonstrates SSR using Express JS, and how it compares to client-side rendering when tested from the network tab in production.',
    href: 'https://github.com/InquisitiveAboutReact/SSR-NextJS-Heroku',
  },
  {
    title: 'React + Webpack, CSR & SSR',
    description:
      'An end-to-end client-side and server-side rendering setup built from scratch with Express and Webpack 5, runnable in either mode.',
    href: 'https://github.com/InquisitiveAboutReact/SSR-CSR-Express-Webpack-React',
  },
];

function WorkSamples() {
  return (
    <Box id="Work" sx={{ backgroundColor: palette.paper, py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="From The Engineering Side"
          title="Sample Work"
          subtitle="Two small projects from earlier hands-on engineering work — kept here as a reference point for how I think about architecture."
        />
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid item xs={12} sm={6} key={p.title}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    height: 130,
                    background: `linear-gradient(135deg, ${palette.navyDeep}, ${palette.navySoft})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CodeIcon sx={{ color: palette.gold, fontSize: 42 }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: '"Playfair Display", serif', color: palette.navyDeep, mb: 1 }}
                  >
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.slate, mb: 2, flexGrow: 1 }}>
                    {p.description}
                  </Typography>
                  <Button
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    sx={{ alignSelf: 'flex-start', color: palette.navyDeep }}
                  >
                    View Repository
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WorkSamples;
