import React from 'react';
import { Box, Typography, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Avatar, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, AnimatePresence } from 'framer-motion';
import { BloodBadge, PulseDot } from '../AdminUIUtils';

const DonorsView = ({ donors }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div key="donors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <Paper sx={{ p: 4, borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: 900, color: '#0f172a', mb: 0.5 }}>Registered Donors</Typography>
                            <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{donors.length} donors found</Typography>
                        </Box>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                            <Button variant="contained" sx={{
                                bgcolor: '#dc2626', textTransform: 'none', borderRadius: 100,
                                fontWeight: 700, px: 3, py: 1,
                                boxShadow: '0 8px 25px rgba(220,38,38,0.35)',
                                '&:hover': { bgcolor: '#b91c1c', boxShadow: '0 12px 30px rgba(220,38,38,0.45)' }
                            }}>+ Add Donor</Button>
                        </motion.div>
                    </Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ '& th': { borderBottom: '2px solid #f8fafc', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 0.8 } }}>
                                    {['Name', 'Blood Group', 'Last Donation', 'Status', ''].map(h => <TableCell key={h} align={h === '' ? 'right' : 'left'}>{h}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {donors.map((row, i) => (
                                    <TableRow key={row.id} hover sx={{ '& td': { py: 2.5, borderBottom: '1px solid #f8fafc', fontWeight: 600, fontSize: 14 }, '&:hover': { bgcolor: '#fef2f2' }, cursor: 'pointer', transition: 'background 0.2s' }}>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                                                    <Avatar sx={{ width: 38, height: 38, bgcolor: '#fef2f2', color: '#dc2626', fontWeight: 900, fontSize: 14, border: '2px solid #fecaca' }}>
                                                        {row.name.charAt(0)}
                                                    </Avatar>
                                                </motion.div>
                                                <Box>
                                                    <Typography sx={{ fontWeight: 700, fontSize: 14, color: '#0f172a' }}>{row.name}</Typography>
                                                    <Typography sx={{ fontSize: 11, color: '#94a3b8' }}>ID #{String(row.id).padStart(4, '0')}</Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell><BloodBadge type={row.type} /></TableCell>
                                        <TableCell sx={{ color: '#64748b !important' }}>{row.lastDonation}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <PulseDot color={row.status === 'Active' ? '#16a34a' : '#94a3b8'} size={7} />
                                                <Chip label={row.status} size="small" sx={{
                                                    bgcolor: row.status === 'Active' ? '#dcfce7' : '#f1f5f9',
                                                    color: row.status === 'Active' ? '#16a34a' : '#64748b',
                                                    fontWeight: 800, borderRadius: 100, fontSize: 11
                                                }} />
                                            </Box>
                                        </TableCell>
                                        <TableCell align="right">
                                            <motion.div whileHover={{ x: 3 }} style={{ display: 'inline-flex' }}>
                                                <IconButton size="small" sx={{ color: '#94a3b8', '&:hover': { color: '#dc2626' } }}>
                                                    <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
                                                </IconButton>
                                            </motion.div>
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

export default DonorsView;
