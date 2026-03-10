import React, { useState } from 'react';
import {
    Box, Typography, Grid, Paper, Chip, Button, IconButton,
    Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem,
    Avatar, InputAdornment, List, ListItem, ListItemText,
    Divider, Tooltip, Zoom, Fade, LinearProgress
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { motion, AnimatePresence } from 'framer-motion';

const HospitalsView = ({ hospitals, setHospitals }) => {
    // Modal states
    const [openAdd, setOpenAdd] = useState(false);
    const [openManage, setOpenManage] = useState(false);
    const [openHistory, setOpenHistory] = useState(false);
    const [filter, setFilter] = useState('All');

    // Data states
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [formData, setFormData] = useState({ name: '', location: '', phone: '', need: 'B+', status: 'Active', rating: 4.8 });

    // Handlers
    const handleOpenAdd = () => {
        setFormData({ name: '', location: '', phone: '', need: 'B+', status: 'Active', rating: 5.0 });
        setOpenAdd(true);
    };

    const handleOpenManage = (hospital) => {
        setSelectedHospital(hospital);
        setFormData({ ...hospital, phone: hospital.phone || '+1 (555) 123-4567' });
        setOpenManage(true);
    };

    const handleOpenHistory = (hospital) => {
        setSelectedHospital(hospital);
        setOpenHistory(true);
    };

    const handleSaveAdd = () => {
        setHospitals(prev => [...prev, formData]);
        setOpenAdd(false);
    };

    const handleSaveUpdate = () => {
        setHospitals(prev => prev.map(h => h.name === selectedHospital.name ? formData : h));
        setOpenManage(false);
    };

    const handleDelete = () => {
        setHospitals(prev => prev.filter(h => h.name !== selectedHospital.name));
        setOpenManage(false);
    };

    const filteredHospitals = filter === 'All' ? hospitals : hospitals.filter(h => h.need === filter);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="hospitals"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Advanced Header Section */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 3, mb: 6 }}>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                            <DashboardCustomizeIcon sx={{ color: '#dc2626', fontSize: 32 }} />
                            <Typography sx={{ fontSize: 32, fontWeight: 900, color: '#0f172a', letterSpacing: -1 }}>
                                Medical Partners
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: 15, color: '#64748b', fontWeight: 500, maxWidth: 400, lineHeight: 1.6 }}>
                            Orchestrating a critical network of <b>{hospitals.length} healthcare facilities</b> providing emergency blood supply chain logistics.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', md: 'auto' } }}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: 100, border: '1.5px solid #e2e8f0', color: '#0f172a', fontWeight: 800, textTransform: 'none', px: 3,
                                '&:hover': { borderColor: '#0f172a', bgcolor: 'transparent' }
                            }}
                        >
                            Export Network
                        </Button>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                variant="contained"
                                startIcon={<AddCircleOutlineIcon />}
                                onClick={handleOpenAdd}
                                sx={{
                                    bgcolor: '#dc2626', borderRadius: 100, fontWeight: 900, textTransform: 'none', px: 4, py: 1.8, fontSize: 14,
                                    boxShadow: '0 12px 30px rgba(220, 38, 36, 0.25)',
                                    '&:hover': { bgcolor: '#b91c1c', boxShadow: '0 15px 40px rgba(220, 38, 36, 0.4)' }
                                }}
                            >
                                Register Facility
                            </Button>
                        </motion.div>
                    </Box>
                </Box>

                {/* Filter Chips */}
                <Box sx={{ display: 'flex', gap: 1.5, mb: 5, overflowX: 'auto', pb: 1, '&::-webkit-scrollbar': { display: 'none' } }}>
                    {['All', 'O-', 'A+', 'B+', 'AB-', 'O+'].map(type => (
                        <Chip
                            key={type}
                            label={type === 'All' ? 'All Partners' : `Need: ${type}`}
                            onClick={() => setFilter(type)}
                            sx={{
                                px: 1, fontWeight: 800, fontSize: 12,
                                bgcolor: filter === type ? '#0f172a' : 'white',
                                color: filter === type ? 'white' : '#64748b',
                                border: '1px solid',
                                borderColor: filter === type ? '#0f172a' : '#e2e8f0',
                                '&:hover': { bgcolor: filter === type ? '#1e293b' : '#f8fafc' },
                                transition: 'all 0.2s'
                            }}
                        />
                    ))}
                </Box>

                <Grid container spacing={4}>
                    {filteredHospitals.map((hospital, i) => (
                        <Grid item xs={12} lg={4} key={hospital.name}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <Paper sx={{
                                    borderRadius: 3,
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.02)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)',
                                        borderColor: '#dc262640'
                                    }
                                }}>
                                    {/* Top Accent Bar */}
                                    <Box sx={{ height: 6, width: '100%', bgcolor: hospital.need.includes('O-') ? '#dc2626' : '#2563eb' }} />

                                    <Box sx={{ p: 4 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                                            <Box sx={{
                                                width: 60, height: 60, borderRadius: 4, bgcolor: '#f1f5f9', display: 'flex',
                                                alignItems: 'center', justifyContent: 'center', border: '1.5px solid #e2e8f0'
                                            }}>
                                                <LocalHospitalIcon sx={{ color: '#dc2626', fontSize: 32 }} />
                                            </Box>
                                            <Tooltip title="Verified Partner">
                                                <VerifiedIcon sx={{ color: '#2563eb', fontSize: 20 }} />
                                            </Tooltip>
                                        </Box>

                                        <Typography sx={{ fontSize: 19, fontWeight: 900, color: '#0f172a', mb: 0.5 }}>{hospital.name}</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                                            <LocationOnIcon sx={{ fontSize: 14, color: '#94a3b8' }} />
                                            <Typography sx={{ fontSize: 13, color: '#64748b', fontWeight: 600 }}>{hospital.location || 'Central City Area'}</Typography>
                                        </Box>

                                        {/* Metrics Block */}
                                        <Box sx={{ bgcolor: '#f8fafc', borderRadius: 4, p: 2, mb: 3, border: '1px solid #f1f5f9' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography sx={{ fontSize: 11, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Fulfillment Rate</Typography>
                                                <Typography sx={{ fontSize: 11, fontWeight: 900, color: '#16a34a' }}>92%</Typography>
                                            </Box>
                                            <LinearProgress variant="determinate" value={92} sx={{ height: 6, borderRadius: 3, bgcolor: '#e2e8f0', '& .MuiLinearProgress-bar': { bgcolor: '#16a34a' } }} />
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                                            <Box>
                                                <Typography sx={{ fontSize: 11, fontWeight: 800, color: '#94a3b8', mb: 0.5, textTransform: 'uppercase' }}>Urgent Requirement</Typography>
                                                <Chip label={hospital.need} size="small" sx={{ bgcolor: '#fef2f2', color: '#dc2626', fontWeight: 900, borderRadius: 2 }} />
                                            </Box>
                                            <Box sx={{ textAlign: 'right' }}>
                                                <Typography sx={{ fontSize: 11, fontWeight: 800, color: '#94a3b8', mb: 0.5, textTransform: 'uppercase' }}>Partnership</Typography>
                                                <Typography sx={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Tier-1</Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                                            <Button
                                                fullWidth variant="contained"
                                                onClick={() => handleOpenManage(hospital)}
                                                sx={{
                                                    bgcolor: '#0f172a', borderRadius: 4, textTransform: 'none', fontWeight: 800, py: 1.2, fontSize: 12.5,
                                                    '&:hover': { bgcolor: '#1e293b' }
                                                }}
                                            >
                                                Settings
                                            </Button>
                                            <Button
                                                fullWidth variant="outlined"
                                                onClick={() => handleOpenHistory(hospital)}
                                                sx={{
                                                    borderColor: '#e2e8f0', color: '#64748b', borderRadius: 4, textTransform: 'none', fontWeight: 800, py: 1.2, fontSize: 12.5,
                                                    '&:hover': { borderColor: '#dc2626', color: '#dc2626' }
                                                }}
                                            >
                                                History
                                            </Button>
                                        </Box>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>

            {/* Premium Hospital Dialog */}
            <HospitalDialog
                open={openAdd || openManage}
                onClose={() => { setOpenAdd(false); setOpenManage(false); }}
                onSave={openAdd ? handleSaveAdd : handleSaveUpdate}
                onDelete={openManage ? handleDelete : null}
                title={openAdd ? "Register Strategic Partner" : "Partner Orchestration"}
                formData={formData}
                setFormData={setFormData}
                mode={openAdd ? "add" : "edit"}
            />

            {/* Premium History Dialog */}
            <HistoryDialog
                open={openHistory}
                onClose={() => setOpenHistory(false)}
                hospital={selectedHospital}
            />
        </AnimatePresence>
    );
};

/* ─── Premium Hospital Dialog ────────────────────────────────────────────── */
const HospitalDialog = ({ open, onClose, onSave, onDelete, title, formData, setFormData, mode }) => (
    <Dialog
        open={open} onClose={onClose}
        TransitionComponent={Fade}
        PaperProps={{
            sx: { borderRadius: 4, p: 1, maxWidth: 520, width: '100%', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.25)', overflow: 'hidden' }
        }}
    >
        <Box sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: 4, bgcolor: mode === 'add' ? '#f0fdf4' : '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: mode === 'add' ? '#16a34a' : '#2563eb' }}>
                        {mode === 'add' ? <AddCircleOutlineIcon fontSize="medium" /> : <SettingsIcon fontSize="medium" />}
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 900, fontSize: 22, color: '#0f172a', letterSpacing: -0.5 }}>{title}</Typography>
                        <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 600 }}>Healthcare Infrastructure Node Registry</Typography>
                    </Box>
                </Box>
                <IconButton onClick={onClose} sx={{ color: '#94a3b8' }}><CloseIcon /></IconButton>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Hospital Identity</Typography>
                    <TextField
                        placeholder="e.g. Mayo Clinic Logistics Center" fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LocalHospitalIcon sx={{ fontSize: 18, color: '#94a3b8' }} /></InputAdornment>,
                            sx: { borderRadius: 4, bgcolor: '#f8fafc', border: 'none', '& fieldset': { border: 'none' }, py: 0.5 }
                        }}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Logistics Location</Typography>
                    <TextField
                        placeholder="Global Positioning or City Address" fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LocationOnIcon sx={{ fontSize: 18, color: '#94a3b8' }} /></InputAdornment>,
                            sx: { borderRadius: 4, bgcolor: '#f8fafc', border: 'none', '& fieldset': { border: 'none' }, py: 0.5 }
                        }}
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Contact Hotline</Typography>
                    <TextField
                        placeholder="+1 (555) 000-0000" fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PhoneIcon sx={{ fontSize: 18, color: '#94a3b8' }} /></InputAdornment>,
                            sx: { borderRadius: 4, bgcolor: '#f8fafc', border: 'none', '& fieldset': { border: 'none' }, py: 0.5 }
                        }}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Emergency Group</Typography>
                    <TextField
                        select fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><BloodtypeIcon sx={{ fontSize: 18, color: '#dc2626' }} /></InputAdornment>,
                            sx: { borderRadius: 4, bgcolor: '#f8fafc', border: 'none', '& fieldset': { border: 'none' }, py: 0.5 }
                        }}
                        value={formData.need}
                        onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    >
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(g => (
                            <MenuItem key={g} value={g} sx={{ fontWeight: 800, fontSize: 14 }}>{g} Protocol</MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>

            <Box sx={{ mt: 6, display: 'flex', gap: 2 }}>
                {mode === 'edit' && (
                    <Button
                        onClick={onDelete} color="error"
                        sx={{ fontWeight: 900, textTransform: 'none', borderRadius: 4, px: 3 }}
                    >
                        Terminate Partnership
                    </Button>
                )}
                <Box sx={{ flex: 1 }} />
                <Button
                    onClick={onClose}
                    sx={{ color: '#64748b', fontWeight: 900, textTransform: 'none', borderRadius: 4, px: 3 }}
                >
                    Discard
                </Button>
                <Button
                    onClick={onSave} variant="contained"
                    sx={{
                        bgcolor: '#0f172a', borderRadius: 100, px: 4, py: 1.5, fontWeight: 900, textTransform: 'none',
                        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.3)',
                        '&:hover': { bgcolor: '#1e293b' }
                    }}
                >
                    {mode === 'add' ? 'Add Partner' : 'Update Deployment'}
                </Button>
            </Box>
        </Box>
    </Dialog>
);

