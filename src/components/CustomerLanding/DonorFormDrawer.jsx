import React from 'react';
import { Box, Typography, Button, IconButton, Drawer, TextField, Grid, Select, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ViewListIcon from '@mui/icons-material/ViewList';
import { bloodTypes } from './constants';

const DonorFormDrawer = ({ open, onClose }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: { xs: '100%', sm: 500 } } }}>
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ bgcolor: '#ECFDF5', p: 1.5, borderRadius: 2 }}>
                            <HandshakeIcon sx={{ color: '#FCD34D', fontSize: 24 }} />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={800} color="#111827">Register as Donor</Typography>
                            <Typography variant="body2" color="#64748B">Join the network and save lives</Typography>
                        </Box>
                    </Box>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ display: 'flex', borderBottom: '1px solid #E5E7EB', mb: 4 }}>
                    <Typography sx={{ pb: 1.5, px: 2, borderBottom: '2px solid #10B981', color: '#10B981', fontWeight: 600, fontSize: '0.9rem', width: '50%', textAlign: 'center', cursor: 'pointer' }}>
                        <ViewListIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} /> Field by Field
                    </Typography>
                    <Typography sx={{ pb: 1.5, px: 2, color: '#9CA3AF', fontWeight: 600, fontSize: '0.9rem', width: '50%', textAlign: 'center', cursor: 'pointer' }}>
                        ⚡ Quick Paste
                    </Typography>
                </Box>

                <Box sx={{ flex: 1, overflowY: 'auto', pr: 1 }}>
                    {/* PERSONAL INFORMATION */}
                    <Typography variant="caption" fontWeight={700} color="#10B981" sx={{ letterSpacing: 1, display: 'flex', alignItems: 'center', mb: 3 }}>
                        PERSONAL INFORMATION <Box sx={{ flex: 1, height: 1, bgcolor: '#E5E7EB', ml: 2 }} />
                    </Typography>

                    <Grid container spacing={3} mb={4}>
                        <Grid item xs={6}>
                            <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Full Name <span style={{ color: '#EF4444' }}>*</span></Typography>
                            <TextField fullWidth size="small" placeholder="Arjun Menon" InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Age <span style={{ color: '#EF4444' }}>*</span></Typography>
                            <TextField fullWidth size="small" placeholder="18-65" InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Phone <span style={{ color: '#EF4444' }}>*</span></Typography>
                            <TextField fullWidth size="small" placeholder="+91 XXXXXXXXXX" InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Email</Typography>
                            <TextField fullWidth size="small" placeholder="you@email.com" InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">City / Location <span style={{ color: '#EF4444' }}>*</span></Typography>
                            <TextField fullWidth size="small" placeholder="Kozhikode, Kerala" InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>
                    </Grid>

                    {/* BLOOD INFORMATION */}
                    <Typography variant="caption" fontWeight={700} color="#10B981" sx={{ letterSpacing: 1, display: 'flex', alignItems: 'center', mb: 3 }}>
                        BLOOD INFORMATION <Box sx={{ flex: 1, height: 1, bgcolor: '#E5E7EB', ml: 2 }} />
                    </Typography>

                    <Box mb={4}>
                        <Typography variant="caption" fontWeight={600} color="#374151" mb={2} display="block">Blood Group <span style={{ color: '#EF4444' }}>*</span></Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                            {bloodTypes.map(type => (
                                <Button key={type} variant="outlined" sx={{ minWidth: { xs: 40, sm: 48 }, height: 40, borderRadius: 2, borderColor: '#E5E7EB', color: '#6B7280', fontWeight: 600 }}>{type}</Button>
                            ))}
                        </Box>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Last Donated</Typography>
                                <TextField fullWidth size="small" type="date" InputProps={{ sx: { borderRadius: 2 } }} InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Available At</Typography>
                                <Select fullWidth size="small" defaultValue="Any hospital" sx={{ borderRadius: 2 }}>
                                    <MenuItem value="Any hospital">Any hospital</MenuItem>
                                    <MenuItem value="Selected">Selected only</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* HEALTH DETAILS */}
                    <Typography variant="caption" fontWeight={700} color="#10B981" sx={{ letterSpacing: 1, display: 'flex', alignItems: 'center', mb: 3 }}>
                        HEALTH DETAILS <Box sx={{ flex: 1, height: 1, bgcolor: '#E5E7EB', ml: 2 }} />
                    </Typography>

                    <Grid container spacing={3} mb={4}>
                        <Grid item xs={6}>
                            <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Weight (kg)</Typography>
                            <TextField fullWidth size="small" placeholder="≥ 50 kg" InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Gender</Typography>
                            <Select fullWidth size="small" defaultValue="Male" sx={{ borderRadius: 2 }}>
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Medical Conditions (If any)</Typography>
                            <TextField fullWidth size="small" multiline rows={2} placeholder="Leave blank if none.." InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, pt: 3, borderTop: '1px solid #E5E7EB', mt: 'auto' }}>
                    <Button variant="outlined" onClick={onClose} sx={{ flex: 1, borderColor: '#E5E7EB', color: '#6B7280', fontWeight: 600, textTransform: 'none', borderRadius: 2 }}>Cancel</Button>
                    <Button variant="contained" sx={{ flex: 2, bgcolor: '#10B981', color: 'white', fontWeight: 600, textTransform: 'none', borderRadius: 2, boxShadow: 'none', '&:hover': { bgcolor: '#059669', boxShadow: 'none' } }}>
                        ✓ Save Donor Profile
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default DonorFormDrawer;
