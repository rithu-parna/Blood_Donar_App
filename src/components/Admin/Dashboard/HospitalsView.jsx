import React, { useState } from 'react';
import {
    Box, Typography, Grid, Paper, Chip, Button, IconButton,
    Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { motion, AnimatePresence } from 'framer-motion';

const HospitalsView = ({ hospitals }) => {
    const [open, setOpen] = useState(false);
    const [newHospital, setNewHospital] = useState({ name: '', location: '', phone: '', need: 'B+' });

    const handleAdd = () => {
        console.log('Adding hospital:', newHospital);
        setOpen(false);
        setNewHospital({ name: '', location: '', phone: '', need: 'B+' });
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div key="hospitals" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 900, color: '#0f172a', mb: 0.5 }}>Partner Hospitals</Typography>
                        <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{hospitals.length} active healthcare partners</Typography>
                    </Box>
                    <Button
                        variant="contained"
                        onClick={() => setOpen(true)}
                        sx={{ bgcolor: '#dc2626', borderRadius: 100, fontWeight: 700, textTransform: 'none', px: 3, '&:hover': { bgcolor: '#b91c1c' } }}
                    >
                        + Add Hospital
                    </Button>
                </Box>
                <Grid container spacing={3}>
                    {hospitals.map((hospital, i) => (
                        <Grid item xs={12} md={6} key={hospital.name}>
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                                <Paper sx={{ p: 3, borderRadius: 4, border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden' }}>
                                    <Box sx={{ position: 'absolute', top: 0, right: 0, p: 2 }}>
                                        <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                                        <Box sx={{ width: 56, height: 56, borderRadius: 3, bgcolor: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <LocalHospitalIcon sx={{ color: '#dc2626', fontSize: 28 }} />
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                                                <Typography sx={{ fontSize: 16, fontWeight: 800 }}>{hospital.name}</Typography>
                                                <Chip label={hospital.need} size="small" sx={{ bgcolor: '#dc2626', color: 'white', fontWeight: 900, fontSize: 10, height: 20 }} />
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, color: '#64748b' }}>
                                                <LocationOnIcon sx={{ fontSize: 14 }} />
                                                <Typography sx={{ fontSize: 12, fontWeight: 500 }}>{hospital.location || 'Central City'}</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: '#64748b' }}>
                                                <PhoneIcon sx={{ fontSize: 14 }} />
                                                <Typography sx={{ fontSize: 12, fontWeight: 500 }}>+1 (555) 000-0000</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1.5 }}>
                                                <Button size="small" variant="contained" sx={{ bgcolor: '#0f172a', borderRadius: 100, textTransform: 'none', fontWeight: 700, px: 2, fontSize: 11 }}>Manage</Button>
                                                <Button size="small" variant="outlined" sx={{ borderRadius: 100, textTransform: 'none', fontWeight: 700, px: 2, fontSize: 11 }}>History</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>

            <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { borderRadius: 4, p: 2, width: 400 } }}>
                <DialogTitle sx={{ fontWeight: 800 }}>Add Partner Hospital</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                        <TextField
                            label="Hospital Name"
                            fullWidth
                            size="small"
                            value={newHospital.name}
                            onChange={(e) => setNewHospital({ ...newHospital, name: e.target.value })}
                        />
                        <TextField
                            label="Location"
                            fullWidth
                            size="small"
                            value={newHospital.location}
                            onChange={(e) => setNewHospital({ ...newHospital, location: e.target.value })}
                        />
                        <TextField
                            label="Phone Number"
                            fullWidth
                            size="small"
                            value={newHospital.phone}
                            onChange={(e) => setNewHospital({ ...newHospital, phone: e.target.value })}
                        />
                        <TextField
                            select
                            label="Current Need"
                            fullWidth
                            size="small"
                            value={newHospital.need}
                            onChange={(e) => setNewHospital({ ...newHospital, need: e.target.value })}
                        >
                            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(g => <MenuItem key={g} value={g}>{g}</MenuItem>)}
                        </TextField>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 3 }}>
                    <Button onClick={() => setOpen(false)} sx={{ color: '#64748b', fontWeight: 700 }}>Cancel</Button>
                    <Button onClick={handleAdd} variant="contained" sx={{ bgcolor: '#dc2626', borderRadius: 100, px: 3, fontWeight: 700 }}>Register Hospital</Button>
                </DialogActions>
            </Dialog>
        </AnimatePresence>
    );
};

export default HospitalsView;
