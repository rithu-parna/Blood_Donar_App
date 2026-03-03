import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const StatsBar = () => {
    const stats = [
        { val: '1,248', label: 'REGISTERED DONORS' },
        { val: '342', label: 'ACTIVE REQUESTS' },
        { val: '896', label: 'LIVES SAVED' },
        { val: '18', label: 'HOSPITALS PARTNERED' },
    ];

    return (
        <Box sx={{ bgcolor: 'white', py: 4, borderBottom: '1px solid #F3F4F6' }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} textAlign="center">
                    {stats.map((stat, i) => (
                        <Grid item xs={6} md={3} key={i}>
                            <Typography variant="h4" fontWeight={900} sx={{ color: '#E11D48', mb: 0.5 }}>{stat.val}</Typography>
                            <Typography variant="caption" fontWeight={700} sx={{ color: '#9CA3AF', letterSpacing: 1 }}>{stat.label}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default StatsBar;
