import React from 'react';
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { SectionHeading } from '../common/CommonComponent';
import { palette } from '../../theme';

import OracleCert1 from '../../images/oracle-cert-1.jpg';
import OracleCert2 from '../../images/oracle-cert-2.jpg';
import OracleCert3 from '../../images/oracle-cert-3.jpg';

const imageCerts = [
  {
    title: 'Oracle Global Human Resource Cloud',
    subtitle: '2025 Certified Implementation Professional',
    date: 'January 2026',
    image: OracleCert1,
  },
  {
    title: 'Oracle Fusion Cloud HCM',
    subtitle: 'Process Essentials Certified',
    date: 'December 2025',
    image: OracleCert2,
  },
  {
    title: 'Oracle Certification',
    subtitle: 'Fusion Cloud Applications',
    date: '2025',
    image: OracleCert3,
  },
];

const otherCerts = [
  { title: 'Azure Architect Technologies', code: 'AZ-300', date: '2020' },
  { title: 'ITIL® Foundation — IT Service Management', code: 'ITIL', date: '2015' },
  { title: 'IBM WebSphere Portal 6.1 Application Development', code: 'LOT-959', date: '2011' },
];

function Certifications() {
  return (
    <Box id="Certifications" sx={{ backgroundColor: palette.navyDeep, py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Verified"
          title="Certifications"
          subtitle="Recent Oracle credentials, alongside a foundation built over 17 years."
          dark
        />

        <Grid container spacing={3} sx={{ mb: 5 }}>
          {imageCerts.map((cert) => (
            <Grid item xs={12} sm={6} md={4} key={cert.title}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: palette.navySoft,
                  border: `1px solid ${palette.hairline}`,
                  transition: 'transform 200ms ease, border-color 200ms ease',
                  '&:hover': { transform: 'translateY(-4px)', borderColor: palette.gold },
                }}
              >
                <CardMedia
                  component="img"
                  image={cert.image}
                  alt={cert.title}
                  sx={{ height: 190, objectFit: 'cover', borderBottom: `1px solid ${palette.hairline}` }}
                />
                <CardContent>
                  <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: 15, mb: 0.5 }}>
                    {cert.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>
                    {cert.subtitle}
                  </Typography>
                  <Typography sx={{ color: palette.gold, fontSize: 12, mt: 1 }}>
                    {cert.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap" useFlexGap>
          {otherCerts.map((c) => (
            <Card
              key={c.code}
              sx={{
                flex: 1,
                minWidth: 260,
                backgroundColor: 'transparent',
                border: `1px solid ${palette.hairline}`,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 2,
              }}
            >
              <WorkspacePremiumIcon sx={{ color: palette.gold }} />
              <Box>
                <Typography sx={{ color: '#fff', fontSize: 13.5, fontWeight: 500 }}>
                  {c.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>
                  {c.code} · {c.date}
                </Typography>
              </Box>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Certifications;
