import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Fab, Tooltip, Divider } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LandingHeader from '../components/CustomerLanding/LandingHeader';
import HeroSection from '../components/CustomerLanding/HeroSection';
import StatsBar from '../components/CustomerLanding/StatsBar';
import SearchBar from '../components/CustomerLanding/SearchBar';
import RequestSection from '../components/CustomerLanding/RequestSection';
import DonorSection from '../components/CustomerLanding/DonorSection';
import DonorFormDrawer from '../components/CustomerLanding/DonorFormDrawer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const CustomerLanding = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedBloodType, setSelectedBloodType] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleTypeClear = () => {
        setSelectedBloodType('All');
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#F8FAFC', color: '#1E293B' }}>
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            height: '100vh',
                            width: '100%',
                            backgroundColor: '#1A1423',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '24px',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            zIndex: 9999
                        }}
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Box sx={{
                                width: 70, height: 70, bgcolor: '#E11D48', borderRadius: 3,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 40px rgba(225, 29, 72, 0.4)'
                            }}>
                                <Typography variant="h4" fontWeight={900} color="white">B</Typography>
                            </Box>
                        </motion.div>
                        <Typography variant="h6" fontWeight={800} color="white" sx={{ letterSpacing: 3 }}>LOADING</Typography>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Header & Hero Area */}
                        <Box sx={{ position: 'relative' }}>
                            <LandingHeader onRegisterClick={toggleDrawer(true)} />
                            <HeroSection onRegisterClick={toggleDrawer(true)} />
                        </Box>

                        {/* Impact Stats */}
                        <StatsBar />

                        {/* Main Interaction Area */}
                        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
                            <Box sx={{ mb: 6 }}>
                                <SearchBar
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </Box>

                            <Box id="requests-section" sx={{ mb: 10 }}>
                                <RequestSection
                                    selectedBloodType={selectedBloodType}
                                    searchQuery={searchQuery}
                                    onTypeFilterClear={handleTypeClear}
                                />
                            </Box>

                            <Box sx={{ mt: 12 }}>
                                <DonorSection onRegisterClick={toggleDrawer(true)} />
                            </Box>
                        </Container>

                        {/* Support Actions */}
                        <Box sx={{ position: 'fixed', bottom: 30, right: 30, display: 'flex', flexDirection: 'column', gap: 2, zIndex: 1000 }}>
                            <Tooltip title="Emergency Helpline" placement="left">
                                <Fab sx={{ bgcolor: '#3B82F6', color: 'white', '&:hover': { bgcolor: '#1D4ED8' } }}>
                                    <PhoneIcon />
                                </Fab>
                            </Tooltip>
                            <Tooltip title="WhatsApp Support" placement="left">
                                <Fab sx={{ bgcolor: '#25D366', color: 'white', '&:hover': { bgcolor: '#16A34A' } }}>
                                    <WhatsAppIcon />
                                </Fab>
                            </Tooltip>
                        </Box>

                        <DonorFormDrawer
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        />

                        {/* Footer */}
                        <Box sx={{ py: 8, borderTop: '1px solid #E2E8F0', textAlign: 'center', bgcolor: 'white' }}>
                            <Container maxWidth="lg">
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                                    <Box sx={{ width: 36, height: 36, bgcolor: '#E11D48', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                                        <Typography variant="h6" fontWeight={900} color="white">B</Typography>
                                    </Box>
                                    <Typography variant="h5" fontWeight={900} sx={{ letterSpacing: -1 }}>BloodLink</Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: 'auto', lineHeight: 1.7 }}>
                                    Connecting life with technology. Our mission is to ensure no one suffers due to lack of blood access.
                                </Typography>
                                <Divider sx={{ mb: 4, opacity: 0.5 }} />
                                <Typography variant="caption" color="text.disabled" fontWeight={700}>
                                    © 2026 BLOODLINK FOUNDATION. KERALA, INDIA.
                                </Typography>
                            </Container>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default CustomerLanding;
