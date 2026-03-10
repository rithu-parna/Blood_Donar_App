import React, { useState } from 'react';
import {
    Box, Typography, IconButton, Badge, Divider, InputBase, Avatar,
    Drawer, List, ListItem, ListItemAvatar, ListItemText
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import BoltIcon from '@mui/icons-material/Bolt';
import { motion } from 'framer-motion';

const Header = ({ searchQuery, setSearchQuery }) => {
    const [searchFocused, setSearchFocused] = useState(false);
    const [notiOpen, setNotiOpen] = useState(false);

    const notifications = [
        { id: 1, title: 'Critical O- Needed', desc: 'City General Hospital requires 5 units urgently.', time: '2 mins ago', type: 'urgent' },
        { id: 2, title: 'New Donor Registered', desc: 'John Doe just registered as an A+ donor.', time: '15 mins ago', type: 'info' },
        { id: 3, title: 'Stock Update', desc: 'B+ inventory replenished to 40 units.', time: '1 hour ago', type: 'success' },
    ];

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
                        {[LanguageIcon, SettingsIcon].map((Icon, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.1, rotate: i === 1 ? 20 : 0 }} whileTap={{ scale: 0.9 }}>
                                <IconButton size="small" sx={{ bgcolor: '#f8fafc', color: '#64748b', '&:hover': { bgcolor: '#f1f5f9' } }}>
                                    <Icon sx={{ fontSize: 18 }} />
                                </IconButton>
                            </motion.div>
                        ))}
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconButton
                                size="small"
                                sx={{ bgcolor: '#fef2f2', color: '#dc2626' }}
                                onClick={() => setNotiOpen(true)}
                            >
                                <Badge variant="dot" color="error"><NotificationsIcon sx={{ fontSize: 18 }} /></Badge>
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
            <Drawer anchor="right" open={notiOpen} onClose={() => setNotiOpen(false)} PaperProps={{ sx: { width: 320, borderRadius: '24px 0 0 24px', p: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>Notifications</Typography>
                    <IconButton onClick={() => setNotiOpen(false)} size="small" sx={{ bgcolor: '#f8fafc' }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
                <List>
                    {notifications.map((n) => (
                        <ListItem key={n.id} sx={{ mb: 2, bgcolor: n.type === 'urgent' ? '#fef2f2' : '#f8fafc', borderRadius: 3, p: 2 }}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: n.type === 'urgent' ? '#dc2626' : '#64748b' }}>
                                    <BoltIcon fontSize="small" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={n.title}
                                secondary={`${n.desc} • ${n.time}`}
                                primaryTypographyProps={{ fontWeight: 700, fontSize: 14 }}
                                secondaryTypographyProps={{ fontSize: 12 }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Header;
