import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Tooltip, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PublicIcon from '@mui/icons-material/Public';
import TimelineIcon from '@mui/icons-material/Timeline';
import SpeedIcon from '@mui/icons-material/Speed';

const bloodTypes = ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];

const compatibility = {
    'O-': { give: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'], receive: ['O-'] },
    'O+': { give: ['O+', 'A+', 'B+', 'AB+'], receive: ['O-', 'O+'] },
    'A-': { give: ['A-', 'A+', 'AB-', 'AB+'], receive: ['O-', 'A-'] },
    'A+': { give: ['A+', 'AB+'], receive: ['O-', 'O+', 'A-', 'A+'] },
    'B-': { give: ['B-', 'B+', 'AB-', 'AB+'], receive: ['O-', 'B-'] },
    'B+': { give: ['B+', 'AB+'], receive: ['O-', 'O+', 'B-', 'B+'] },
    'AB-': { give: ['AB-', 'AB+'], receive: ['O-', 'A-', 'B-', 'AB-'] },
    'AB+': { give: ['AB+'], receive: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'] },
};

const AdvancedInsights = () => {
    const [selectedType, setSelectedType] = useState(null);

    return (
        <Container maxWidth="lg" sx={{ py: 15 }}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Box sx={{
                    display: 'inline-block',
                    px: 2, py: 0.8,
                    bgcolor: 'rgba(225, 29, 72, 0.08)',
                    borderRadius: '10px',
                    color: '#E11D48',
                    fontWeight: 950,
                    fontSize: '0.75rem',
                    letterSpacing: 2,
                    mb: 3
                }}>
                    ADVANCED INSIGHTS
                </Box>
                <Typography variant="h2" fontWeight={950} sx={{ color: '#0F172A', mb: 3, letterSpacing: -2 }}>
                    Intelligent <Box component="span" sx={{ color: '#E11D48' }}>Compatibility</Box> Matrix
                </Typography>
                <Typography variant="h6" sx={{ color: '#64748B', fontWeight: 500, maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}>
                    Explore biological connections across our network. Select a blood type to visualize
                    giving and receiving possibilities in real-time.
                </Typography>
            </Box>

            <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 2,
                        position: 'relative'
                    }}>
                        {bloodTypes.map((type) => {
                            const isGiving = selectedType ? compatibility[selectedType].give.includes(type) : false;
                            const isReceiving = selectedType ? compatibility[selectedType].receive.includes(type) : false;
                            const isSelected = selectedType === type;

                            return (
                                <motion.div
                                    key={type}
                                    whileHover={{ scale: 1.08, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ height: '100%' }}
                                >
                                    <Paper
                                        onClick={() => setSelectedType(isSelected ? null : type)}
                                        sx={{
                                            height: 100,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            borderRadius: "24px",
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                            fontSize: '1.5rem',
                                            fontWeight: 900,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            bgcolor: isSelected ? '#E11D48' : 'rgba(255, 255, 255, 0.7)',
                                            backdropFilter: 'blur(10px)',
                                            color: isSelected ? 'white' : '#1E293B',
                                            border: '1px solid',
                                            borderColor: isGiving ? '#E11D48' : isReceiving ? '#3B82F6' : 'rgba(15, 23, 42, 0.08)',
                                            boxShadow: isSelected
                                                ? '0 20px 40px rgba(225, 29, 72, 0.3)'
                                                : '0 10px 30px rgba(0,0,0,0.03)',
                                            '&:hover': {
                                                bgcolor: isSelected ? '#BE123C' : 'rgba(255, 255, 255, 0.95)',
                                                boxShadow: isSelected
                                                    ? '0 25px 50px rgba(225, 29, 72, 0.4)'
                                                    : '0 20px 40px rgba(0,0,0,0.08)',
                                                "& .glow-effect": { opacity: 0.6, scale: 1.5 }
                                            }
                                        }}
                                    >
                                        <Box className="glow-effect" sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: isGiving
                                                ? 'radial-gradient(circle, rgba(225, 29, 72, 0.1) 0%, transparent 70%)'
                                                : isReceiving
                                                    ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
                                                    : 'radial-gradient(circle, rgba(15, 23, 42, 0.05) 0%, transparent 70%)',
                                            opacity: 0,
                                            transition: 'all 0.6s ease',
                                            zIndex: 0,
                                            pointerEvents: 'none'
                                        }} />

                                        <Typography variant="h5" sx={{ position: 'relative', zIndex: 1, fontWeight: 950 }}>
                                            {type}
                                        </Typography>

                                        {(isGiving || isReceiving) && !isSelected && (
                                            <motion.div
                                                layoutId="highlight"
                                                style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: isGiving
                                                        ? 'linear-gradient(135deg, rgba(225, 29, 72, 0.1) 0%, transparent 100%)'
                                                        : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)',
                                                    zIndex: -1
                                                }}
                                            />
                                        )}

                                        {(isGiving || isReceiving) && (
                                            <Box sx={{
                                                position: 'absolute',
                                                top: 8,
                                                right: 8,
                                                bgcolor: isGiving ? '#FFF1F2' : '#EFF6FF',
                                                color: isGiving ? '#E11D48' : '#3B82F6',
                                                px: 1,
                                                py: 0.2,
                                                borderRadius: '6px',
                                                fontSize: '0.6rem',
                                                fontWeight: 900,
                                                letterSpacing: 0.5,
                                                opacity: isSelected ? 0 : 1,
                                                transition: '0.3s'
                                            }}>
                                                {isGiving ? 'GIVE' : 'GET'}
                                            </Box>
                                        )}
                                    </Paper>
                                </motion.div>
                            );
                        })}
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <AnimatePresence mode="wait">
                        {!selectedType ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <Box sx={{ p: 4, bgcolor: 'rgba(15, 23, 42, 0.02)', borderRadius: 6, border: '1px dashed #CBD5E1' }}>
                                    <Stack spacing={3} alignItems="center" textAlign="center">
                                        <IconButton sx={{ bgcolor: 'white', mb: 1 }}>
                                            <InfoOutlinedIcon sx={{ color: '#E11D48' }} />
                                        </IconButton>
                                        <Typography variant="h6" fontWeight={800} color="#0F172A">
                                            Interactive Pulse Engine
                                        </Typography>
                                        <Typography variant="body2" color="#64748B" sx={{ lineHeight: 1.8 }}>
                                            Select any blood type to the left to begin the biological mapping process.
                                            Our system will automatically highlight compatible donate/receive nodes.
                                        </Typography>
                                    </Stack>
                                </Box>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <Stack spacing={4}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ width: 60, height: 60, bgcolor: '#E11D48', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: '1.4rem' }}>
                                            {selectedType}
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" fontWeight={900} color="#0F172A">Compatibility Profile</Typography>
                                            <Typography variant="caption" color="#E11D48" fontWeight={800}>LIVE DATA ANALYTICS</Typography>
                                        </Box>
                                    </Box>

                                    <Stack spacing={2}>
                                        <Paper sx={{ p: 3, borderRadius: 4, bgcolor: 'white', border: '1px solid #F1F5F9' }}>
                                            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 800, letterSpacing: 1 }}>CAN GIVE TO</Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
                                                {compatibility[selectedType].give.map(t => (
                                                    <Box key={t} sx={{ px: 2, py: 0.5, bgcolor: '#FEF2F2', color: '#E11D48', borderRadius: 2, fontWeight: 900, fontSize: '0.8rem', border: '1px solid rgba(225, 29, 72, 0.1)' }}>{t}</Box>
                                                ))}
                                            </Box>
                                        </Paper>

                                        <Paper sx={{ p: 3, borderRadius: 4, bgcolor: 'white', border: '1px solid #F1F5F9' }}>
                                            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 800, letterSpacing: 1 }}>CAN RECEIVE FROM</Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
                                                {compatibility[selectedType].receive.map(t => (
                                                    <Box key={t} sx={{ px: 2, py: 0.5, bgcolor: '#EFF6FF', color: '#3B82F6', borderRadius: 2, fontWeight: 900, fontSize: '0.8rem', border: '1px solid rgba(59, 130, 246, 0.1)' }}>{t}</Box>
                                                ))}
                                            </Box>
                                        </Paper>
                                    </Stack>

                                    <Grid container spacing={2}>
                                        {[
                                            { label: 'Network Reach', val: 'Global', icon: <PublicIcon /> },
                                            { label: 'Match Rate', val: '99.4%', icon: <SpeedIcon /> },
                                            { label: 'Priority', val: 'Elite', icon: <TimelineIcon /> }
                                        ].map((item, i) => (
                                            <Grid size={{ xs: 4 }} key={i}>
                                                <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'rgba(15, 23, 42, 0.02)', borderRadius: 3 }}>
                                                    <Box sx={{ color: '#E11D48', mb: 0.5 }}>{item.icon}</Box>
                                                    <Typography variant="caption" display="block" color="#64748B" fontWeight={700}>{item.label}</Typography>
                                                    <Typography variant="body2" fontWeight={900} color="#0F172A">{item.val}</Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Stack>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdvancedInsights;
