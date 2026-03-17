import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';


const StatsBar = () => {
    const stats = [
        { val: '1,248', label: 'Registered Donors' },
        { val: '342', label: 'Active Requests' },
        { val: '896', label: 'Lives Saved' },
        { val: '18', label: 'Hospitals Partnered' },
    ];

    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="xl">
                <Grid container spacing={0} sx={{
                    bgcolor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {stats.map((stat, i) => (
                        <Grid item xs={6} md={3} key={stat.label}>
                            <Box sx={{
                                textAlign: 'center',
                                borderRight: { md: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' },
                                px: 2,
                                py: { xs: 2, md: 0 }
                            }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <Typography variant="h3" fontWeight={900} sx={{
                                        color: '#E11D48',
                                        fontSize: { xs: '1.8rem', md: '2.4rem' },
                                        lineHeight: 1,
                                        mb: 0.5
                                    }}>
                                        {stat.val}
                                    </Typography>
                                    <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{
                                        textTransform: 'uppercase',
                                        letterSpacing: 1,
                                        fontSize: '0.7rem',
                                        display: 'block'
                                    }}>
                                        {stat.label}
                                    </Typography>
                                </motion.div>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default StatsBar;
