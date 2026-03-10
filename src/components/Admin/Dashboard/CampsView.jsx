import React, { useState } from 'react';
import {
    Box, Typography, Grid, Paper, Chip, Button, IconButton,
    Dialog, TextField, MenuItem,
    Avatar, InputAdornment, List, ListItem,
    Divider, Zoom, Fade, CircularProgress
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PeopleIcon from '@mui/icons-material/People';
import FestivalIcon from '@mui/icons-material/Festival';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import VerifiedIcon from '@mui/icons-material/Verified';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

import { motion, AnimatePresence } from 'framer-motion';

const defaultCamps = [
    { id: 1, name: 'City Plaza Drive', date: '2026-03-20', location: 'Downtown Square', status: 'Upcoming', target: 200, collected: 45 },
    { id: 2, name: 'Tech Park Camp', date: '2026-03-25', location: 'Silicon Valley', status: 'Upcoming', target: 500, collected: 0 },
    { id: 3, name: 'Community Health', date: '2026-03-10', location: 'Suburbia', status: 'Ongoing', target: 300, collected: 156 },
    { id: 4, name: 'Riverside Community', date: '2026-01-15', location: 'West End', status: 'Completed', target: 250, collected: 275 },
];

const CampsView = ({ camps: propCamps, setCamps: propSetCamps }) => {
    const [localCamps, setLocalCamps] = useState(defaultCamps);
    const camps = propCamps && propCamps.length > 0 ? propCamps : localCamps;
    const setCamps = propSetCamps || setLocalCamps;

    const [openAdd, setOpenAdd] = useState(false);
    const [openManage, setOpenManage] = useState(false);
    const [openRequests, setOpenRequests] = useState(false);
    const [filter, setFilter] = useState('All');

    const [selectedCamp, setSelectedCamp] = useState(null);
    const [formData, setFormData] = useState({ name: '', location: '', date: '', status: 'Upcoming', target: 200, collected: 0 });

    const handleOpenAdd = () => {
        setFormData({ name: '', location: '', date: new Date().toISOString().split('T')[0], status: 'Upcoming', target: 200, collected: 0 });
        setOpenAdd(true);
    };

    const handleOpenManage = (camp) => {
        setSelectedCamp(camp);
        setFormData({ ...camp, target: camp.target || 300, collected: camp.collected || 0 });
        setOpenManage(true);
    };

    const handleOpenRequests = (camp) => {
        setSelectedCamp(camp);
        setOpenRequests(true);
    };

    const handleSaveAdd = () => {
        const newCamp = { ...formData, id: Date.now() };
        setCamps(prev => [...prev, newCamp]);
        setOpenAdd(false);
    };

    const handleSaveUpdate = () => {
        setCamps(prev => prev.map(c => c.id === selectedCamp.id ? { ...c, ...formData } : c));
        setOpenManage(false);
    };

    const handleDelete = () => {
        setCamps(prev => prev.filter(c => c.id !== selectedCamp.id));
        setOpenManage(false);
    };

    const filteredCamps = filter === 'All' ? camps : camps.filter(c => c.status === filter);

    const getStatusColors = (status) => {
        switch (status) {
            case 'Ongoing': return { bg: '#dcfce7', text: '#16a34a', main: '#dc2626' }; // Red main for ongoing emergency/active focus
            case 'Upcoming': return { bg: '#eff6ff', text: '#2563eb', main: '#0f172a' }; // Dark slate for upcoming
            case 'Completed': return { bg: '#f1f5f9', text: '#64748b', main: '#64748b' };
            default: return { bg: '#fef2f2', text: '#dc2626', main: '#0f172a' };
        }
    };

    const getDateParts = (dateStr) => {
        try {
            const d = new Date(dateStr);
            if (isNaN(d.getTime())) throw new Error();
            return {
                month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
                day: d.getDate().toString().padStart(2, '0'),
                year: d.getFullYear()
            };
        } catch {
            return { month: 'MAR', day: '20', year: '2026' };
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="camps"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'circOut' }}
            >
                {/* Premium Banner Header */}
                <Box sx={{
                    borderRadius: 5,
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    color: 'white',
                    p: { xs: 4, md: 5 },
                    mb: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    gap: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.4)'
                }}>
                    <Box sx={{ position: 'relative', zIndex: 2 }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#38bdf8', mb: 1 }}>
                            Event Orchestrator
                        </Typography>
                        <Typography sx={{ fontSize: 36, fontWeight: 900, mb: 1.5, lineHeight: 1.1 }}>
                            Donation Camps
                        </Typography>
                        <Typography sx={{ fontSize: 15, color: '#cbd5e1', fontWeight: 500, maxWidth: 500, lineHeight: 1.6 }}>
                            Transform community spaces into life-saving hubs. Manage active blood drives, schedule future events, and process donor registrations efficiently.
                        </Typography>
                    </Box>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ zIndex: 2 }}>
                        <Button
                            variant="contained"
                            startIcon={<AddCircleOutlineIcon />}
                            onClick={handleOpenAdd}
                            sx={{
                                bgcolor: '#dc2626', color: 'white', borderRadius: 100, fontWeight: 900, textTransform: 'none', px: 4, py: 1.8, fontSize: 15,
                                boxShadow: '0 12px 30px rgba(220, 38, 36, 0.4)',
                                '&:hover': { bgcolor: '#ef4444', boxShadow: '0 15px 40px rgba(239, 68, 68, 0.5)' }
                            }}
                        >
                            Schedule Camp
                        </Button>
                    </motion.div>

                    {/* Abstract water drop / festival icon floating in background */}
                    <Box sx={{ position: 'absolute', right: -40, bottom: -60, opacity: 0.05, transform: 'rotate(-15deg)' }}>
                        <FestivalIcon sx={{ fontSize: 320 }} />
                    </Box>
                </Box>

                {/* Filter Controls */}
                <Box sx={{ display: 'flex', gap: 1.5, mb: 4, overflowX: 'auto', pb: 1, '&::-webkit-scrollbar': { display: 'none' } }}>
                    {['All', 'Upcoming', 'Ongoing', 'Completed'].map(type => (
                        <Button
                            key={type}
                            onClick={() => setFilter(type)}
                            sx={{
                                px: 3, py: 1, fontWeight: 800, fontSize: 13, textTransform: 'none',
                                borderRadius: 100,
                                bgcolor: filter === type ? '#dc2626' : 'transparent',
                                color: filter === type ? 'white' : '#64748b',
                                border: '2px solid',
                                borderColor: filter === type ? '#dc2626' : '#e2e8f0',
                                '&:hover': { bgcolor: filter === type ? '#ef4444' : '#f1f5f9', borderColor: filter === type ? '#ef4444' : '#cbd5e1' },
                                transition: 'all 0.2s ease-in-out'
                            }}
                        >
                            {type} Drives
                        </Button>
                    ))}
                </Box>

                {/* Ticket Style Event Grid */}
                <Grid container spacing={3}>
                    {filteredCamps.map((camp, i) => {
                        const target = camp.target || 200;
                        const collected = camp.collected || 0;
                        const progress = Math.min((collected / target) * 100, 100);
                        const { month, day, year } = getDateParts(camp.date);
                        const colors = getStatusColors(camp.status);

                        return (
                            <Grid item xs={12} xl={6} key={camp.id}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                >
                                    <Paper sx={{
                                        display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
                                        borderRadius: 5, overflow: 'hidden', border: '1px solid #e2e8f0',
                                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.02)',
                                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)',
                                            borderColor: '#cbd5e1'
                                        }
                                    }}>
                                        {/* Date Block (Ticket Stub) */}
                                        <Box sx={{
                                            minWidth: { xs: '100%', sm: 160 },
                                            bgcolor: colors.main,
                                            color: 'white', p: 3, display: 'flex', flexDirection: { xs: 'row', sm: 'column' },
                                            justifyContent: 'center', alignItems: 'center', gap: { xs: 2, sm: 0 },
                                            position: 'relative'
                                        }}>
                                            <Typography sx={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>{month}</Typography>
                                            <Typography sx={{ fontSize: { xs: 36, sm: 56 }, fontWeight: 900, lineHeight: 1, my: { xs: 0, sm: 1 } }}>{day}</Typography>
                                            <Typography sx={{ fontSize: 13, fontWeight: 700, opacity: 0.8 }}>{year}</Typography>

                                            {/* Perforation detail line (hidden on mobile layout) */}
                                            <Box sx={{ display: { xs: 'none', sm: 'block' }, position: 'absolute', right: -1, top: 0, bottom: 0, width: 2, backgroundImage: 'linear-gradient(to bottom, transparent 50%, white 50%)', backgroundSize: '100% 12px', opacity: 0.2 }} />
                                        </Box>

                                        {/* Event Content Block */}
                                        <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', bgcolor: 'white' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                                <Box>
                                                    <Typography sx={{ fontSize: 24, fontWeight: 900, color: '#0f172a', lineHeight: 1.2, mb: 1 }}>{camp.name}</Typography>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <LocationOnIcon sx={{ fontSize: 16, color: '#94a3b8' }} />
                                                        <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#64748b' }}>{camp.location}</Typography>
                                                    </Box>
                                                </Box>
                                                <Chip
                                                    label={camp.status}
                                                    size="small"
                                                    sx={{ bgcolor: colors.bg, color: colors.text, fontWeight: 800, fontSize: 12, borderRadius: 2 }}
                                                />
                                            </Box>

                                            <Box sx={{ flex: 1 }} /> {/* Spacer */}

                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: { xs: 3, md: 4 }, mt: 4, pt: 3, borderTop: '1px dashed #e2e8f0' }}>
                                                {/* Progress Ring Stats */}
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <CircularProgress variant="determinate" value={100} size={46} thickness={5} sx={{ color: '#f1f5f9', position: 'absolute' }} />
                                                        <CircularProgress variant="determinate" value={progress} size={46} thickness={5} sx={{ color: camp.status === 'Completed' ? '#64748b' : '#16a34a', strokeLinecap: 'round' }} />
                                                        <Typography sx={{ fontSize: 11, fontWeight: 900, position: 'absolute', color: '#0f172a' }}>{Math.round(progress)}%</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ fontSize: 11, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, mb: 0.3 }}>Units Collected</Typography>
                                                        <Typography sx={{ fontSize: 16, fontWeight: 900, color: '#0f172a' }}>{collected} <span style={{ color: '#94a3b8', fontSize: 13, fontWeight: 700 }}>/ {target}</span></Typography>
                                                    </Box>
                                                </Box>

                                                <Box sx={{ flex: 1 }} />

                                                {/* Action Buttons */}
                                                <Box sx={{ display: 'flex', gap: 1.5, width: { xs: '100%', sm: 'auto' } }}>
                                                    <IconButton
                                                        onClick={() => handleOpenManage(camp)}
                                                        sx={{ bgcolor: '#f1f5f9', color: '#64748b', borderRadius: 3, '&:hover': { bgcolor: '#e2e8f0', color: '#0f172a' } }}
                                                    >
                                                        <SettingsIcon fontSize="small" />
                                                    </IconButton>
                                                    <Button
                                                        fullWidth
                                                        variant="contained"
                                                        onClick={() => handleOpenRequests(camp)}
                                                        sx={{
                                                            bgcolor: '#0f172a', color: 'white', borderRadius: 3, px: 3, py: 1, fontWeight: 800, textTransform: 'none', fontSize: 14,
                                                            '&:hover': { bgcolor: '#1e293b' }
                                                        }}
                                                        endIcon={<KeyboardArrowRightIcon />}
                                                    >
                                                        Manage Requests
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>
            </motion.div>

            {/* Premium Camp Dialog */}
            <CampDialog
                open={openAdd || openManage}
                onClose={() => { setOpenAdd(false); setOpenManage(false); }}
                onSave={openAdd ? handleSaveAdd : handleSaveUpdate}
                onDelete={openManage ? handleDelete : null}
                title={openAdd ? "Schedule Delivery Node" : "Manage Camp Hub"}
                formData={formData}
                setFormData={setFormData}
                mode={openAdd ? "add" : "edit"}
            />

            {/* Premium Requests Dialog */}
            <RequestsDialog
                open={openRequests}
                onClose={() => setOpenRequests(false)}
                camp={selectedCamp}
            />
        </AnimatePresence>
    );
};

