import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { motion, AnimatePresence } from 'framer-motion';

const RequestsView = ({ requests }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div key="requests" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <Paper sx={{ p: 4, borderRadius: 1, boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: 900, color: '#0f172a', mb: 0.5 }}>Blood Requests</Typography>
                            <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>Manage urgent and routine requests</Typography>
                        </Box>
                        <Button variant="contained" sx={{ bgcolor: '#dc2626', borderRadius: 100, fontWeight: 700, textTransform: 'none', px: 3 }}>+ Create Request</Button>
                    </Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ '& th': { color: '#94a3b8', fontWeight: 700, fontSize: 11, textTransform: 'uppercase' } }}>
                                    {['ID', 'Hospital', 'Type', 'Units', 'Urgency', 'Status', 'Actions'].map(h => <TableCell key={h}>{h}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {requests.map((r) => (
                                    <TableRow key={r.id} hover sx={{ '& td': { fontWeight: 600, fontSize: 13 } }}>
                                        <TableCell sx={{ color: '#64748b' }}>{r.id}</TableCell>
                                        <TableCell>{r.hospital}</TableCell>
                                        <TableCell>
                                            <Chip label={r.bloodType} size="small" sx={{ bgcolor: '#fef2f2', color: '#dc2626', fontWeight: 800 }} />
                                        </TableCell>
                                        <TableCell>{r.units} Units</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={r.urgency}
                                                size="small"
                                                sx={{
                                                    bgcolor: r.urgency === 'Critical' ? '#fee2e2' : r.urgency === 'High' ? '#ffedd5' : '#f1f5f9',
                                                    color: r.urgency === 'Critical' ? '#b91c1c' : r.urgency === 'High' ? '#c2410b' : '#64748b',
                                                    fontWeight: 800
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                label={r.status}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: r.status === 'Fulfilled' ? '#16a34a' : '#e2e8f0',
                                                    color: r.status === 'Fulfilled' ? '#16a34a' : '#64748b',
                                                    fontWeight: 700
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <IconButton size="small"><VisibilityIcon sx={{ fontSize: 18 }} /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </motion.div>
        </AnimatePresence>
    );
};

export default RequestsView;
