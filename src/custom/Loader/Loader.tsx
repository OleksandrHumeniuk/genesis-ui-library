import type { FC } from 'react';
import React from 'react';
import { Box, CircularProgress } from '@mui/material';

import './Loader.scss';

const Loader: FC = () => (
  <Box className="loader">
    <CircularProgress size={100} />
  </Box>
);

export default Loader;
