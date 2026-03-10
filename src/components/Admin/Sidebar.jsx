import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LoginIcon from '@mui/icons-material/Login';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion';

/* ─── Sidebar Item ──────────────────────────────────────────────────────────── */
const SideItem = ({ icon, label, active, onClick, delay = 0 }) => (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.4 }}>
        <ListItem button onClick={onClick} sx={{
            borderRadius: 3, mb: 0.5, py: 1.5, px: 2,
            bgcolor: active ? 'rgba(220,38,38,0.08)' : 'transparent',
            color: active ? '#dc2626' : '#64748b',
            transition: 'all 0.25s ease',
            position: 'relative', overflow: 'hidden',
            '&:hover': { bgcolor: active ? 'rgba(220,38,38,0.12)' : '#f8fafc', color: active ? '#dc2626' : '#1e293b', transform: 'translateX(4px)' },
            '&::before': active ? {
                content: '""', position: 'absolute', left: 0, top: '20%', height: '60%',
                width: 3, borderRadius: '0 4px 4px 0', bgcolor: '#dc2626'
            } : {}
        }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                <motion.div animate={active ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.4 }}>
                    {icon}
                </motion.div>
            </ListItemIcon>
            <ListItemText primary={label} primaryTypographyProps={{ fontSize: 14, fontWeight: active ? 700 : 500 }} />
            {active && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#dc2626' }} />
                </motion.div>
            )}
        </ListItem>
    </motion.div>
);

const Sidebar = ({ activeTab, setActiveTab, onLogout }) => {
    return (
        <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: 10 }}
        >
            <Box sx={{
                width: 260, bgcolor: 'white',
                borderRight: '1px solid #e2e8f0',
                display: 'flex', flexDirection: 'column',
                height: '100vh', position: 'sticky', top: 0,
                boxShadow: '4px 0 30px rgba(0,0,0,0.04)'
            }}>
                {/* Logo */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <Box sx={{ p: 3.5, display: 'flex', alignItems: 'center', gap: 2, borderBottom: '1px solid #f1f5f9' }}>
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                        >
                            <Box sx={{
                                bgcolor: '#dc2626', p: 1.2, borderRadius: 2.5,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 8px 25px rgba(220,38,38,0.4)',
                            }}>
                                <BloodtypeIcon sx={{ color: 'white', fontSize: 24 }} />
                            </Box>
                        </motion.div>
                        <Box>
                            <Typography sx={{ fontSize: 18, fontWeight: 900, color: '#0f172a', letterSpacing: -0.5, lineHeight: 1 }}>Lifeline</Typography>
                            <Typography sx={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>Blood Management</Typography>
                        </Box>
                    </Box>
                </motion.div>

                {/* Nav */}
                <List sx={{ flexGrow: 1, px: 2, pt: 2 }}>
                    {[
                        { icon: <DashboardIcon sx={{ fontSize: 20 }} />, label: 'Blood Bank', tab: 'dashboard', delay: 0.15 },
                        { icon: <PeopleIcon sx={{ fontSize: 20 }} />, label: 'Donors', tab: 'donors', delay: 0.2 },
                        { icon: <LocalHospitalIcon sx={{ fontSize: 20 }} />, label: 'Hospitals', tab: 'hospitals', delay: 0.25 },
                        { icon: <FlashOnIcon sx={{ fontSize: 20 }} />, label: 'Requests', tab: null, delay: 0.3 },
                        { icon: <EventAvailableIcon sx={{ fontSize: 20 }} />, label: 'Camps', tab: null, delay: 0.35 },
                    ].map(item => (
                        <SideItem key={item.label} icon={item.icon} label={item.label} active={activeTab === item.tab} onClick={() => item.tab && setActiveTab(item.tab)} delay={item.delay} />
                    ))}
                    <Box sx={{ mx: -2, my: 2, borderTop: '1px dashed #f1f5f9' }} />
                    <SideItem icon={<LoginIcon sx={{ fontSize: 20 }} />} label="Logout" active={false} onClick={onLogout} delay={0.4} />
                </List>

                {/* Bottom CTA */}
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
                                <Button fullWidth sx={{
                                    bgcolor: 'white', color: '#dc2626', borderRadius: 100,
                                    fontSize: 12, fontWeight: 800, py: 1,
                                    '&:hover': { bgcolor: '#f8fafc' }
                                }}>Organize Now</Button>
                            </motion.div>
                        </Box>
                    </Box>
                </motion.div>
            </Box>
        </motion.div>
    );
};

export default Sidebar;
