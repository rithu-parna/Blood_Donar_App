import React from 'react';
import {
    Box, Typography, Paper, Grid, Avatar, Button, TextField,
    Divider, IconButton, Switch, FormControlLabel, Badge,
    CircularProgress, Tooltip, Stack
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SaveIcon from '@mui/icons-material/Save';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import KeyIcon from '@mui/icons-material/Key';
import HistoryIcon from '@mui/icons-material/History';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Premium Banner Image
const BANNER_URL = "/admin_profile_banner.png";

const ProfileView = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <Grid container spacing={4}>
                {/* Profile Banner & Primary Info */}
                <Grid item xs={12}>
                    <Box sx={{ position: 'relative', mb: 10 }}>
                        {/* High-End Banner */}
                        <Box sx={{
                            height: 240,
                            borderRadius: '32px',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            background: `url(${BANNER_URL})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.8))'
                            }
                        }}>
                            <Box className="floating" sx={{ position: 'absolute', top: 20, right: 20, opacity: 0.8 }}>
                                <AdminPanelSettingsIcon sx={{ fontSize: 120, color: 'rgba(255,255,255,0.05)' }} />
                            </Box>
                        </Box>

                        {/* Floating Profile Info Card */}
                        <Box className="glass-container" sx={{
                            position: 'absolute',
                            bottom: -60,
                            left: { xs: 20, md: 40 },
                            right: { xs: 20, md: 40 },
                            p: 3,
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: { xs: 'center', md: 'flex-end' },
                            gap: 3,
                            zIndex: 10
                        }}>
                            <Box sx={{ position: 'relative', mt: { xs: -10, md: 0 } }}>
                                <Badge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    badgeContent={
                                        <Tooltip title="Update Profile Photo">
                                            <IconButton size="small" className="glow-btn" sx={{
                                                bgcolor: '#E11D48',
                                                color: 'white',
                                                p: 1,
                                                '&:hover': { bgcolor: '#BE123C' },
                                                border: '4px solid white'
                                            }}>
                                                <CameraAltIcon sx={{ fontSize: 18 }} />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                >
                                    <Avatar
                                        sx={{
                                            width: 140,
                                            height: 140,
                                            border: '6px solid white',
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                            bgcolor: '#0F172A',
                                            fontSize: 54,
                                            fontWeight: 900
                                        }}
                                    >
                                        A
                                    </Avatar>
                                </Badge>
                            </Box>

                            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, pb: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 900, color: '#0F172A', letterSpacing: -0.5 }}>
                                        Admin User
                                    </Typography>
                                    <Tooltip title="Verified Administrator">
                                        <VerifiedUserIcon sx={{ color: '#0EA5E9', fontSize: 24 }} />
                                    </Tooltip>
                                </Box>
                                <Typography sx={{ color: '#64748B', fontWeight: 600, fontSize: 16 }}>
                                    Super Administrator • System Integrity Overseer
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 1.5, pb: 1 }}>
                                <Button
                                    variant="outlined"
                                    startIcon={<HistoryIcon />}
                                    sx={{
                                        borderRadius: '100px',
                                        textTransform: 'none',
                                        fontWeight: 700,
                                        borderColor: '#E2E8F0',
                                        color: '#0F172A',
                                        '&:hover': { borderColor: '#0F172A', bgcolor: 'rgba(15, 23, 42, 0.02)' }
                                    }}
                                >
                                    Activity Log
                                </Button>
                                <Button
                                    className="glow-btn"
                                    variant="contained"
                                    sx={{
                                        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                                        borderRadius: '100px',
                                        textTransform: 'none',
                                        fontWeight: 700,
                                        px: 3
                                    }}
                                >
                                    Edit Public Profile
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                {/* Main Content Area */}
                <Grid item xs={12} lg={8}>
                    <Stack spacing={4}>
                        {/* Personal Information Form */}
                        <Paper className="premium-card" sx={{ p: { xs: 3, md: 5 } }}>
                            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box>
                                    <Typography className="text-gradient" sx={{ fontSize: 22, fontWeight: 900, mb: 0.5 }}>
                                        Identity & Records
                                    </Typography>
                                    <Typography sx={{ color: '#64748B', fontSize: 14 }}>Manage your core identity and system credentials.</Typography>
                                </Box>
                                <IconButton sx={{ bgcolor: '#F8FAFC' }}><EditIcon sx={{ color: '#64748B' }} /></IconButton>
                            </Box>

                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        defaultValue="Admin"
                                        variant="filled"
                                        InputProps={{ sx: { borderRadius: '16px 16px 0 0', fontWeight: 600 } }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        defaultValue="User"
                                        variant="filled"
                                        InputProps={{ sx: { borderRadius: '16px 16px 0 0', fontWeight: 600 } }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Corporate Email Address"
                                        defaultValue="admin.ops@donarapp.system"
                                        variant="filled"
                                        InputProps={{ sx: { borderRadius: '16px 16px 0 0', fontWeight: 600 } }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Direct Contact"
                                        defaultValue="+1 (888) DONAR-ADMIN"
                                        variant="filled"
                                        InputProps={{ sx: { borderRadius: '16px 16px 0 0', fontWeight: 600 } }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Access Level"
                                        defaultValue="Tier 5 - Root Access"
                                        variant="filled"
                                        disabled
                                        InputProps={{ sx: { borderRadius: '16px 16px 0 0', fontWeight: 700, color: '#E11D48' } }}
                                    />
                                </Grid>
                            </Grid>

                            <Box sx={{ mt: 5, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                                <Button sx={{ borderRadius: 3, fontWeight: 700, textTransform: 'none', px: 3, color: '#64748B' }}>
                                    Discard Changes
                                </Button>
                                <Button
                                    className="glow-btn"
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                    sx={{
                                        bgcolor: '#0F172A',
                                        borderRadius: 3,
                                        px: 4,
                                        py: 1.5,
                                        fontWeight: 800,
                                        textTransform: 'none',
                                        '&:hover': { bgcolor: '#000' }
                                    }}
                                >
                                    Synchronize Records
                                </Button>
                            </Box>
                        </Paper>

                        {/* Recent System Activity Preview */}
                        <Paper className="premium-card" sx={{ p: 4 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 800, color: '#0F172A', mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <HistoryIcon color="primary" /> Recent System Actions
                            </Typography>
                            <Stack spacing={2}>
                                {[
                                    { action: "Database Migration Root Approver", time: "2 hours ago", status: "Success", color: "#10B981" },
                                    { action: "High-Priority User Access Revoked", time: "5 hours ago", status: "Critical", color: "#F59E0B" },
                                    { action: "System Firewall Parameters Updated", time: "Yesterday", status: "Secure", color: "#3B82F6" }
                                ].map((item, i) => (
                                    <Box key={i} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        p: 2,
                                        borderRadius: 3,
                                        bgcolor: '#F8FAFC',
                                        border: '1px solid #E2E8F0',
                                        transition: '0.3s',
                                        '&:hover': { transform: 'translateX(10px)', borderColor: '#CBD5E1' }
                                    }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: 700, color: '#1E293B' }}>{item.action}</Typography>
                                            <Typography sx={{ fontSize: 12, color: '#64748B' }}>{item.time}</Typography>
                                        </Box>
                                        <Box sx={{ px: 1.5, py: 0.5, borderRadius: 100, bgcolor: `${item.color}15`, color: item.color, fontSize: 11, fontWeight: 900, textTransform: 'uppercase' }}>
                                            {item.status}
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                        </Paper>
                    </Stack>
                </Grid>

                {/* Sidebar Controls */}
                <Grid item xs={12} lg={4}>
                    <Stack spacing={4}>
                        {/* Security Control Center */}
                        <Paper className="premium-card" sx={{ p: 4, background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: 'white' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                                <Box sx={{ p: 1.5, borderRadius: 3, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                                    <SecurityIcon sx={{ color: '#E11D48' }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 800, fontSize: 18 }}>Fortress Security</Typography>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Manage authentication layers.</Typography>
                                </Box>
                            </Box>

                            <Stack spacing={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box>
                                        <Typography sx={{ fontWeight: 600, fontSize: 14 }}>Biometric Lock</Typography>
                                        <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Required for all root actions.</Typography>
                                    </Box>
                                    <Switch defaultChecked color="error" />
                                </Box>
                                <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box>
                                        <Typography sx={{ fontWeight: 600, fontSize: 14 }}>Multi-Layer Auth</Typography>
                                        <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>SMS & Hardware key enabled.</Typography>
                                    </Box>
                                    <Switch defaultChecked />
                                </Box>
                                <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box>
                                        <Typography sx={{ fontWeight: 600, fontSize: 14 }}>Session Isolation</Typography>
                                        <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Sandbox UI environment.</Typography>
                                    </Box>
                                    <Switch />
                                </Box>
                            </Stack>

                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<KeyIcon />}
                                sx={{
                                    mt: 4,
                                    bgcolor: 'rgba(225, 29, 72, 0.1)',
                                    border: '1px solid #E11D48',
                                    color: '#E11D48',
                                    borderRadius: 3,
                                    textTransform: 'none',
                                    fontWeight: 800,
                                    py: 1.5,
                                    '&:hover': { bgcolor: '#E11D48', color: 'white' }
                                }}
                            >
                                Force Global Sign-Out
                            </Button>
                        </Paper>

                        {/* System Status Card */}
                        <Paper className="premium-card" sx={{ p: 4, position: 'relative', overflow: 'hidden' }}>
                            <Box sx={{ position: 'absolute', top: -10, right: -10, opacity: 0.05 }}>
                                <NotificationsActiveIcon sx={{ fontSize: 120 }} />
                            </Box>
                            <Typography sx={{ fontSize: 18, fontWeight: 800, color: '#0F172A', mb: 3 }}>Core Integrity</Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 1 }}>
                                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                    <CircularProgress variant="determinate" value={98} size={60} thickness={3} sx={{ color: '#10B981' }} />
                                    <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography variant="caption" sx={{ fontWeight: 900, color: '#0F172A' }}>98%</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Security Compliance</Typography>
                                    <Typography sx={{ fontSize: 12, color: '#64748B' }}>Your profile meets all T-5 standards.</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
        </motion.div>
    );
};

export default ProfileView;
