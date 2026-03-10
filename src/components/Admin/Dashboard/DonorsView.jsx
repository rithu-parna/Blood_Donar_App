import React, { useState } from 'react';
import {
    Box, Typography, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Button, IconButton, TextField, Dialog,
    DialogTitle, DialogContent, DialogActions, MenuItem, Avatar,
    InputAdornment, Tooltip, Fade, Zoom
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { motion, AnimatePresence } from 'framer-motion';
import { BloodBadge, PulseDot } from '../AdminUIUtils';

const DonorsView = ({ donors, setDonors }) => {
    // Modal states
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    // Data states
    const [currentDonor, setCurrentDonor] = useState(null);
    const [formData, setFormData] = useState({ name: '', type: '', lastDonation: '', status: 'Active' });

    // Handlers
    const handleOpenAdd = () => {
        setFormData({ name: '', type: '', lastDonation: '', status: 'Active' });
        setOpenAdd(true);
    };

    const handleOpenEdit = (donor) => {
        setCurrentDonor(donor);
        setFormData({ ...donor });
        setOpenEdit(true);
    };

    const handleOpenDelete = (donor) => {
        setCurrentDonor(donor);
        setOpenDelete(true);
    };

    const handleSaveAdd = () => {
        const newEntry = {
            ...formData,
            id: donors.length > 0 ? Math.max(...donors.map(d => d.id)) + 1 : 1
        };
        setDonors(prev => [...prev, newEntry]);
        setOpenAdd(false);
    };

    const handleSaveEdit = () => {
        setDonors(prev => prev.map(d => d.id === currentDonor.id ? { ...formData, id: d.id } : d));
        setOpenEdit(false);
    };

    const handleDelete = () => {
        setDonors(prev => prev.filter(d => d.id !== currentDonor.id));
        setOpenDelete(false);
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="donors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <Paper sx={{
                    p: { xs: 2.5, md: 4 },
                    borderRadius: 1,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.04)',
                    border: '1px solid #e2e8f0',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 3, mb: 5 }}>
                        <Box>
                            <Typography sx={{ fontSize: 24, fontWeight: 900, color: '#0f172a', mb: 0.5, letterSpacing: -0.5 }}>Donor Directory</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Box sx={{ p: 0.5, px: 1.2, borderRadius: 100, bgcolor: '#fef2f2', color: '#dc2626', fontSize: 11, fontWeight: 800 }}>
                                    {donors.length} Total Donors
                                </Box>
                                <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>Global registry of life savers</Typography>
                            </Box>
                        </Box>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="contained"
                                startIcon={<PersonAddIcon />}
                                onClick={handleOpenAdd}
                                sx={{
                                    bgcolor: '#dc2626',
                                    borderRadius: 100,
                                    fontWeight: 800,
                                    textTransform: 'none',
                                    px: 4, py: 1.5,
                                    fontSize: 14,
                                    boxShadow: '0 10px 25px rgba(220, 38, 36, 0.3)',
                                    '&:hover': { bgcolor: '#b91c1c', boxShadow: '0 15px 30px rgba(220, 38, 36, 0.5)' }
                                }}
                            >
                                Add New Donor
                            </Button>
                        </motion.div>
                    </Box>

                    <TableContainer sx={{ overflow: 'visible' }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ '& th': { borderBottom: '2px solid #f1f5f9', color: '#94a3b8', fontWeight: 800, fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, py: 2 } }}>
                                    {['Donor Name', 'Group', 'Last Donation', 'Status', 'Actions'].map(h => <TableCell key={h}>{h}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <AnimatePresence>
                                    {donors.map((donor, i) => (
                                        <TableRow
                                            component={motion.tr}
                                            layout
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ delay: i * 0.05 }}
                                            key={donor.id}
                                            hover
                                            sx={{
                                                '& td': { py: 2.5, fontWeight: 700, fontSize: 14, color: '#1e293b' },
                                                '&:hover': { bgcolor: '#f8fafc' },
                                                cursor: 'pointer',
                                                transition: 'background 0.2s'
                                            }}
                                        >
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <Avatar sx={{
                                                        width: 40, height: 40, bgcolor: '#f1f5f9', color: '#64748b', fontSize: 14, fontWeight: 900,
                                                        border: '2px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                                                    }}>
                                                        {donor.name.split(' ').map(n => n[0]).join('')}
                                                    </Avatar>
                                                    <Box>
                                                        <Typography sx={{ fontWeight: 800, fontSize: 14, color: '#0f172a' }}>{donor.name}</Typography>
                                                        <Typography sx={{ fontSize: 11, color: '#94a3b8', fontWeight: 600 }}>ID: #{String(donor.id).padStart(4, '0')}</Typography>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                            <TableCell><BloodBadge type={donor.type} /></TableCell>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#64748b' }}>
                                                    <CalendarMonthIcon sx={{ fontSize: 16 }} />
                                                    <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{donor.lastDonation}</Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <PulseDot color={donor.status === 'Active' ? '#16a34a' : '#94a3b8'} />
                                                    <Typography sx={{ fontSize: 12, fontWeight: 800, color: donor.status === 'Active' ? '#16a34a' : '#64748b' }}>
                                                        {donor.status}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Tooltip title="Edit Profile" TransitionComponent={Fade} arrow>
                                                    <IconButton
                                                        onClick={() => handleOpenEdit(donor)}
                                                        sx={{ color: '#64748b', '&:hover': { color: '#4f46e5', bgcolor: '#eef2ff' } }}
                                                    >
                                                        <EditIcon sx={{ fontSize: 20 }} />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete Donor" TransitionComponent={Fade} arrow>
                                                    <IconButton
                                                        onClick={() => handleOpenDelete(donor)}
                                                        sx={{ color: '#64748b', '&:hover': { color: '#dc2626', bgcolor: '#fef2f2' } }}
                                                    >
                                                        <DeleteForeverIcon sx={{ fontSize: 20 }} />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </AnimatePresence>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </motion.div>

            {/* Premium Dialog Component */}
            <DonorDialog
                open={openAdd}
                onClose={() => setOpenAdd(false)}
                onSave={handleSaveAdd}
                title="Register New Lifesaver"
                formData={formData}
                setFormData={setFormData}
                mode="add"
            />

            <DonorDialog
                open={openEdit}
                onClose={() => setOpenEdit(false)}
                onSave={handleSaveEdit}
                title="Modify Donor Profile"
                formData={formData}
                setFormData={setFormData}
                mode="edit"
            />

            {/* Delete Confirmation */}
            <Dialog
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                TransitionComponent={Zoom}
                PaperProps={{ sx: { borderRadius: 6, p: 2, width: 360, textAlign: 'center' } }}
            >
                <DialogContent>
                    <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                        <DeleteForeverIcon sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: 20, fontWeight: 900, mb: 1 }}>Are you sure?</Typography>
                    <Typography sx={{ fontSize: 14, color: '#64748b', fontWeight: 500, px: 2 }}>
                        This will permanently remove <b>{currentDonor?.name}</b> from the database. This action cannot be undone.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', gap: 2, pb: 3 }}>
                    <Button onClick={() => setOpenDelete(false)} sx={{ color: '#64748b', fontWeight: 800, textTransform: 'none' }}>Cancel</Button>
                    <Button
                        onClick={handleDelete}
                        variant="contained"
                        sx={{ bgcolor: '#dc2626', borderRadius: 100, px: 4, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#b91c1c' } }}
                    >
                        Yes, Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </AnimatePresence>
    );
};

/* ─── Premium Dialog Sub-Component ────────────────────────────────────────── */
const DonorDialog = ({ open, onClose, onSave, title, formData, setFormData, mode }) => (
    <Dialog
        open={open}
        onClose={onClose}
        TransitionComponent={Fade}
        transitionDuration={400}
        PaperProps={{
            sx: {
                borderRadius: 8,
                p: 2,
                width: 440,
                boxShadow: '0 40px 100px rgba(0,0,0,0.2)',
                background: 'linear-gradient(to bottom, #ffffff, #f8fafc)'
            }
        }}
    >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 3 }}>
            <Box sx={{ width: 44, height: 44, borderRadius: 3, bgcolor: mode === 'add' ? '#f0fdf4' : '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: mode === 'add' ? '#16a34a' : '#2563eb' }}>
                {mode === 'add' ? <PersonAddIcon /> : <EditIcon />}
            </Box>
            <Box>
                <Typography sx={{ fontWeight: 900, fontSize: 18, lineHeight: 1.2 }}>{title}</Typography>
                <Typography sx={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>Fill in the lifesaving details</Typography>
            </Box>
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
                <TextField
                    label="Full Legal Name"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircleIcon sx={{ fontSize: 18, color: '#94a3b8' }} /></InputAdornment>,
                        sx: { borderRadius: 4, bgcolor: 'white' }
                    }}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                    <TextField
                        select
                        label="Blood Group"
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><BloodtypeIcon sx={{ fontSize: 18, color: '#dc2626' }} /></InputAdornment>,
                            sx: { borderRadius: 4, bgcolor: 'white' }
                        }}
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(g => (
                            <MenuItem key={g} value={g} sx={{ fontWeight: 700 }}>{g}</MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        select
                        label="Status"
                        fullWidth
                        InputProps={{ sx: { borderRadius: 4, bgcolor: 'white' } }}
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                        {['Active', 'Inactive'].map(s => (
                            <MenuItem key={s} value={s} sx={{ fontWeight: 700 }}>{s}</MenuItem>
                        ))}
                    </TextField>
                </Box>

                <TextField
                    label="Last Donation Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><CalendarMonthIcon sx={{ fontSize: 18, color: '#94a3b8' }} /></InputAdornment>,
                        sx: { borderRadius: 4, bgcolor: 'white' }
                    }}
                    value={formData.lastDonation}
                    onChange={(e) => setFormData({ ...formData, lastDonation: e.target.value })}
                />
            </Box>
        </DialogContent>
        <DialogActions sx={{ p: 4, pt: 2 }}>
            <Button
                onClick={onClose}
                fullWidth
                sx={{ color: '#64748b', fontWeight: 800, textTransform: 'none', py: 1.5, borderRadius: 4 }}
            >
                Discard
            </Button>
            <Button
                onClick={onSave}
                variant="contained"
                fullWidth
                sx={{
                    bgcolor: '#0f172a',
                    borderRadius: 4,
                    py: 1.5,
                    fontWeight: 800,
                    textTransform: 'none',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.3)',
                    '&:hover': { bgcolor: '#1e293b' }
                }}
            >
                {mode === 'add' ? 'Register Savioir' : 'Update Profile'}
            </Button>
        </DialogActions>
    </Dialog>
);

export default DonorsView;
