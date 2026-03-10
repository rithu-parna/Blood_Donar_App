import React, { useState } from 'react';
import {
    Box, Typography, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Button, IconButton, TextField, Dialog,
    DialogTitle, DialogContent, DialogActions, MenuItem
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion, AnimatePresence } from 'framer-motion';
import { BloodBadge, PulseDot } from '../AdminUIUtils';

const DonorsView = ({ donors }) => {
    const [open, setOpen] = useState(false);
    const [newDonor, setNewDonor] = useState({ name: '', type: '', lastDonation: '', status: 'Active' });

    const handleAdd = () => {
        console.log('Adding donor:', newDonor);
        setOpen(false);
        setNewDonor({ name: '', type: '', lastDonation: '', status: 'Active' });
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div key="donors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <Paper sx={{ p: 4, borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: 900, color: '#0f172a', mb: 0.5 }}>Donor Directory</Typography>
                            <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{donors.length} registered lifetime donors</Typography>
                        </Box>
                        <Button
                            variant="contained"
                            onClick={() => setOpen(true)}
                            sx={{ bgcolor: '#dc2626', borderRadius: 100, fontWeight: 700, textTransform: 'none', px: 3, '&:hover': { bgcolor: '#b91c1c' } }}
                        >
                            + Add Donor
                        </Button>
                    </Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ '& th': { color: '#94a3b8', fontWeight: 700, fontSize: 11, textTransform: 'uppercase' } }}>
                                    {['Name', 'Blood Group', 'Last Donation', 'Status', 'Actions'].map(h => <TableCell key={h}>{h}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {donors.map((donor) => (
                                    <TableRow key={donor.id} hover sx={{ '& td': { fontWeight: 600, fontSize: 13 } }}>
                                        <TableCell sx={{ color: '#0f172a' }}>{donor.name}</TableCell>
                                        <TableCell><BloodBadge type={donor.type} /></TableCell>
                                        <TableCell sx={{ color: '#64748b' }}>{donor.lastDonation}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <PulseDot color={donor.status === 'Active' ? '#16a34a' : '#94a3b8'} />
                                                <Typography sx={{ fontSize: 12, fontWeight: 700, color: donor.status === 'Active' ? '#16a34a' : '#94a3b8' }}>{donor.status}</Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton size="small"><EditIcon sx={{ fontSize: 18, color: '#64748b' }} /></IconButton>
                                            <IconButton size="small"><DeleteIcon sx={{ fontSize: 18, color: '#64748b' }} /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </motion.div>

            <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { borderRadius: 4, p: 2, width: 400 } }}>
                <DialogTitle sx={{ fontWeight: 800 }}>Add New Donor</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                        <TextField
                            label="Full Name"
                            fullWidth
                            size="small"
                            value={newDonor.name}
                            onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}
                        />
                        <TextField
                            select
                            label="Blood Group"
                            fullWidth
                            size="small"
                            value={newDonor.type}
                            onChange={(e) => setNewDonor({ ...newDonor, type: e.target.value })}
                        >
                            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(g => <MenuItem key={g} value={g}>{g}</MenuItem>)}
                        </TextField>
                        <TextField
                            label="Last Donation Date"
                            type="date"
                            fullWidth
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            value={newDonor.lastDonation}
                            onChange={(e) => setNewDonor({ ...newDonor, lastDonation: e.target.value })}
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 3 }}>
                    <Button onClick={() => setOpen(false)} sx={{ color: '#64748b', fontWeight: 700 }}>Cancel</Button>
                    <Button onClick={handleAdd} variant="contained" sx={{ bgcolor: '#dc2626', borderRadius: 100, px: 3, fontWeight: 700 }}>Save Donor</Button>
                </DialogActions>
            </Dialog>
        </AnimatePresence>
    );
};

export default DonorsView;
