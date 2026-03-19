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
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <Box sx={{
                                    textAlign: 'center',
                                    borderRight: { md: i < stats.length - 1 ? '1px solid rgba(15, 23, 42, 0.08)' : 'none' },
                                    px: 2,
                                    py: { xs: 2, md: 4 },
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        '& .stat-val': { transform: 'scale(1.1)', color: '#BE123C' }
                                    }
                                }}>
                                    <Typography
                                        variant="h3"
                                        className="stat-val"
                                        fontWeight={950}
                                        sx={{
                                            color: '#E11D48',
                                            fontSize: { xs: '1.8rem', md: '2.8rem' },
                                            lineHeight: 1,
                                            mb: 1,
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                            display: 'inline-block'
                                        }}
                                    >
                                        {stat.val}
                                    </Typography>
                                    <Typography variant="caption" fontWeight={800} sx={{
                                        textTransform: 'uppercase',
                                        letterSpacing: 2,
                                        fontSize: '0.75rem',
                                        display: 'block',
                                        color: '#64748B'
                                    }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default StatsBar;
