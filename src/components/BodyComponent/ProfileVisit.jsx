import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const API_URL = '/api/visits';
const SESSION_STORAGE_KEY = 'portfolio-visit-session-id';

function getOrCreateSessionId() {
  if (typeof window === 'undefined') {
    return null;
  }

  const storage = window.sessionStorage;
  const existingSessionId = storage.getItem(SESSION_STORAGE_KEY);

  if (existingSessionId) {
    return existingSessionId;
  }

  const newSessionId = `session:${Date.now()}:${Math.random().toString(16).slice(2)}`;
  storage.setItem(SESSION_STORAGE_KEY, newSessionId);
  return newSessionId;
}

export default function ProfileVisit() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const recordVisit = async () => {
      try {
        const sessionId = getOrCreateSessionId();

        const postResponse = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clientId: sessionId || `browser:${navigator.userAgent}`,
            sessionId,
            userAgent: navigator.userAgent,
          }),
        });

        if (!postResponse.ok) {
          throw new Error('Unable to reach visit counter');
        }

        const postData = await postResponse.json();
        const nextCount = Number(postData?.count ?? 0);

        if (!isMounted) {
          return;
        }

        setCount(nextCount);

        const getResponse = await fetch(API_URL, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!getResponse.ok) {
          throw new Error('Unable to refresh visit count');
        }

        const getData = await getResponse.json();
        const refreshedCount = Number(getData?.count ?? nextCount);

        if (isMounted) {
          setCount(refreshedCount);
        }
      } catch (error) {
        if (isMounted) {
          setCount(0);
        }
      }
    };

    recordVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
      Total Visits: {count}
    </Typography>
  );
}
