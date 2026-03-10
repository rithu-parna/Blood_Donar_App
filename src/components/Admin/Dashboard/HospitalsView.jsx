import React from 'react';
import { Box, Typography, Grid, Paper, Divider, Chip, Button } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { motion, AnimatePresence } from 'framer-motion';

const HospitalsView = ({ hospitals }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div key="hospitals" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <Typography sx={{ fontSize: 20, fontWeight: 900, color: '#0f172a', mb: 3 }}>Partner Hospitals</Typography>
                <Grid container spacing={3}>
                    {hospitals.map((h, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            >
                                <Paper sx={{
                                    p: 4, borderRadius: 4,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                    border: '1px solid #e2e8f0',
                                    cursor: 'pointer',
                                    transition: 'border-color 0.25s, box-shadow 0.25s',
                                    '&:hover': { borderColor: '#dc2626', boxShadow: '0 20px 50px rgba(220,38,38,0.12)' }
                                }}>
                                    <Box sx={{ width: 52, height: 52, borderRadius: 3, bgcolor: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                                        <LocalHospitalIcon sx={{ fontSize: 28, color: '#dc2626' }} />
                                    </Box>
                                    <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#0f172a', mb: 0.5 }}>{h.name}</Typography>
                                    <Typography sx={{ fontSize: 12, color: '#94a3b8', mb: 3 }}>Primary Partner Facility</Typography>
                                    <Divider sx={{ mb: 3, borderColor: '#f1f5f9' }} />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Chip label={`Needs: ${h.need}`} size="small" sx={{ bgcolor: '#fef2f2', color: '#dc2626', fontWeight: 700, borderRadius: 100, fontSize: 11 }} />
                                        <Button size="small" sx={{ borderRadius: 100, textTransform: 'none', fontWeight: 700, fontSize: 12, color: '#64748b', border: '1px solid #e2e8f0', '&:hover': { borderColor: '#dc2626', color: '#dc2626' } }}>Manage</Button>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </AnimatePresence>
    );
};

export default HospitalsView;
