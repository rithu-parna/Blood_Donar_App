import React from 'react';
import { Box, Typography, Container, Grid, Paper, LinearProgress, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const data = [
    { type: 'O+', need: 92, have: 45, status: 'Urgent' },
    { type: 'O-', need: 88, have: 12, status: 'Critical' },
    { type: 'B+', need: 76, have: 68, status: 'Stable' },
    { type: 'A+', need: 84, have: 62, status: 'Low' },
];

const DonationTrends = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 20 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', mb: 10, gap: 5 }}>
                <Box sx={{ maxWidth: 600 }}>
                    <Box sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1.5,
                        px: 2, py: 0.8,
                        bgcolor: '#EFF6FF',
                        borderRadius: '12px',
                        color: '#3B82F6',
                        fontWeight: 950,
                        fontSize: '0.75rem',
                        letterSpacing: 2,
                        mb: 3
                    }}>
                        <TrendingUpIcon sx={{ fontSize: 16 }} />
                        ANALYTICS ENGINE
                    </Box>
                    <Typography variant="h2" fontWeight={950} sx={{ color: '#0F172A', mb: 3, letterSpacing: -2 }}>
                        Live Blood <Box component="span" sx={{ color: '#E11D48' }}>Shortage</Box> & Demand Tracker
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#64748B', fontWeight: 500, lineHeight: 1.8, fontSize: '1.2rem' }}>
                        Providing real-time visibility into the regional blood inventory, helping donors identify where
                        their contribution is most urgently needed right now.
                    </Typography>
                </Box>

                <Paper sx={{ p: 4, borderRadius: 6, bgcolor: 'white', border: '1px solid #F1F5F9', minWidth: { md: 350 }, boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                    <Stack spacing={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ width: 44, height: 44, bgcolor: '#FFF1F2', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E11D48' }}>
                                <LocalHospitalIcon />
                            </Box>
                            <Box>
                                <Typography variant="h6" fontWeight={850}>14 Nodes</Typography>
                                <Typography variant="caption" color="#64748B" fontWeight={700}>TRACKING LIVE</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ width: 44, height: 44, bgcolor: '#F0F9FF', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0EA5E9' }}>
                                <BloodtypeIcon />
                            </Box>
                            <Box>
                                <Typography variant="h6" fontWeight={850}>O- Rare</Typography>
                                <Typography variant="caption" color="#64748B" fontWeight={700}>HIGHEST PRIORITY</Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Paper>
            </Box>

            <Grid container spacing={4}>
                {data.map((item, i) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.type}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -12 }}
                            style={{ height: '100%' }}
                        >
                            <Box sx={{
                                p: 4,
                                bgcolor: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: "32px",
                                border: '1px solid rgba(15, 23, 42, 0.08)',
                                position: 'relative',
                                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                overflow: 'hidden',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                '&:hover': {
                                    bgcolor: 'rgba(255, 255, 255, 0.95)',
                                    boxShadow: `0 40px 80px ${item.status === 'Critical' ? 'rgba(225, 29, 72, 0.15)' : 'rgba(59, 130, 246, 0.15)'}`,
                                    borderColor: item.status === 'Critical' ? 'rgba(225, 29, 72, 0.3)' : 'rgba(59, 130, 246, 0.3)',
                                    '& .type-badge': {
                                        bgcolor: item.status === 'Critical' ? '#E11D48' : '#3B82F6',
                                        color: 'white',
                                        transform: 'scale(1.1) rotate(5deg)'
                                    },
                                    '& .gradient-bg': { opacity: 0.6, transform: 'scale(1.5)' }
                                }
                            }}>
                                {/* Hover Gradient Background */}
                                <Box
                                    className="gradient-bg"
                                    sx={{
                                        position: 'absolute',
                                        top: '-50%',
                                        left: '-50%',
                                        right: '-50%',
                                        bottom: '-50%',
                                        background: `radial-gradient(circle at center, ${item.status === 'Critical' ? 'rgba(225, 29, 72, 0.1)' : 'rgba(59, 130, 246, 0.1)'} 0%, transparent 60%)`,
                                        opacity: 0,
                                        zIndex: -1,
                                        transition: 'all 0.8s ease',
                                        transform: 'scale(0.5)'
                                    }}
                                />

                                <Box
                                    className="type-badge"
                                    sx={{
                                        width: 56, height: 56, borderRadius: "16px", bgcolor: '#F8FAFC', color: '#0F172A',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 950, fontSize: '1.4rem', mb: 3, transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    {item.type}
                                </Box>

                                <Typography variant="h6" fontWeight={900} sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: -0.5 }}>
                                    Inventory <Box component="span" sx={{ fontSize: '0.8rem', fontWeight: 900, px: 1.5, py: 0.5, borderRadius: '8px', bgcolor: item.status === 'Critical' ? '#FEF2F2' : '#EFF6FF', color: item.status === 'Critical' ? '#E11D48' : '#3B82F6' }}>{item.status}</Box>
                                </Typography>

                                <Box sx={{ width: '100%', mb: 4, mt: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                                        <Typography variant="caption" fontWeight={800} color="#64748B" sx={{ letterSpacing: 1 }}>HAVE: {item.have}%</Typography>
                                        <Typography variant="caption" fontWeight={800} color="#E11D48" sx={{ letterSpacing: 1 }}>NEED: {item.need}%</Typography>
                                    </Box>
                                    <Box sx={{ position: 'relative', height: 10, bgcolor: '#F1F5F9', borderRadius: 5, overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.have}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            style={{ height: '100%', backgroundColor: item.status === 'Critical' ? '#E11D48' : '#3B82F6', borderRadius: 5 }}
                                        />
                                    </Box>
                                </Box>

                                <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6, fontWeight: 600, fontSize: '0.9rem' }}>
                                    Current stocks are below target levels. Rare donors are encouraged to participate.
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default DonationTrends;
