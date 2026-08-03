import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const COUNTER_URL = 'https://api.countapi.xyz/hit/inquisitiveaboutreact/portfolio2026';
const STORAGE_KEY = 'pageVisits';
const SESSION_KEY = 'profileVisitTracked';

const readStoredCount = () => Number(localStorage.getItem(STORAGE_KEY) ?? '0');

export default function ProfileVisit() {
  const [count, setCount] = useState(readStoredCount());

  useEffect(() => {
    let isMounted = true;

    const alreadyTrackedInSession = sessionStorage.getItem(SESSION_KEY) === 'true';

    if (alreadyTrackedInSession) {
      if (isMounted) {
        setCount(readStoredCount());
      }
      return undefined;
    }

    const loadCount = async () => {
      sessionStorage.setItem(SESSION_KEY, 'true');

      const storedCount = readStoredCount();

      try {
        const response = await fetch(COUNTER_URL);

        if (!response.ok) {
          throw new Error('Unable to reach visit counter');
        }

        const data = await response.json();
        const remoteCount = Number(data?.value ?? storedCount + 1);

        if (isMounted) {
          setCount(remoteCount);
          localStorage.setItem(STORAGE_KEY, String(remoteCount));
        }
      } catch (error) {
        const nextCount = storedCount + 1;

        if (isMounted) {
          setCount(nextCount);
          localStorage.setItem(STORAGE_KEY, String(nextCount));
        }
      }
    };

    loadCount();

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
