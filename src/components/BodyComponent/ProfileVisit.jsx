import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

export default function ProfileVisit() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('pageVisits');
    const initialCount = storedCount ? Number(storedCount) : 0;
    setCount(initialCount + 1);
    localStorage.setItem('pageVisits', initialCount + 1);
  }, []);

  return (
    <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
      Total Visits: {count}
    </Typography>
  );
}
