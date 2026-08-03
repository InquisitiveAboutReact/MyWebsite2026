import React from 'react';
import { Box, Container } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { SectionHeading } from '../common/CommonComponent';
import { palette } from '../../theme';

function AskExperience() {
  return (
    <Box id="Ask" sx={{ backgroundColor: palette.navyDeep, py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="AI Assistant"
          title="Ask About My Experience"
          subtitle="A lightweight assistant trained on this page's content — open it from the chat icon in the corner and ask about my background, certifications, or delivery experience."
          dark
          align="center"
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ChatBubbleOutlineIcon sx={{ color: palette.gold, fontSize: 34, opacity: 0.85 }} />
        </Box>
      </Container>
    </Box>
  );
}

export default AskExperience;
