import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LoginIcon from '@mui/icons-material/Login';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion';

const Sidebar = ({ activeTab, setActiveTab, onLogout, isCollapsed }) => {
    const isProfile = activeTab === 'profile' || activeTab === 'dashboard';
    const BANNER_URL = "/admin_profile_banner.png";

    return (
        <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: 10 }}
        >
            <Box sx={{
                width: isCollapsed ? 80 : 260,
                bgcolor: isProfile ? 'transparent' : 'white',
                borderRight: '1px solid',
                borderColor: isProfile ? 'rgba(255,255,255,0.1)' : '#e2e8f0',
                display: 'flex', flexDirection: 'column',
                height: '100vh', position: 'sticky', top: 0,
                boxShadow: isProfile ? 'none' : '4px 0 30px rgba(0,0,0,0.04)',
                backgroundImage: isProfile ? `url(${BANNER_URL})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: isProfile ? 'white' : 'inherit',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                '&::before': isProfile ? {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(15, 23, 42, 0.08)', // Very light overlay
                    backdropFilter: 'blur(10px)',
                    zIndex: -1
                } : {}
            }}>
                {/* Logo */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <Box sx={{
                        p: isCollapsed ? 2 : 3.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isCollapsed ? 'center' : 'flex-start',
                        gap: 2,
                        borderBottom: '1px solid',
                        borderColor: isProfile ? 'rgba(255,255,255,0.1)' : '#f1f5f9',
                        transition: '0.3s'
                    }}>
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                        >
                            <Box sx={{
                                bgcolor: '#dc2626', p: isCollapsed ? 1 : 1.2, borderRadius: 2,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 8px 25px rgba(220,38,38,0.4)',
                            }}>
                                <BloodtypeIcon sx={{ color: 'white', fontSize: isCollapsed ? 20 : 24 }} />
                            </Box>
                        </motion.div>
                        {!isCollapsed && (
                            <Box>
                                <Typography sx={{ fontSize: 18, fontWeight: 900, color: isProfile ? 'white' : '#0f172a', letterSpacing: -0.5, lineHeight: 1 }}>Lifeline</Typography>
                                <Typography sx={{ fontSize: 11, color: isProfile ? 'rgba(255,255,255,0.5)' : '#94a3b8', fontWeight: 500 }}>Blood Management</Typography>
                            </Box>
                        )}
                    </Box>
                </motion.div>

                {/* Nav */}
                <List sx={{ flexGrow: 1, px: isCollapsed ? 1 : 2, pt: 2 }}>
                    {[
                        { icon: <DashboardIcon sx={{ fontSize: 20 }} />, label: 'Blood Bank', tab: 'dashboard', delay: 0.15 },
                        { icon: <PeopleIcon sx={{ fontSize: 20 }} />, label: 'Donors', tab: 'donors', delay: 0.2 },
                        { icon: <LocalHospitalIcon sx={{ fontSize: 20 }} />, label: 'Hospitals', tab: 'hospitals', delay: 0.25 },
                        { icon: <FlashOnIcon sx={{ fontSize: 20 }} />, label: 'Requests', tab: 'requests', delay: 0.3 },
                        { icon: <EventAvailableIcon sx={{ fontSize: 20 }} />, label: 'Camps', tab: 'camps', delay: 0.35 },
                    ].map(item => {
                        const active = activeTab === item.tab;
                        return (
                            <ListItem key={item.label} button onClick={() => item.tab && setActiveTab(item.tab)} sx={{
                                borderRadius: 3, mb: 0.5, py: 1.5, px: isCollapsed ? 2 : 2,
                                justifyContent: isCollapsed ? 'center' : 'flex-start',
                                bgcolor: active ? 'rgba(220,38,38,0.08)' : 'transparent',
                                color: active ? '#dc2626' : (isProfile ? 'rgba(255,255,255,0.7)' : '#64748b'),
                                transition: 'all 0.25s ease',
                                position: 'relative', overflow: 'hidden',
                                '&:hover': { bgcolor: active ? 'rgba(220,38,38,0.12)' : (isProfile ? 'rgba(255,255,255,0.1)' : '#f8fafc'), color: active ? '#dc2626' : (isProfile ? 'white' : '#1e293b'), transform: isCollapsed ? 'scale(1.1)' : 'translateX(4px)' },
                                '&::before': (active && !isCollapsed) ? {
                                    content: '""', position: 'absolute', left: 0, top: '20%', height: '60%',
                                    width: 3, borderRadius: '0 4px 4px 0', bgcolor: '#dc2626'
                                } : {}
                            }}>
                                <Tooltip title={isCollapsed ? item.label : ""} placement="right">
                                    <ListItemIcon sx={{ minWidth: isCollapsed ? 0 : 40, color: 'inherit', justifyContent: 'center' }}>
                                        <motion.div animate={active ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.4 }}>
                                            {item.icon}
                                        </motion.div>
                                    </ListItemIcon>
                                </Tooltip>
                                {!isCollapsed && <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: active ? 700 : 500 }} />}
                                {(active && !isCollapsed) && (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}>
                                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#dc2626' }} />
                                    </motion.div>
                                )}
                            </ListItem>
                        )
                    })}
                    <Box sx={{ mx: isCollapsed ? 0 : -2, my: 2, borderTop: '1px dashed', borderColor: isProfile ? 'rgba(255,255,255,0.1)' : '#f1f5f9' }} />
                    <ListItem button onClick={onLogout} sx={{
                        borderRadius: 3, mb: 0.5, py: 1.5, px: isCollapsed ? 2 : 2,
                        justifyContent: isCollapsed ? 'center' : 'flex-start',
                        color: isProfile ? 'rgba(255,255,255,0.7)' : '#64748b',
                        '&:hover': { bgcolor: isProfile ? 'rgba(255,255,255,0.1)' : '#f8fafc', color: isProfile ? 'white' : '#1e293b', transform: isCollapsed ? 'scale(1.1)' : 'translateX(4px)' }
                    }}>
                        <Tooltip title={isCollapsed ? "Logout" : ""} placement="right">
                            <ListItemIcon sx={{ minWidth: isCollapsed ? 0 : 40, color: 'inherit', justifyContent: 'center' }}><LoginIcon sx={{ fontSize: 20 }} /></ListItemIcon>
                        </Tooltip>
                        {!isCollapsed && <ListItemText primary="Logout" primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />}
                    </ListItem>
                </List>

                {/* Bottom CTA */}
                {!isCollapsed && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <Box sx={{ p: 2.5 }}>
                            <Box sx={{
                                background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                                borderRadius: 4, p: 3, textAlign: 'center', color: 'white',
                                boxShadow: '0 15px 40px rgba(220,38,38,0.4)',
                                position: 'relative', overflow: 'hidden',
                            }}>
                                <Box sx={{
                                    position: 'absolute', top: -20, right: -20,
                                    width: 80, height: 80, borderRadius: '50%',
                                    bgcolor: 'rgba(255,255,255,0.08)',
                                    animation: 'spin 8s linear infinite',
                                    '@keyframes spin': { '100%': { transform: 'rotate(360deg)' } }
                                }} />
                                <motion.div
                                    animate={{ scale: [1, 1.08, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <FavoriteIcon sx={{ fontSize: 28, mb: 1, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
                                </motion.div>
                                <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 0.5 }}>Host a Blood Camp</Typography>
                                <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', mb: 2.5 }}>Save up to 100 lives a day</Typography>
                                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                    <Button
                                        fullWidth
                                        onClick={() => setActiveTab('camps')}
                                        sx={{
                                            bgcolor: 'white', color: '#dc2626', borderRadius: 100,
                                            fontSize: 12, fontWeight: 800, py: 1,
                                            '&:hover': { bgcolor: '#f8fafc' }
                                        }}
                                    >
                                        Organize Now
                                    </Button>
                                </motion.div>
                            </Box>
                        </Box>
                    </motion.div>
                )}
            </Box>
        </motion.div>
    );
};

export default Sidebar;
