import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const COUNTER_URL = 'https://api.countapi.xyz/hit/inquisitiveaboutreact/portfolio2026';

export default function ProfileVisit() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fallbackCount = Number(localStorage.getItem('pageVisits') ?? '0');

    const loadCount = async () => {
      try {
        const response = await fetch(COUNTER_URL);

        if (!response.ok) {
          throw new Error('Unable to reach visit counter');
        }

        const data = await response.json();

        if (isMounted) {
          setCount(Number(data?.value ?? 0));
          localStorage.setItem('pageVisits', String(data?.value ?? 0));
        }
      } catch (error) {
        if (isMounted) {
          const nextCount = fallbackCount + 1;
          setCount(nextCount);
          localStorage.setItem('pageVisits', String(nextCount));
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
