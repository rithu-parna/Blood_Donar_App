import React from 'react';
import {
    Box, Typography, Paper, Grid, Avatar, Button, TextField,
    Divider, IconButton, Switch, FormControlLabel, Badge
} from '@mui/material';
import { motion } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SaveIcon from '@mui/icons-material/Save';

const ProfileView = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Grid container spacing={4}>
                {/* Profile Header Card */}
                <Grid item xs={12}>
                    <Paper sx={{
                        p: 4,
                        borderRadius: 8,
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 4, flexDirection: { xs: 'column', md: 'row' }, textAlign: { xs: 'center', md: 'left' } }}>
                            <Box sx={{ position: 'relative' }}>
                                <Badge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    badgeContent={
                                        <IconButton size="small" sx={{ bgcolor: '#dc2626', color: 'white', '&:hover': { bgcolor: '#b91c1c' }, border: '4px solid #0f172a' }}>
                                            <CameraAltIcon sx={{ fontSize: 16 }} />
                                        </IconButton>
                                    }
                                >
                                    <Avatar
                                        sx={{ width: 120, height: 120, fontSize: 48, fontWeight: 900, bgcolor: 'rgba(255,255,255,0.1)', border: '4px solid rgba(255,255,255,0.2)' }}
                                    >
                                        A
                                    </Avatar>
                                </Badge>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5, letterSpacing: -1 }}>Admin User</Typography>
                                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, mb: 2 }}>System Operator • Full Access</Typography>
                                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Button variant="contained" sx={{ bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: 100, textTransform: 'none', fontWeight: 700, px: 3, '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                                        Change Password
                                    </Button>
                                    <Button variant="contained" sx={{ bgcolor: '#dc2626', borderRadius: 100, textTransform: 'none', fontWeight: 700, px: 3, '&:hover': { bgcolor: '#b91c1c' } }}>
                                        View Activity Log
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        {/* Decorative background elements */}
                        <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)' }} />
                        <Box sx={{ position: 'absolute', bottom: -100, left: '20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)' }} />
                    </Paper>
                </Grid>

                {/* Personal Information */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 4, borderRadius: 6, border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 800, color: '#0f172a' }}>Personal Information</Typography>
                            <IconButton size="small" sx={{ bgcolor: '#f1f5f9' }}><EditIcon fontSize="small" /></IconButton>
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="First Name" defaultValue="Admin" variant="outlined" InputProps={{ sx: { borderRadius: 3 } }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Last Name" defaultValue="User" variant="outlined" InputProps={{ sx: { borderRadius: 3 } }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Email Address" defaultValue="admin@blooddonorapp.com" variant="outlined" InputProps={{ sx: { borderRadius: 3 } }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Phone Number" defaultValue="+1 (555) 000-0000" variant="outlined" InputProps={{ sx: { borderRadius: 3 } }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Role" defaultValue="System Operator" variant="outlined" disabled InputProps={{ sx: { borderRadius: 3 } }} />
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" startIcon={<SaveIcon />} sx={{ bgcolor: '#0f172a', borderRadius: 3, px: 4, py: 1.2, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#1e293b' } }}>
                                Save Changes
                            </Button>
                        </Box>
                    </Paper>
                </Grid>

                {/* Account Settings */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Paper sx={{ p: 4, borderRadius: 6, border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                            <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#0f172a', mb: 3 }}>Security Settings</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControlLabel
                                    control={<Switch defaultChecked color="success" />}
                                    label={<Typography sx={{ fontWeight: 600, fontSize: 14 }}>Two-factor Authentication</Typography>}
                                    sx={{ justifyContent: 'space-between', width: '100%', ml: 0 }}
                                    labelPlacement="start"
                                />
                                <Divider />
                                <FormControlLabel
                                    control={<Switch color="primary" />}
                                    label={<Typography sx={{ fontWeight: 600, fontSize: 14 }}>Biometric Login</Typography>}
                                    sx={{ justifyContent: 'space-between', width: '100%', ml: 0 }}
                                    labelPlacement="start"
                                />
                                <Divider />
                                <FormControlLabel
                                    control={<Switch defaultChecked color="warning" />}
                                    label={<Typography sx={{ fontWeight: 600, fontSize: 14 }}>Session Monitoring</Typography>}
                                    sx={{ justifyContent: 'space-between', width: '100%', ml: 0 }}
                                    labelPlacement="start"
                                />
                            </Box>
                        </Paper>

                        <Paper sx={{ p: 4, borderRadius: 6, border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(220,38,38,0.05)', bgcolor: '#fef2f2' }}>
                            <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#dc2626', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <SecurityIcon fontSize="small" /> Primary Guard
                            </Typography>
                            <Typography sx={{ fontSize: 12, color: '#991b1b', mb: 2 }}>Protect your account with advanced security protocols.</Typography>
                            <Button fullWidth variant="outlined" color="error" sx={{ borderRadius: 100, textTransform: 'none', fontWeight: 800 }}>
                                Hard Reset Security
                            </Button>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </motion.div>
    );
};

export default ProfileView;
