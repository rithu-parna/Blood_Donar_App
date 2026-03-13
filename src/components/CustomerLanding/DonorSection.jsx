import React from 'react';
import { Box, Typography, Button, Grid, CardContent, Card, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import VerifiedIcon from '@mui/icons-material/Verified';

const dummyDonors = [
    { name: 'Rahul Sharma', type: 'O+', location: 'Kozhikode', count: 5, avatar: null },
    { name: 'Anjali Nair', type: 'B+', location: 'Kochi', count: 3, avatar: null },
    { name: 'Muhammed Fayis', type: 'A-', location: 'Malappuram', count: 8, avatar: null },
    { name: 'Sneha Krishna', type: 'O-', location: 'Trivandrum', count: 2, avatar: null },
];

const DonorSection = ({ onRegisterClick }) => {
    return (
        <Box sx={{ mb: 15 }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'flex-end' },
                gap: 4,
                mb: 8,
                pb: 4,
                borderBottom: '1px solid rgba(226, 232, 240, 0.4)'
            }}>
                <Box>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                        <Box sx={{ p: 1, bgcolor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', borderRadius: 2 }}>
                            <HandshakeIcon />
                        </Box>
                        <Typography variant="h3" fontWeight={950} sx={{ color: '#0F172A', fontSize: { xs: '2.2rem', md: '2.8rem' }, letterSpacing: -1.5 }}>
                            Registered <Box component="span" sx={{ color: '#10B981' }}>Donors</Box>
                        </Typography>
                    </Stack>
                    <Typography variant="h6" color="#64748B" fontWeight={600} sx={{ opacity: 0.8 }}>
                        Meet our dedicated community of life-savers.
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={onRegisterClick}
                    sx={{
                        bgcolor: '#10B981',
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        textTransform: 'none',
                        fontWeight: 900,
                        fontSize: '1rem',
                        boxShadow: '0 10px 20px -5px rgba(16, 185, 129, 0.3)',
                        '&:hover': { bgcolor: '#059669', transform: 'translateY(-2px)' },
                        transition: 'all 0.4s'
                    }}
                >
                    + Register Donor
                </Button>
            </Box>

            <Grid container spacing={4}>
                {dummyDonors.map((donor, i) => (
                    <Grid item xs={12} sm={6} md={3} key={donor.name}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card
                                className="premium-card"
                                sx={{
                                    height: '100%',
                                    position: 'relative',
                                    border: '1px solid rgba(226, 232, 240, 0.6)',
                                    borderRadius: 4,
                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.03)',
                                    transition: 'all 0.4s',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: '0 20px 40px -12px rgba(0,0,0,0.08)'
                                    }
                                }}
                            >
                                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#10B981' }} />
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Box sx={{
                                                width: 60,
                                                height: 60,
                                                bgcolor: 'rgba(225, 29, 72, 0.08)',
                                                color: '#E11D48',
                                                borderRadius: 3,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: '2px solid rgba(225, 29, 72, 0.15)',
                                                mb: 1
                                            }}>
                                                <Typography variant="h4" fontWeight={900}>{donor.type}</Typography>
                                            </Box>
                                            <Typography variant="caption" fontWeight={700} color="#94A3B8" sx={{ fontSize: '0.65rem' }}>ID: {i + 100}</Typography>
                                        </Box>
                                        <Box sx={{
                                            bgcolor: 'rgba(16, 185, 129, 0.08)',
                                            color: '#10B981',
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: 5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            border: '1px solid rgba(16, 185, 129, 0.15)'
                                        }}>
                                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'currentColor' }} />
                                            <Typography variant="caption" fontWeight={900} sx={{ fontSize: '0.65rem', letterSpacing: 0.5 }}>VERIFIED</Typography>
                                        </Box>
                                    </Box>

                                    <Typography variant="h6" fontWeight={900} color="#0F172A" sx={{ mb: 3, fontSize: '1.2rem', minHeight: '3.6rem', lineHeight: 1.3 }}>
                                        {donor.name}
                                    </Typography>

                                    <Stack spacing={2} sx={{ mb: 4 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#64748B' }}>
                                            <LocationOnIcon sx={{ fontSize: 18, color: '#94A3B8' }} />
                                            <Typography variant="body2" fontWeight={700}>{donor.location}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#64748B' }}>
                                            <VerifiedIcon sx={{ fontSize: 18, color: '#10B981' }} />
                                            <Typography variant="body2" fontWeight={700}>Verified Life-saver</Typography>
                                        </Box>
                                    </Stack>

                                    <Divider sx={{ mb: 3, borderColor: 'rgba(226, 232, 240, 0.6)' }} />

                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box>
                                            <Typography variant="caption" color="#64748B" fontWeight={700} sx={{ fontSize: '0.7rem' }}>Saves: <Box component="span" sx={{ color: '#10B981', fontWeight: 900 }}>{donor.count}</Box></Typography>
                                            <Typography variant="caption" display="block" color="#94A3B8" fontWeight={700} sx={{ fontSize: '0.6rem' }}>Lives Impacted</Typography>
                                        </Box>

                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: '#10B981',
                                                textTransform: 'none',
                                                fontWeight: 800,
                                                borderRadius: 2,
                                                px: 2,
                                                py: 0.8,
                                                fontSize: '0.75rem',
                                                boxShadow: 'none',
                                                '&:hover': { bgcolor: '#059669' }
                                            }}
                                        >
                                            View Profile →
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            {dummyDonors.length === 0 && (
                <Box sx={{
                    py: 10,
                    textAlign: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.4)',
                    borderRadius: 8,
                    border: '1px dashed #E2E8F0',
                }}>
                    <Box sx={{ color: '#E2E8F0', mb: 2 }}>
                        <HandshakeIcon sx={{ fontSize: 60 }} />
                    </Box>
                    <Typography variant="h6" color="#64748B" fontWeight={700}>
                        No donors yet. <Button onClick={onRegisterClick} sx={{ color: '#10B981', fontWeight: 900, textTransform: 'none', textDecoration: 'underline' }}>Register the first one!</Button>
                    </Typography>
                </Box>
            )}
        </Box>
    );
};


export default DonorSection;
