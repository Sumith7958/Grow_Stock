import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';

export default function Variants() {
  return (
    <MainCard>
        <Grid>
            <Stack spacing={1}>
                <Skeleton variant="rounded" height={60} />
                <Skeleton variant="rounded" height={200} />
                <Skeleton variant="rounded" height={200} />
            </Stack>
        </Grid>
    </MainCard>
  );
}