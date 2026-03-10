import React, { useState } from 'react';
import {
    Box, Typography, IconButton, Badge, Divider, InputBase, Avatar,
    Drawer, List, ListItem, ListItemAvatar, ListItemText, Switch,
    FormControlLabel, Select, MenuItem, Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import BoltIcon from '@mui/icons-material/Bolt';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SecurityIcon from '@mui/icons-material/Security';
import { motion } from 'framer-motion';

const Header = ({ searchQuery, setSearchQuery }) => {
    const [searchFocused, setSearchFocused] = useState(false);
    const [notiOpen, setNotiOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, title: 'Critical O- Needed', desc: 'City General Hospital requires 5 units urgently.', time: '2 mins ago', type: 'urgent', read: false },
        { id: 2, title: 'New Donor Registered', desc: 'John Doe just registered as an A+ donor.', time: '15 mins ago', type: 'info', read: false },
        { id: 3, title: 'Stock Update', desc: 'B+ inventory replenished to 40 units.', time: '1 hour ago', type: 'success', read: false },
    ]);

    const markAsRead = (id) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const clearAll = () => setNotifications([]);

    return (
        <>
            <motion.div initial={{ y: -90 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                <Box sx={{
                    height: 76, borderBottom: '1px solid #e2e8f0',
                    bgcolor: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(16px)',
                    display: 'flex', alignItems: 'center', px: 4,
                    justifyContent: 'space-between', zIndex: 5,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}>
                    {/* Search */}
                    <motion.div animate={{ width: searchFocused ? 380 : 300 }} transition={{ duration: 0.3 }}>
                        <Box sx={{
                            display: 'flex', alignItems: 'center',
                            bgcolor: searchFocused ? 'white' : '#f1f5f9',
                            px: 2, py: 1, borderRadius: 100,
                            border: '1px solid',
                            borderColor: searchFocused ? '#dc262640' : '#e2e8f0',
                            boxShadow: searchFocused ? '0 4px 20px rgba(220,38,38,0.1)' : 'none',
                            transition: 'all 0.3s',
                        }}>
                            <SearchIcon sx={{ color: searchFocused ? '#dc2626' : '#94a3b8', fontSize: 18, mr: 1.5, transition: 'color 0.3s' }} />
                            <InputBase
                                placeholder="Search donors, blood groups..."
                                sx={{ fontSize: 13, flex: 1, color: '#334155', '& input': { fontWeight: 500 } }}
                                onFocus={() => setSearchFocused(true)}
                                onBlur={() => setSearchFocused(false)}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </Box>
                    </motion.div>

                    {/* Right icons */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        {[LanguageIcon].map((Icon, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <IconButton size="small" sx={{ bgcolor: '#f8fafc', color: '#64748b', '&:hover': { bgcolor: '#f1f5f9' } }}>
                                    <Icon sx={{ fontSize: 18 }} />
                                </IconButton>
                            </motion.div>
                        ))}
                        <motion.div whileHover={{ scale: 1.1, rotate: 20 }} whileTap={{ scale: 0.9 }}>
                            <IconButton
                                size="small"
                                sx={{ bgcolor: '#f8fafc', color: '#64748b', '&:hover': { bgcolor: '#f1f5f9' } }}
                                onClick={() => setSettingsOpen(true)}
                            >
                                <SettingsIcon sx={{ fontSize: 18 }} />
                            </IconButton>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconButton
                                size="small"
                                sx={{ bgcolor: '#fef2f2', color: '#dc2626' }}
                                onClick={() => setNotiOpen(true)}
                            >
                                <Badge badgeContent={notifications.filter(n => !n.read).length} color="error">
                                    <NotificationsIcon sx={{ fontSize: 18 }} />
                                </Badge>
                            </IconButton>
                        </motion.div>
                        <Divider orientation="vertical" flexItem sx={{ mx: 1, height: 28, my: 'auto' }} />
                        <motion.div whileHover={{ scale: 1.03 }} style={{ cursor: 'pointer' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Avatar sx={{ width: 38, height: 38, bgcolor: '#0f172a', fontWeight: 900, fontSize: 14, boxShadow: '0 4px 12px rgba(15,23,42,0.3)' }}>A</Avatar>
                                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <Typography sx={{ fontWeight: 800, fontSize: 13, color: '#0f172a', lineHeight: 1.2 }}>Admin User</Typography>
                                    <Typography sx={{ fontSize: 11, color: '#94a3b8' }}>System Operator</Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </motion.div>

            {/* Notification Drawer */}
            <Drawer anchor="right" open={notiOpen} onClose={() => setNotiOpen(false)} PaperProps={{ sx: { width: 360, borderRadius: '24px 0 0 24px', p: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>Notifications</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton onClick={clearAll} size="small" color="error" title="Clear All">
                            <DeleteSweepIcon fontSize="small" />
                        </IconButton>
                        <IconButton onClick={() => setNotiOpen(false)} size="small" sx={{ bgcolor: '#f8fafc' }}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
                {notifications.length === 0 ? (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <Typography sx={{ color: '#94a3b8', fontWeight: 600 }}>No new notifications</Typography>
                    </Box>
                ) : (
                    <List>
                        {notifications.map((n) => (
                            <ListItem
                                key={n.id}
                                sx={{
                                    mb: 2,
                                    bgcolor: n.read ? '#f8fafc' : n.type === 'urgent' ? '#fef2f2' : '#f0f9ff',
                                    borderRadius: 3, p: 2,
                                    borderLeft: '4px solid',
                                    borderColor: n.read ? 'transparent' : n.type === 'urgent' ? '#dc2626' : '#0284c7',
                                    cursor: 'pointer'
                                }}
                                onClick={() => markAsRead(n.id)}
                            >
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: n.type === 'urgent' ? '#dc2626' : '#0284c7' }}>
                                        <BoltIcon fontSize="small" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={n.title}
                                    secondary={`${n.desc} • ${n.time}`}
                                    primaryTypographyProps={{ fontWeight: 700, fontSize: 14, color: n.read ? '#94a3b8' : '#0f172a' }}
                                    secondaryTypographyProps={{ fontSize: 11 }}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Drawer>

            {/* Settings Drawer */}
            <Drawer anchor="right" open={settingsOpen} onClose={() => setSettingsOpen(false)} PaperProps={{ sx: { width: 360, borderRadius: '24px 0 0 24px', p: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>Admin Settings</Typography>
                    <IconButton onClick={() => setSettingsOpen(false)} size="small" sx={{ bgcolor: '#f8fafc' }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', mb: 2 }}>Preferences</Typography>
                    <List disablePadding>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemAvatar><Avatar sx={{ bgcolor: '#f1f5f9', color: '#64748b' }}><DarkModeIcon fontSize="small" /></Avatar></ListItemAvatar>
                            <ListItemText primary="Dark Mode" primaryTypographyProps={{ fontWeight: 600, fontSize: 14 }} />
                            <Switch size="small" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemAvatar><Avatar sx={{ bgcolor: '#f1f5f9', color: '#64748b' }}><VolumeUpIcon fontSize="small" /></Avatar></ListItemAvatar>
                            <ListItemText primary="Sound Effects" primaryTypographyProps={{ fontWeight: 600, fontSize: 14 }} />
                            <Switch defaultChecked size="small" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemAvatar><Avatar sx={{ bgcolor: '#f1f5f9', color: '#64748b' }}><SecurityIcon fontSize="small" /></Avatar></ListItemAvatar>
                            <ListItemText primary="Two-Factor Auth" primaryTypographyProps={{ fontWeight: 600, fontSize: 14 }} />
                            <Switch color="success" size="small" />
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', mb: 2 }}>System Language</Typography>
                    <Select fullWidth size="small" defaultValue="en" sx={{ borderRadius: 2, bgcolor: '#f8fafc' }}>
                        <MenuItem value="en">English (US)</MenuItem>
                        <MenuItem value="rs">Spanish</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                        <MenuItem value="de">German</MenuItem>
                    </Select>
                </Box>

                <Box sx={{ mt: 'auto', p: 2, bgcolor: '#fef2f2', borderRadius: 4, textAlign: 'center' }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#dc2626', mb: 1 }}>Danger Zone</Typography>
                    <Button fullWidth color="error" variant="contained" sx={{ borderRadius: 100, textTransform: 'none', fontWeight: 700 }}>Reset Cache</Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
