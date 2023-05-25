import type { FC } from 'react';
import React from 'react';
import { Box, Typography } from '@mui/material';

import './Tag.scss';

interface TagProps {
  label: string;
}

const Tag: FC<TagProps> = ({ label }) => (
  <Box className="tag-wrapper">
    <Typography variant="body1" className="tag">
      {label}
    </Typography>
  </Box>
);

export default Tag;
