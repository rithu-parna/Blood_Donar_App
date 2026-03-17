import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PulseIcon from '@mui/icons-material/Waves';

const activities = [
    { city: 'Trivandrum', type: 'O+', time: '2 mins ago', action: 'Matched' },
    { city: 'Kozhikode', type: 'A-', time: '14 mins ago', action: 'Requested' },
    { city: 'Kochi', type: 'B+', time: '28 mins ago', action: 'Donated' },
    { city: 'Malappuram', type: 'AB-', time: '1 hr ago', action: 'Matched' },
    { city: 'Thrissur', type: 'O-', time: '2 hrs ago', action: 'Requested' },
];

const LivePulseMap = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % activities.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const cur = activities[index];

    return (
        <Box sx={{ py: 10, bgcolor: '#0F172A', color: 'white', position: 'relative', overflow: 'hidden' }}>
            {/* Background Map Simulation */}
            <Box sx={{
                position: 'absolute',
                inset: 0,
                opacity: 0.1,
                backgroundImage: 'radial-gradient(circle at 10% 10%, #E11D48 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={10} alignItems="center">
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1.5,
                            px: 2, py: 0.8,
                            bgcolor: 'rgba(225, 29, 72, 0.15)',
                            borderRadius: 10,
                            color: '#E11D48',
                            fontWeight: 900,
                            fontSize: '0.7rem',
                            letterSpacing: 3,
                            mb: 4
                        }}>
                            <motion.div
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Box sx={{ width: 8, height: 8, bgcolor: '#E11D48', borderRadius: '50%' }} />
                            </motion.div>
                            LIVE PULSE HUB
                        </Box>
                        <Typography variant="h2" fontWeight={950} sx={{ mb: 3, letterSpacing: -2 }}>
                            Real-Time <br />
                            <Box component="span" sx={{ color: '#E11D48' }}>Network</Box> Monitoring
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500, lineHeight: 1.8 }}>
                            Our advanced matching engine tracks emergency blood requirements and available donors
                            across the state, ensuring zero downtime in life-saving events.
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, width: '100%', position: 'relative' }}>
                        {/* Simulation of radar/map pulse */}
                        <Box sx={{
                            width: 300, height: 300,
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '50%',
                            position: 'relative',
                            mx: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        border: '1px solid rgba(225, 29, 72, 0.2)',
                                        borderRadius: '50%'
                                    }}
                                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
                                />
                            ))}

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.2 }}
                                    style={{ zIndex: 10, textAlign: 'center' }}
                                >
                                    <LocationOnIcon sx={{ fontSize: 50, color: '#E11D48', mb: 1.5, filter: 'drop-shadow(0 0 20px #E11D48)' }} />
                                    <Typography variant="h4" fontWeight={950}>{cur.city}</Typography>
                                    <Typography variant="subtitle1" sx={{ color: '#E11D48', fontWeight: 800 }}>{cur.action.toUpperCase()} - {cur.type}</Typography>
                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 700 }}>{cur.time}</Typography>
                                </motion.div>
                            </AnimatePresence>
                        </Box>

                        {/* Smaller Floating Indicator Dots */}
                        <Box sx={{ position: 'absolute', top: '10%', right: '20%' }}>
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                                <Box sx={{ width: 12, height: 12, bgcolor: '#E11D48', borderRadius: '50%', boxShadow: '0 0 10px #E11D48' }} />
                            </motion.div>
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: '20%', left: '10%' }}>
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }}>
                                <Box sx={{ width: 8, height: 8, bgcolor: 'white', opacity: 0.3, borderRadius: '50%' }} />
                            </motion.div>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default LivePulseMap;