/* ─── Premium Camp Dialog ────────────────────────────────────────────── */
const CampDialog = ({ open, onClose, onSave, onDelete, title, formData, setFormData, mode }) => (
    <Dialog
        open={open} onClose={onClose}
        TransitionComponent={Fade}
        PaperProps={{
            sx: { borderRadius: 4, p: 1, maxWidth: 520, width: '100%', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden' }
        }}
    >
        <Box sx={{ p: 4, pt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, flex: 1 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: 4, bgcolor: mode === 'add' ? '#f0fdf4' : '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: mode === 'add' ? '#16a34a' : '#2563eb' }}>
                        {mode === 'add' ? <AddCircleOutlineIcon fontSize="medium" /> : <SettingsIcon fontSize="medium" />}
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 900, fontSize: 22, color: '#0f172a', letterSpacing: -0.5 }}>{title}</Typography>
                        <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 600 }}>Event Configuration</Typography>
                    </Box>
                </Box>
                <IconButton onClick={onClose} sx={{ color: '#94a3b8' }}><CloseIcon /></IconButton>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Campaign Name</Typography>
                    <TextField
                        placeholder="e.g. City Plaza Drive" fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><FestivalIcon sx={{ fontSize: 18, color: '#94a3b8' }} /></InputAdornment>,
                            sx: { borderRadius: 4, bgcolor: '#f8fafc', border: 'none', '& fieldset': { border: 'none' }, py: 0.5, fontWeight: 600 }
                        }}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Venue / Location</Typography>
                    <TextField
                        placeholder="Location Area" fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LocationOnIcon sx={{ fontSize: 18, color: '#94a3b8' }} /></InputAdornment>,
                            sx: { borderRadius: 4, bgcolor: '#f8fafc', border: 'none', '& fieldset': { border: 'none' }, py: 0.5, fontWeight: 600 }
                        }}
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Scheduled Date</Typography>
                    <TextField
                        type="date"
                        fullWidth
                        InputProps={{
                            sx: { borderRadius: 4, bgcolor: '#f8fafc', border: 'none', '& fieldset': { border: 'none' }, py: 0.5, fontWeight: 600 }
                        }}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Status</Typography>
                    <TextField
                        select fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><EventAvailableIcon sx={{ fontSize: 18, color: '#2563eb' }} /></InputAdornment>,
                            sx: { borderRadius: 4, bgcolor: '#f8fafc', border: 'none', '& fieldset': { border: 'none' }, py: 0.5, fontWeight: 600 }
                        }}
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                        {['Upcoming', 'Ongoing', 'Completed'].map(s => (
                            <MenuItem key={s} value={s} sx={{ fontWeight: 700, fontSize: 14 }}>{s}</MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Target Donation Units</Typography>
                    <TextField
                        type="number"
                        placeholder="e.g. 500" fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><WaterDropIcon sx={{ fontSize: 18, color: '#dc2626' }} /></InputAdornment>,
                            sx: { borderRadius: 4, bgcolor: '#f8fafc', border: 'none', '& fieldset': { border: 'none' }, py: 0.5, fontWeight: 600 }
                        }}
                        value={formData.target}
                        onChange={(e) => setFormData({ ...formData, target: Number(e.target.value) })}
                    />
                </Grid>
            </Grid>

            <Box sx={{ mt: 5, display: 'flex', gap: 2 }}>
                {mode === 'edit' && (
                    <Button
                        onClick={onDelete} color="error"
                        sx={{ fontWeight: 900, textTransform: 'none', borderRadius: 4, px: 3, '&:hover': { bgcolor: '#fef2f2' } }}
                    >
                        Cancel Camp
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
                    {mode === 'add' ? 'Publish Camp' : 'Save Changes'}
                </Button>
            </Box>
        </Box>
    </Dialog>
);

/* ─── Premium Requests Dialog ─────────────────────────────────────────────── */
const RequestsDialog = ({ open, onClose, camp }) => (
    <Dialog
        open={open} onClose={onClose}
        TransitionComponent={Zoom}
        PaperProps={{
            sx: { borderRadius: 4, p: 0, width: 700, maxWidth: '100%', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }
        }}
    >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: 600 }}>
            {/* Left Sidebar */}
            <Box sx={{ width: { xs: '100%', md: 260 }, bgcolor: '#0f172a', p: 4, color: 'white', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 6 }}>
                    <FestivalIcon sx={{ color: '#dc2626', fontSize: 42, mb: 2 }} />
                    <Typography sx={{ fontSize: 20, fontWeight: 900, lineHeight: 1.2, mb: 1 }}>{camp?.name}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 14, color: '#94a3b8' }} />
                        <Typography sx={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>{camp?.location}</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
                    <Box>
                        <Typography sx={{ fontSize: 11, color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', mb: 1, letterSpacing: 0.5 }}>Active Requests</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <PeopleIcon sx={{ color: '#3b82f6', fontSize: 24 }} />
                            <Typography sx={{ fontSize: 32, fontWeight: 900, lineHeight: 1 }}>34</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 11, color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', mb: 1, letterSpacing: 0.5 }}>Capacity Fulfillment</Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#16a34a' }}>{Math.round(((camp?.collected || 0) / (camp?.target || 1)) * 100)}% Booked</Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: 'auto', pt: 4 }}>
                    <Button
                        variant="outlined" fullWidth onClick={onClose}
                        sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white', borderRadius: 100, py: 1.5, textTransform: 'none', fontWeight: 800, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.5)' } }}
                    >
                        Close Registry
                    </Button>
                </Box>
            </Box>

            {/* Right Feed */}
            <Box sx={{ flex: 1, p: 4, bgcolor: '#f8fafc', maxHeight: 600, overflowY: 'auto' }}>
                <Typography sx={{ fontSize: 13, fontWeight: 900, color: '#0f172a', mb: 3, px: 2, textTransform: 'uppercase', letterSpacing: 1 }}>Donor Registrations</Typography>
                <List disablePadding>
                    {[
                        { id: 1, name: 'Alex Thompson', blood: 'O-', date: 'Registered today', status: 'Approved' },
                        { id: 2, name: 'Sarah Jenkins', blood: 'A+', date: 'Registered yesterday', status: 'Pending' },
                        { id: 3, name: 'Michael Chen', blood: 'B+', date: '2 Days ago', status: 'Approved' },
                        { id: 4, name: 'Emily Davis', blood: 'AB-', date: '1 Week ago', status: 'Approved' },
                        { id: 5, name: 'Robert King', blood: 'O+', date: '1 Week ago', status: 'Pending' },
                        { id: 6, name: 'Jessica Liu', blood: 'A-', date: '1 Week ago', status: 'Approved' },
                    ].map((item, i) => (
                        <Box key={item.id}>
                            <ListItem sx={{ py: 2, borderRadius: 4, transition: 'all 0.2s', '&:hover': { bgcolor: 'white', boxShadow: '0 10px 20px -10px rgba(0,0,0,0.05)' } }}>
                                <Avatar sx={{ width: 40, height: 40, mr: 2, bgcolor: item.status === 'Approved' ? '#eff6ff' : '#fef2f2', color: item.status === 'Approved' ? '#2563eb' : '#f59e0b', fontWeight: 800, fontSize: 14 }}>
                                    {item.name.charAt(0)}
                                </Avatar>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 0.5 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontWeight: 800, fontSize: 15, color: '#0f172a' }}>{item.name}</Typography>
                                        <Chip label={item.blood} size="small" sx={{ bgcolor: '#f1f5f9', color: '#dc2626', fontWeight: 900, borderRadius: 2, height: 20, fontSize: 11 }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>{item.date}</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            {item.status === 'Approved' ? <VerifiedIcon sx={{ fontSize: 14, color: '#16a34a' }} /> : <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#f59e0b' }} />}
                                            <Typography sx={{ fontSize: 11, fontWeight: 700, color: item.status === 'Approved' ? '#16a34a' : '#f59e0b' }}>{item.status}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </ListItem>
                            {i < 5 && <Divider sx={{ my: 0.5, opacity: 0.5, borderColor: '#e2e8f0' }} />}
                        </Box>
                    ))}
                </List>
            </Box>
        </Box>
    </Dialog>
);

export default CampsView;
