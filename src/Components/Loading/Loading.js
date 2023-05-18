import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading= () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f1f1f1',
      fontFamily: 'Arial, sans-serif',
    }}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
