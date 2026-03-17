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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <Box sx={{
                                p: 4,
                                bgcolor: 'white',
                                borderRadius: 3,
                                border: '1px solid #F1F5F9',
                                position: 'relative',
                                transition: '0.4s',
                                '&:hover': {
                                    boxShadow: '0 40px 80px rgba(15, 23, 42, 0.08)',
                                    borderColor: '#E11D48',
                                    '& .type-badge': { bgcolor: '#E11D48', color: 'white' }
                                }
                            }}>
                                <Box
                                    className="type-badge"
                                    sx={{
                                        width: 48, height: 48, borderRadius: 2, bgcolor: '#F8FAFC', color: '#0F172A',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 950, fontSize: '1.2rem', mb: 3, transition: '0.4s'
                                    }}
                                >
                                    {item.type}
                                </Box>

                                <Typography variant="h6" fontWeight={900} sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    Inventory <Box component="span" sx={{ fontSize: '0.9rem', color: item.status === 'Critical' ? '#E11D48' : '#F59E0B' }}>{item.status}</Box>
                                </Typography>

                                <Box sx={{ width: '100%', mb: 4 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                                        <Typography variant="caption" fontWeight={800} color="#64748B">HAVE: {item.have}%</Typography>
                                        <Typography variant="caption" fontWeight={800} color="#E11D48">NEED: {item.need}%</Typography>
                                    </Box>
                                    <Box sx={{ position: 'relative', height: 10, bgcolor: '#F1F5F9', borderRadius: 5 }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.have}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            style={{ height: '100%', backgroundColor: item.status === 'Critical' ? '#E11D48' : '#3B82F6', borderRadius: 5 }}
                                        />
                                    </Box>
                                </Box>

                                <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.5, fontWeight: 600 }}>
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
