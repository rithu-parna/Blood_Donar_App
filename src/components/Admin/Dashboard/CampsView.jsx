import React from 'react';
import { Box, Typography, Grid, Paper, Chip, Button, Avatar, AvatarGroup } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { motion, AnimatePresence } from 'framer-motion';

const CampsView = ({ camps }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div key="camps" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 900, color: '#0f172a', mb: 0.5 }}>Donation Camps</Typography>
                        <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>Upcoming and active events</Typography>
                    </Box>
                    <Button variant="contained" sx={{ bgcolor: '#dc2626', borderRadius: 100, fontWeight: 700, textTransform: 'none', px: 3 }}>Schedule New Camp</Button>
                </Box>
                <Grid container spacing={3}>
                    {camps.map((camp, i) => (
                        <Grid item xs={12} md={4} key={camp.id}>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                <Paper sx={{ p: 3, borderRadius: 4, border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                        <Chip
                                            label={camp.status}
                                            size="small"
                                            sx={{
                                                bgcolor: camp.status === 'Ongoing' ? '#dcfce7' : '#f1f5f9',
                                                color: camp.status === 'Ongoing' ? '#16a34a' : '#64748b',
                                                fontWeight: 800, fontSize: 10
                                            }}
                                        />
                                        <Typography sx={{ fontSize: 11, fontWeight: 700, color: '#94a3b8' }}>ID: #{camp.id}</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: 16, fontWeight: 800, mb: 2 }}>{camp.name}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, color: '#64748b' }}>
                                        <LocationOnIcon sx={{ fontSize: 16 }} />
                                        <Typography sx={{ fontSize: 12, fontWeight: 500 }}>{camp.location}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, color: '#64748b' }}>
                                        <CalendarMonthIcon sx={{ fontSize: 16 }} />
                                        <Typography sx={{ fontSize: 12, fontWeight: 500 }}>{camp.date}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 10 } }}>
                                            <Avatar src="/v1.jpg" />
                                            <Avatar src="/v2.jpg" />
                                            <Avatar src="/v3.jpg" />
                                            <Avatar src="/v4.jpg" />
                                        </AvatarGroup>
                                        <Button size="small" variant="outlined" sx={{ borderRadius: 100, textTransform: 'none', fontWeight: 700, fontSize: 11 }}>Details</Button>
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

export default CampsView;
