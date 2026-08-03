import React, { useEffect, Suspense } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Expertise from './components/BodyComponent/Expertise';
import Certifications from './components/BodyComponent/Certifications';
import WorkSamples from './components/BodyComponent/WorkSamples';
import AskExperience from './components/BodyComponent/AskExperience';
import Contact from './components/BodyComponent/Contact';
import Footer from './components/BodyComponent/Footer';

function App() {
  // Chatbase widget — reads the embed ID from the environment, never hardcoded.
  useEffect(() => {
    const chatbaseId = process.env.REACT_APP_CHATBASE_ID;
    if (!chatbaseId) return;

    if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === 'q') {
            return target.q;
          }
          return (...args) => target(prop, ...args);
        },
      });
    }
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.id = chatbaseId;
    script.domain = 'www.chatbase.co';
    document.body.appendChild(script);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <Expertise />
        <Certifications />
        <WorkSamples />
        <AskExperience />
        <Contact />
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
