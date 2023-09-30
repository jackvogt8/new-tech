import React from 'react';
import { Link, Typography } from '@mui/material';

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/jackson-vogt/">
        The Vogt Show
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
