import { createTheme } from '@mui/material/styles';

// Navy & Gold — an executive, delivery-leadership palette.
// Kept intentionally tight: two navy depths, one gold accent, warm neutrals.
export const palette = {
  navyDeep: '#0a1f33',
  navyMid: '#0f2a44',
  navySoft: '#13324f',
  gold: '#c9a24b',
  goldSoft: '#e0c17e',
  paper: '#f7f5f0',
  ink: '#141a22',
  slate: '#5b6472',
  hairline: 'rgba(201,162,75,0.28)',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: palette.gold, contrastText: palette.navyDeep },
    secondary: { main: palette.navyDeep, contrastText: '#ffffff' },
    background: { default: palette.paper, paper: '#ffffff' },
    text: { primary: palette.ink, secondary: palette.slate },
    divider: palette.hairline,
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h3: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h4: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h5: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.18em',
    },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 30, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${palette.hairline}`,
          boxShadow: '0 10px 30px rgba(10, 31, 51, 0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8, fontFamily: '"Inter", sans-serif' },
      },
    },
  },
});

export default theme;
