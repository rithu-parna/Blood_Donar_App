import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LandingHeader from '../components/CustomerLanding/LandingHeader';
import DonorFormDrawer from '../components/CustomerLanding/DonorFormDrawer';
import RequestFormDrawer from '../components/CustomerLanding/RequestFormDrawer';
import Footer from '../components/CustomerLanding/Footer';
import HomeTab from '../components/CustomerLanding/tabs/HomeTab';
import RequestsTab from '../components/CustomerLanding/tabs/RequestsTab';
import DonorsTab from '../components/CustomerLanding/tabs/DonorsTab';
import AboutTab from '../components/CustomerLanding/tabs/AboutTab';

const CustomerLanding = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [requestDrawerOpen, setRequestDrawerOpen] = useState(false);
    const [selectedBloodType, setSelectedBloodType] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const activePage = location.pathname.split('/').pop() || 'home';

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handlePageChange = (pageId) => {
        if (pageId === activePage) return;
        setLoading(true);
        setTimeout(() => {
            navigate(`/customer/${pageId === 'home' ? '' : pageId}`);
            setLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const toggleRequestDrawer = (open) => () => {
        setRequestDrawerOpen(open);
    };

    const handleTypeClear = () => {
        setSelectedBloodType('All');
    };

    const isDarkPage = activePage === 'about';

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: isDarkPage ? '#050505' : '#FFF5F5',
            color: isDarkPage ? 'white' : '#1E293B',
            backgroundImage: isDarkPage
                ? 'radial-gradient(circle at 50% 0%, rgba(225, 29, 72, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle at 50% 0%, rgba(225, 29, 72, 0.05) 0%, transparent 70%)',
            transition: 'background-color 0.5s ease'
        }}>
            <LandingHeader
                activePage={activePage}
                onPageChange={handlePageChange}
                onRegisterClick={toggleDrawer(true)}
            />

            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: '#050505',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999,
                            overflow: 'hidden'
                        }}
                    >
                        {/* Decorative Background for Loader */}
                        <Box sx={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.1 }}>
                            <Box sx={{ position: 'absolute', top: '-10%', right: '-10%', width: 500, height: 500, bgcolor: '#E11D48', borderRadius: '50%', filter: 'blur(100px)' }} />
                            <Box sx={{ position: 'absolute', bottom: '-10%', left: '-10%', width: 400, height: 400, bgcolor: '#E11D48', borderRadius: '50%', filter: 'blur(80px)' }} />
                        </Box>

                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Box sx={{
                                width: 60,
                                height: 60,
                                backgroundColor: '#E11D48',
                                borderRadius: '50% 50% 50% 0',
                                transform: 'rotate(-45deg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 40px rgba(225, 29, 72, 0.6)'
                            }}>
                                <Box sx={{ width: 18, height: 18, bgcolor: 'white', borderRadius: '50%', transform: 'rotate(45deg)' }} />
                            </Box>
                        </motion.div>
                        <Box sx={{ mt: 5, textAlign: 'center', position: 'relative' }}>
                            <Typography variant="h4" fontWeight={950} sx={{ color: 'white', letterSpacing: 6, textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                                BLOOD<Box component="span" sx={{ color: '#E11D48' }}>LINK</Box>
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', mt: 1.5, letterSpacing: 3, display: 'block', fontWeight: 800 }}>
                                INITIALIZING SECURE PROTOCOLS
                            </Typography>
                        </Box>
                    </motion.div>
                ) : (
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Routes>
                                <Route path="/" element={
                                    <HomeTab
                                        onDonorRegisterClick={toggleDrawer(true)}
                                        onRequestCreateClick={toggleRequestDrawer(true)}
                                        onAboutClick={() => handlePageChange('about')}
                                        searchQuery={searchQuery}
                                        setSearchQuery={setSearchQuery}
                                        selectedBloodType={selectedBloodType}
                                        handleTypeClear={handleTypeClear}
                                    />
                                } />
                                <Route path="requests" element={
                                    <RequestsTab
                                        searchQuery={searchQuery}
                                        setSearchQuery={setSearchQuery}
                                        selectedBloodType={selectedBloodType}
                                        handleTypeClear={handleTypeClear}
                                        onNewRequestClick={toggleRequestDrawer(true)}
                                    />
                                } />
                                <Route path="donors" element={
                                    <DonorsTab
                                        searchQuery={searchQuery}
                                        setSearchQuery={setSearchQuery}
                                        onRegisterClick={toggleDrawer(true)}
                                    />
                                } />
                                <Route path="about" element={
                                    <AboutTab onRegisterClick={toggleDrawer(true)} />
                                } />
                                <Route path="*" element={<Navigate to="/customer" replace />} />
                            </Routes>
                        </Box>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>

            <DonorFormDrawer
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            />

            <RequestFormDrawer
                open={requestDrawerOpen}
                onClose={toggleRequestDrawer(false)}
            />
        </Box>
    );
};

export default CustomerLanding;
