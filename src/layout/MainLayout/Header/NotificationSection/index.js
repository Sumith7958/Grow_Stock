// import { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ButtonBase,
  
} from '@mui/material';

import { IconBell } from '@tabler/icons-react';

const NotificationSection = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          [theme.breakpoints.down('md')]: {
            mr: 2
          }
        }}
      >
        <ButtonBase sx={{ borderRadius: '12px' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&[aria-controls="menu-list-grow"],&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
          >
            <IconBell stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
    </>
  );
};

export default NotificationSection;
