import React, { useState } from 'react';
import {
    Box, Typography, Paper, Chip, Button, IconButton,
    Dialog, TextField, MenuItem, InputAdornment, LinearProgress,
    Tooltip, Fade
} from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';
import AssessmentIcon from '@mui/icons-material/Assessment';

import { motion, AnimatePresence } from 'framer-motion';

const defaultRequests = [
    { id: 'REQ-001', hospital: 'City General', bloodType: 'O-', units: 5, filled: 1, urgency: 'Critical', status: 'Pending', date: '2026-03-10' },
    { id: 'REQ-002', hospital: 'Mercy Care', bloodType: 'A+', units: 2, filled: 2, urgency: 'High', status: 'Approved', date: '2026-03-09' },
    { id: 'REQ-003', hospital: 'St. Jude', bloodType: 'B+', units: 10, filled: 10, urgency: 'Normal', status: 'Fulfilled', date: '2026-03-08' },
];

const RequestsView = ({ requests: propRequests, setRequests: propSetRequests }) => {
    const [localRequests, setLocalRequests] = useState(defaultRequests);
    // Sync with props if available, otherwise use local
    const baseRequests = propRequests && propRequests.length > 0 ? propRequests : localRequests;

    // Ensure all requests have a 'filled' and 'date' field internally for UI display
    const requests = baseRequests.map(r => ({
        ...r,
        filled: r.filled !== undefined ? r.filled : (r.status === 'Fulfilled' ? r.units : 0),
        date: r.date || new Date().toISOString().split('T')[0]
    }));

    const setRequests = propSetRequests || setLocalRequests;

    // UI States
    const [openAdd, setOpenAdd] = useState(false);
    const [openManage, setOpenManage] = useState(false);
    const [filter, setFilter] = useState('All');

    // Data State
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [formData, setFormData] = useState({
        hospital: '', bloodType: 'O-', units: 1, filled: 0, urgency: 'Normal', status: 'Pending'
    });

    const handleOpenAdd = () => {
        setFormData({ hospital: '', bloodType: 'O-', units: 1, filled: 0, urgency: 'Normal', status: 'Pending' });
        setOpenAdd(true);
    };

    const handleOpenManage = (req) => {
        setSelectedRequest(req);
        setFormData({ ...req });
        setOpenManage(true);
    };

    const handleSaveAdd = () => {
        const newReq = {
            ...formData,
            id: `REQ-${Math.floor(100 + Math.random() * 900)}`,
            date: new Date().toISOString().split('T')[0]
        };
        setRequests(prev => [newReq, ...prev]);
        setOpenAdd(false);
    };

    const handleSaveUpdate = () => {
        setRequests(prev => prev.map(r => r.id === selectedRequest.id ? { ...r, ...formData } : r));
        setOpenManage(false);
    };

    const handleDelete = () => {
        setRequests(prev => prev.filter(r => r.id !== selectedRequest.id));
        setOpenManage(false);
    };

    // Derived states
    const filteredRequests = filter === 'All' ? requests :
        filter === 'Critical' ? requests.filter(r => r.urgency === 'Critical') :
            requests.filter(r => r.status === filter);

    const getUrgencyStyles = (urgency) => {
        switch (urgency) {
            case 'Critical': return { bg: '#fee2e2', text: '#ef4444', icon: <WarningAmberIcon sx={{ fontSize: 16 }} /> };
            case 'High': return { bg: '#ffedd5', text: '#f97316', icon: <AccessTimeIcon sx={{ fontSize: 16 }} /> };
            default: return { bg: '#f1f5f9', text: '#64748b', icon: <AssessmentIcon sx={{ fontSize: 16 }} /> };
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="requests-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {/* Header Block */}
                <Box sx={{
                    borderRadius: 5,
                    bgcolor: '#ffffff',
                    p: { xs: 4, md: 5 },
                    mb: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    gap: 3,
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <Box sx={{ position: 'relative', zIndex: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                            <Box sx={{ width: 40, height: 40, borderRadius: 3, bgcolor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <AddAlertIcon sx={{ color: '#ef4444', fontSize: 20 }} />
                            </Box>
                            <Typography sx={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, color: '#ef4444' }}>
                                Logistics Control
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: 32, fontWeight: 900, color: '#0f172a', mb: 1, lineHeight: 1.1, letterSpacing: -1 }}>
                            Emergency Blood Dispatches
                        </Typography>
                        <Typography sx={{ fontSize: 15, color: '#64748b', fontWeight: 500, maxWidth: 500, lineHeight: 1.6 }}>
                            A high-priority pipeline mapping exact blood group needs to capable network hospitals. Track unit fulfillment directly from the operational grid.
                        </Typography>
                    </Box>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ zIndex: 2 }}>
                        <Button
                            variant="contained"
                            startIcon={<AddAlertIcon />}
                            onClick={handleOpenAdd}
                            sx={{
                                bgcolor: '#0f172a', color: 'white', borderRadius: 100, fontWeight: 900, textTransform: 'none', px: 4, py: 1.8, fontSize: 14,
                                boxShadow: '0 12px 30px rgba(15, 23, 42, 0.25)',
                                '&:hover': { bgcolor: '#1e293b', boxShadow: '0 15px 40px rgba(15, 23, 42, 0.35)' }
                            }}
                        >
                            Broadcast Urgent Need
                        </Button>
                    </motion.div>
                </Box>

                {/* Filter Controls */}
                <Box sx={{ display: 'flex', gap: 1.5, mb: 4, overflowX: 'auto', pb: 1, '&::-webkit-scrollbar': { display: 'none' } }}>
                    {['All', 'Critical', 'Pending', 'Approved', 'Fulfilled'].map(type => {
                        const isCritical = type === 'Critical';
                        return (
                            <Button
                                key={type}
                                onClick={() => setFilter(type)}
                                sx={{
                                    px: 2.5, py: 1, fontWeight: 800, fontSize: 13, textTransform: 'none',
                                    borderRadius: 3,
                                    bgcolor: filter === type ? (isCritical ? '#ef4444' : '#0f172a') : 'white',
                                    color: filter === type ? 'white' : '#64748b',
                                    border: '1px solid',
                                    borderColor: filter === type ? (isCritical ? '#ef4444' : '#0f172a') : '#e2e8f0',
                                    '&:hover': {
                                        bgcolor: filter === type ? (isCritical ? '#dc2626' : '#1e293b') : '#f8fafc'
                                    },
                                    transition: 'all 0.2s',
                                    boxShadow: filter === type ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                                }}
                            >
                                {isCritical && filter !== type ? <WarningAmberIcon sx={{ mr: 0.5, fontSize: 16 }} /> : null}
                                {type}
                            </Button>
                        )
                    })}
                </Box>

                {/* Requests Grid / List */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {filteredRequests.map((req, i) => {
                        const progress = req.units > 0 ? Math.min((req.filled / req.units) * 100, 100) : 0;
                        const urgencyStyle = getUrgencyStyles(req.urgency);

                        return (
                            <motion.div
                                key={req.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05, type: 'spring', stiffness: 300, damping: 24 }}
                            >
                                <Paper sx={{
                                    display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: { xs: 'stretch', lg: 'center' },
                                    gap: { xs: 3, lg: 4 }, p: 3, borderRadius: 4, border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 20px -10px rgba(0,0,0,0.03)',
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        borderColor: '#cbd5e1', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.08)', transform: 'translateY(-2px)'
                                    }
                                }}>
                                    {/* Left Status Area */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: { lg: '30%' } }}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Box sx={{ width: 60, height: 60, borderRadius: 3, bgcolor: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <BloodtypeIcon sx={{ color: '#ef4444', fontSize: 32 }} />
                                            </Box>
                                            <Chip
                                                label={req.bloodType}
                                                size="small"
                                                sx={{ position: 'absolute', bottom: -10, right: -10, bgcolor: '#ef4444', color: 'white', fontWeight: 900, fontSize: 11, borderRadius: 1.5, border: '2px solid white' }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: 12, fontWeight: 800, color: '#94a3b8', letterSpacing: 1, mb: 0.5 }}>{req.id}</Typography>
                                            <Typography sx={{ fontSize: 18, fontWeight: 900, color: '#0f172a', lineHeight: 1.2 }}>{req.hospital}</Typography>
                                        </Box>
                                    </Box>

                                    {/* Metrics Area */}
                                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography sx={{ fontSize: 12, fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Fulfillment Pipeline</Typography>
                                            <Typography sx={{ fontSize: 13, fontWeight: 900, color: progress === 100 ? '#16a34a' : '#0f172a' }}>
                                                {req.filled} <span style={{ color: '#94a3b8', fontWeight: 600 }}>/ {req.units} Units</span>
                                            </Typography>
                                        </Box>
                                        <LinearProgress
                                            variant="determinate"
                                            value={progress}
                                            sx={{
                                                height: 8, borderRadius: 4, bgcolor: '#f1f5f9',
                                                '& .MuiLinearProgress-bar': { bgcolor: progress === 100 ? '#16a34a' : '#3b82f6', borderRadius: 4 }
                                            }}
                                        />
                                    </Box>

                                    {/* Attributes & Action */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, width: { lg: '35%' }, borderTop: { xs: '1px dashed #e2e8f0', lg: 'none' }, pt: { xs: 2, lg: 0 } }}>
                                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                                            <Chip
                                                icon={urgencyStyle.icon}
                                                label={req.urgency}
                                                sx={{ bgcolor: urgencyStyle.bg, color: urgencyStyle.text, fontWeight: 800, fontSize: 12, borderRadius: 2, '& .MuiChip-icon': { color: urgencyStyle.text } }}
                                            />
                                            <Chip
                                                label={req.status}
                                                variant={req.status === 'Fulfilled' ? "filled" : "outlined"}
                                                sx={{
                                                    bgcolor: req.status === 'Fulfilled' ? '#dcfce7' : 'transparent',
                                                    color: req.status === 'Fulfilled' ? '#16a34a' : '#64748b',
                                                    borderColor: req.status === 'Fulfilled' ? '#dcfce7' : '#cbd5e1',
                                                    fontWeight: 800, fontSize: 12, borderRadius: 2
                                                }}
                                            />
                                        </Box>

                                        <IconButton
                                            onClick={() => handleOpenManage(req)}
                                            sx={{
                                                bgcolor: '#f8fafc', color: '#0f172a', borderRadius: 3, border: '1px solid #e2e8f0',
                                                '&:hover': { bgcolor: '#0f172a', color: 'white', borderColor: '#0f172a' }
                                            }}
                                        >
                                            <OpenInNewIcon sx={{ fontSize: 18 }} />
                                        </IconButton>
                                    </Box>
                                </Paper>
                            </motion.div>
                        );
                    })}
                </Box>
            </motion.div>

            {/* Premium Request Master Dialog */}
            <RequestDialog
                open={openAdd || openManage}
                onClose={() => { setOpenAdd(false); setOpenManage(false); }}
                onSave={openAdd ? handleSaveAdd : handleSaveUpdate}
                onDelete={openManage ? handleDelete : null}
                title={openAdd ? "Broadcast New Need" : "Manage Request Node"}
                formData={formData}
                setFormData={setFormData}
                mode={openAdd ? "add" : "edit"}
            />
        </AnimatePresence>
    );
};

/* ─── Premium Request Master Dialog ────────────────────────────────────────────── */
const RequestDialog = ({ open, onClose, onSave, onDelete, title, formData, setFormData, mode }) => (
    <Dialog
        open={open} onClose={onClose}
        TransitionComponent={Fade}
        PaperProps={{
            sx: { borderRadius: 4, p: 0, maxWidth: 540, width: '100%', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3)', overflow: 'hidden' }
        }}
    >
        {/* Dynamic header banner based on Urgency */}
        <Box sx={{
            bgcolor: formData.urgency === 'Critical' ? '#ef4444' : formData.urgency === 'High' ? '#f97316' : '#0f172a',
            height: 12, width: '100%', transition: 'background-color 0.3s'
        }} />

        <Box sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: 4, bgcolor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AddAlertIcon sx={{ color: '#0f172a', fontSize: 24 }} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 900, fontSize: 22, color: '#0f172a', letterSpacing: -0.5 }}>{title}</Typography>
                        <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 600 }}>ID: {formData.id || 'Pending Genesis'}</Typography>
                    </Box>
                </Box>
                <IconButton onClick={onClose} sx={{ color: '#94a3b8', bgcolor: '#f8fafc', '&:hover': { bgcolor: '#e2e8f0' } }}><CloseIcon /></IconButton>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Target Hospital / Clinic</Typography>
                    <TextField
                        placeholder="e.g. Cedar Sinai Medical" fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LocalHospitalIcon sx={{ fontSize: 18, color: '#94a3b8' }} /></InputAdornment>,
                            sx: { borderRadius: 3, bgcolor: '#f8fafc', border: '1px solid #e2e8f0', '& fieldset': { border: 'none' }, py: 0.5, fontWeight: 700 }
                        }}
                        value={formData.hospital}
                        onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Blood Group</Typography>
                        <TextField
                            select fullWidth
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><BloodtypeIcon sx={{ fontSize: 18, color: '#ef4444' }} /></InputAdornment>,
                                sx: { borderRadius: 3, bgcolor: '#f8fafc', border: '1px solid #e2e8f0', '& fieldset': { border: 'none' }, py: 0.5, fontWeight: 800 }
                            }}
                            value={formData.bloodType}
                            onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                        >
                            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                                <MenuItem key={type} value={type} sx={{ fontWeight: 800 }}>{type}</MenuItem>
                            ))}
                        </TextField>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Priority Level</Typography>
                        <TextField
                            select fullWidth
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><WarningAmberIcon sx={{ fontSize: 18, color: formData.urgency === 'Critical' ? '#ef4444' : '#f59e0b' }} /></InputAdornment>,
                                sx: { borderRadius: 3, bgcolor: '#f8fafc', border: '1px solid #e2e8f0', '& fieldset': { border: 'none' }, py: 0.5, fontWeight: 800 }
                            }}
                            value={formData.urgency}
                            onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        >
                            {['Normal', 'High', 'Critical'].map(level => (
                                <MenuItem key={level} value={level} sx={{ fontWeight: 800 }}>{level}</MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>

                {/* Progress / Units Matrix */}
                <Box sx={{ bgcolor: '#f8fafc', borderRadius: 3, border: '1px solid #e2e8f0', p: 3 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 2, textTransform: 'uppercase' }}>Fulfillment Thresholds</Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: 11, fontWeight: 800, color: '#94a3b8', mb: 1 }}>Total Required (Units)</Typography>
                            <TextField
                                type="number" fullWidth
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><WaterDropIcon sx={{ fontSize: 16, color: '#3b82f6' }} /></InputAdornment>,
                                    sx: { borderRadius: 2, bgcolor: 'white', '& fieldset': { borderColor: '#e2e8f0' }, fontWeight: 800 }
                                }}
                                value={formData.units}
                                onChange={(e) => setFormData({ ...formData, units: Math.max(1, Number(e.target.value)) })}
                            />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: 11, fontWeight: 800, color: '#94a3b8', mb: 1 }}>Currently Filled</Typography>
                            <TextField
                                type="number" fullWidth
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><VerifiedIcon sx={{ fontSize: 16, color: '#16a34a' }} /></InputAdornment>,
                                    sx: { borderRadius: 2, bgcolor: 'white', '& fieldset': { borderColor: '#e2e8f0' }, fontWeight: 800 }
                                }}
                                value={formData.filled}
                                onChange={(e) => setFormData({ ...formData, filled: Math.max(0, Math.min(formData.units, Number(e.target.value))) })}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Typography sx={{ fontSize: 12, fontWeight: 900, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>Operational Status</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {['Pending', 'Approved', 'Fulfilled'].map(s => (
                            <Button
                                key={s}
                                onClick={() => {
                                    const update = { status: s };
                                    if (s === 'Fulfilled') update.filled = formData.units;
                                    setFormData({ ...formData, ...update })
                                }}
                                sx={{
                                    flex: 1, py: 1.5, borderRadius: 3, textTransform: 'none', fontWeight: 800, fontSize: 13,
                                    bgcolor: formData.status === s ? (s === 'Fulfilled' ? '#dcfce7' : '#0f172a') : '#f8fafc',
                                    color: formData.status === s ? (s === 'Fulfilled' ? '#16a34a' : 'white') : '#64748b',
                                    border: '1px solid',
                                    borderColor: formData.status === s ? 'transparent' : '#e2e8f0',
                                    '&:hover': { bgcolor: formData.status === s ? undefined : '#f1f5f9' }
                                }}
                            >
                                {s}
                            </Button>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box sx={{ mt: 5, pt: 3, borderTop: '1px dashed #e2e8f0', display: 'flex', gap: 2 }}>
                {mode === 'edit' && (
                    <Button
                        onClick={onDelete} color="error" variant="outlined"
                        sx={{ fontWeight: 800, textTransform: 'none', borderRadius: 100, px: 3, border: '2px solid' }}
                    >
                        Delete Request
                    </Button>
                )}
                <Box sx={{ flex: 1 }} />
                <Button
                    onClick={onClose}
                    sx={{ color: '#64748b', fontWeight: 800, textTransform: 'none', borderRadius: 100, px: 3 }}
                >
                    Discard
                </Button>
                <Button
                    onClick={onSave} variant="contained"
                    sx={{
                        bgcolor: formData.urgency === 'Critical' ? '#ef4444' : '#0f172a',
                        borderRadius: 100, px: 4, py: 1.5, fontWeight: 900, textTransform: 'none',
                        boxShadow: `0 10px 30px ${formData.urgency === 'Critical' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(15, 23, 42, 0.3)'}`,
                        '&:hover': { bgcolor: formData.urgency === 'Critical' ? '#dc2626' : '#1e293b' }
                    }}
                >
                    {mode === 'add' ? 'Broadcast Need' : 'Update Node'}
                </Button>
            </Box>
        </Box>
    </Dialog>
);

export default RequestsView;
