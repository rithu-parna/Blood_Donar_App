import React from 'react';
import { Box, Typography, Container, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SecurityIcon from '@mui/icons-material/Security';

const StatsBar = () => {
    const stats = [
        { val: '1,248', label: 'Registered Donors', color: '#10B981', icon: <PeopleAltIcon sx={{ fontSize: 32 }} />, bg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' },
        { val: '342', label: 'Active Requests', color: '#E11D48', icon: <LocalHospitalIcon sx={{ fontSize: 32 }} />, bg: 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)' },
        { val: '896', label: 'Lives Saved', color: '#3B82F6', icon: <FavoriteIcon sx={{ fontSize: 32 }} />, bg: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' },
        { val: '18+', label: 'Hospitals Joined', color: '#F59E0B', icon: <SecurityIcon sx={{ fontSize: 32 }} />, bg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' },
    ];

    return (
        <Box sx={{ position: 'relative', zIndex: 20, mt: 2 }}>
            <Container maxWidth="xl">
                <Box sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 10,
                    p: { xs: 4, md: 5 },
                    boxShadow: '0 40px 80px -15px rgba(0,0,0,0.12), 0 15px 30px -10px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <Grid container spacing={{ xs: 4, md: 2 }}>
                        {stats.map((stat, i) => (
                            <Grid item xs={12} sm={6} md={3} key={stat.label}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={3}
                                        alignItems="center"
                                        sx={{
                                            position: 'relative',
                                            zIndex: 1,
                                            height: '100%',
                                            px: { xs: 2, md: 3 },
                                            borderRight: { md: i < stats.length - 1 ? '1px solid rgba(226, 232, 240, 0.6)' : 'none' },
                                            '&:hover .icon-box': { transform: 'scale(1.1) rotate(5deg)', boxShadow: '0 15px 30px -5px rgba(0,0,0,0.2)' }
                                        }}
                                    >
                                        <Box
                                            className="icon-box"
                                            sx={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: 4,
                                                background: stat.bg,
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                flexShrink: 0,
                                                boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            {stat.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="h3" fontWeight={950} sx={{
                                                color: '#0F172A',
                                                mb: 0.5,
                                                fontSize: { xs: '2rem', md: '2.6rem' },
                                                lineHeight: 1,
                                                letterSpacing: -1.5
                                            }}>
                                                {stat.val}
                                            </Typography>
                                            <Typography variant="caption" fontWeight={900} color="#64748B" sx={{
                                                textTransform: 'uppercase',
                                                letterSpacing: 2.5,
                                                fontSize: '0.75rem',
                                                display: 'block',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {stat.label}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};


export default StatsBar;