/* ─── Premium History Dialog ─────────────────────────────────────────────── */
const HistoryDialog = ({ open, onClose, hospital }) => (
    <Dialog
        open={open} onClose={onClose}
        TransitionComponent={Zoom}
        PaperProps={{
            sx: { borderRadius: 3, p: 0, width: 600, maxWidth: '100%', overflow: 'hidden' }
        }}
    >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: 600 }}>
            {/* Left Sidebar */}
            <Box sx={{ width: { xs: '100%', md: 240 }, bgcolor: '#0f172a', p: 4, color: 'white' }}>
                <Box sx={{ mb: 6 }}>
                    <LocalHospitalIcon sx={{ color: '#dc2626', fontSize: 48, mb: 2 }} />
                    <Typography sx={{ fontSize: 18, fontWeight: 900, lineHeight: 1.2 }}>{hospital?.name}</Typography>
                    <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', mt: 1, fontWeight: 600 }}>Fulfillment History</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box>
                        <Typography sx={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 800, textTransform: 'uppercase', mb: 1 }}>Total Units Delivered</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <TrendingUpIcon sx={{ color: '#16a34a', fontSize: 20 }} />
                            <Typography sx={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>1,482</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 800, textTransform: 'uppercase', mb: 1 }}>Average Urgency</Typography>
                        <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#f59e0b' }}>Critical (Level 4)</Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: 'auto', pt: 4 }}>
                    <Button
                        variant="contained" fullWidth onClick={onClose}
                        sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4, textTransform: 'none', fontWeight: 800, '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
                    >
                        Close Logs
                    </Button>
                </Box>
            </Box>

            {/* Right Feed */}
            <Box sx={{ flex: 1, p: 4, bgcolor: '#f8fafc', maxHeight: 500, overflowY: 'auto' }}>
                <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 4, px: 2, textTransform: 'uppercase', letterSpacing: 1 }}>Interaction Timeline</Typography>
                <List disablePadding>
                    {[
                        { id: 1, title: 'Strategic O- Influx', val: '+45 Units', date: 'T-Minus 2 Days', user: 'Admin J.' },
                        { id: 2, title: 'Emergency Trauma Response', val: '+12 Units', date: '04 Mar 2026', user: 'System' },
                        { id: 3, title: 'Quarterly Inventory Audit', val: 'Verified', date: '28 Feb 2026', user: 'Auditor' },
                        { id: 4, title: 'B+ Group Stabilization', val: '+84 Units', date: '15 Feb 2026', user: 'Admin J.' },
                    ].map((item, i) => (
                        <Box key={item.id}>
                            <ListItem sx={{ py: 2.5, borderRadius: 5, transition: 'all 0.2s', '&:hover': { bgcolor: 'white', boxShadow: '0 10px 20px -10px rgba(0,0,0,0.05)' } }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 0.5 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontWeight: 900, fontSize: 14, color: '#0f172a' }}>{item.title}</Typography>
                                        <Typography sx={{ fontSize: 13, fontWeight: 900, color: '#dc2626' }}>{item.val}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: 11, color: '#94a3b8', fontWeight: 600 }}>{item.date} • Handled by {item.user}</Typography>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 14, color: '#16a34a' }} />
                                    </Box>
                                </Box>
                            </ListItem>
                            {i < 3 && <Divider sx={{ my: 1, opacity: 0.5, borderColor: '#e2e8f0' }} />}
                        </Box>
                    ))}
                </List>
            </Box>
        </Box>
    </Dialog>
);

export default HospitalsView;
