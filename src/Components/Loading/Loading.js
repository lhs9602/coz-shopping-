import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingContainer } from './LoadingStyles.css';

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
};

export default Loading;
