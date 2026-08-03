import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import { SectionHeading } from '../common/CommonComponent';
import { palette } from '../../theme';

const categories = [
  {
    title: 'Delivery & Program Management',
    blurb: 'Running the engine that turns commitments into delivered outcomes.',
    skills: [
      'End-to-End Service Delivery',
      'Program & Stakeholder Management',
      'RFPs & New Business',
      'Financials — Billing, PO Management',
      'Agile & Kanban — JIRA, MURAL',
    ],
  },
  {
    title: 'Enterprise Platforms',
    blurb: 'The business systems I manage delivery for, hands-on.',
    skills: [
      'Oracle Fusion Cloud HCM',
      'Salesforce — Admin, Service Cloud, Apex, LWC',
      'Guidewire / ClaimCenter',
    ],
  },
  {
    title: 'Engineering Background',
    blurb: 'A hands-on foundation that keeps my delivery conversations technically credible.',
    skills: [
      'React, Redux, Angular, Vue',
      'Node.js, Express, Next.js',
      'Spring Boot & Eureka',
      'Jest, Karma, Mocha, Enzyme',
      'Webpack 5, NPM, Yarn',
    ],
  },
  {
    title: 'Cloud, CI/CD & DevOps',
    blurb: 'Where code becomes a reliably deployed product.',
    skills: [
      'Azure, IBM Bluemix',
      'Git, Git Actions, VSTS, BitBucket',
      'Heroku, Netlify, UCD',
      'MongoDB',
    ],
  },
];

function Expertise() {
  return (
    <Box id="Expertise" sx={{ backgroundColor: palette.paper, py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="What I Bring"
          title="Delivery & Technology Expertise"
          subtitle="Currently deepening my Oracle Cloud HCM expertise, while staying close to the engineering craft that shaped my career."
        />
        <Grid container spacing={3}>
          {categories.map((cat) => (
            <Grid item xs={12} sm={6} key={cat.title}>
              <Card sx={{ height: '100%', p: 1 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: '"Playfair Display", serif', color: palette.navyDeep, mb: 1 }}
                  >
                    {cat.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.slate, mb: 2.5 }}>
                    {cat.blurb}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {cat.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(201,162,75,0.10)',
                          color: palette.navyDeep,
                          border: `1px solid ${palette.hairline}`,
                          fontSize: 12.5,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Expertise;
