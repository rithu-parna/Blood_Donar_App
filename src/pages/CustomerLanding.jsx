import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Tooltip, Divider } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LandingHeader from '../components/CustomerLanding/LandingHeader';
import HeroSection from '../components/CustomerLanding/HeroSection';
import StatsBar from '../components/CustomerLanding/StatsBar';
import SearchBar from '../components/CustomerLanding/SearchBar';
import RequestSection from '../components/CustomerLanding/RequestSection';
import DonorSection from '../components/CustomerLanding/DonorSection';
import DonorFormDrawer from '../components/CustomerLanding/DonorFormDrawer';
import Footer from '../components/CustomerLanding/Footer';

const CustomerLanding = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedBloodType, setSelectedBloodType] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [activePage, setActivePage] = useState('home');

    useEffect(() => {
        // Initial load
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handlePageChange = (pageId) => {
        if (pageId === activePage) return;
        setLoading(true);
        setTimeout(() => {
            setActivePage(pageId);
            setLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleTypeClear = () => {
        setSelectedBloodType('All');
    };

    const renderContent = () => {
        switch (activePage) {
            case 'home':
                return (
                    <>
                        <HeroSection
                            onRegisterClick={toggleDrawer(true)}
                            onAboutClick={() => handlePageChange('about')}
                        />
                        <Box sx={{ pt: 10 }}>
                            <StatsBar />
                            <Container maxWidth="xl" sx={{ py: 10 }}>
                                <Box sx={{ mb: 10 }}>
                                    <Typography variant="h3" fontWeight={900} sx={{ mb: 2, textAlign: 'center', color: '#0F172A' }}>
                                        Find <Box component="span" sx={{ color: '#E11D48' }}>Quick</Box> Assistance
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#64748B', textAlign: 'center', mb: 6, fontSize: '1.1rem' }}>
                                        Search our real-time database to connect with donors and active requests near you.
                                    </Typography>
                                    <SearchBar
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onNewRequestClick={toggleDrawer(true)}
                                    />
                                </Box>
                                <RequestSection
                                    selectedBloodType={selectedBloodType}
                                    searchQuery={searchQuery}
                                    onTypeFilterClear={handleTypeClear}
                                    limit={4}
                                />
                                <Box sx={{ mt: 15 }}>
                                    <DonorSection onRegisterClick={toggleDrawer(true)} limit={4} />
                                </Box>
                            </Container>
                        </Box>
                    </>
                );
            case 'requests':
                return (
                    <Container maxWidth="xl" sx={{ pt: 20, pb: 10 }}>
                        <Box sx={{ mb: 8 }}>
                            <Typography variant="h2" fontWeight={950} sx={{ color: '#0F172A', letterSpacing: -2, mb: 2 }}>
                                Active Blood <Box component="span" sx={{ color: '#E11D48' }}>Requests</Box>
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
                                Browse and respond to urgent blood requirements in your area.
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 6 }}>
                            <SearchBar
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onNewRequestClick={toggleDrawer(true)}
                            />
                        </Box>
                        <RequestSection
                            selectedBloodType={selectedBloodType}
                            searchQuery={searchQuery}
                            onTypeFilterClear={handleTypeClear}
                        />
                    </Container>
                );
            case 'donors':
                return (
                    <Container maxWidth="xl" sx={{ pt: 20, pb: 10 }}>
                        <Box sx={{ mb: 8 }}>
                            <Typography variant="h2" fontWeight={950} sx={{ color: '#0F172A', letterSpacing: -2, mb: 2 }}>
                                Registered <Box component="span" sx={{ color: '#E11D48' }}>Donors</Box>
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
                                Connect with our community of local life-savers.
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 6 }}>
                            <SearchBar
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onNewRequestClick={toggleDrawer(true)}
                            />
                        </Box>
                        <DonorSection onRegisterClick={toggleDrawer(true)} />
                    </Container>
                );
            case 'about':
                return (
                    <Container maxWidth="xl" sx={{ pt: 25, pb: 20 }}>
                        <Grid container spacing={8} alignItems="center">
                            <Grid item xs={12} lg={6}>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Typography variant="overline" sx={{ color: '#E11D48', fontWeight: 900, letterSpacing: 4 }}>
                                        OUR MISSION
                                    </Typography>
                                    <Typography variant="h2" fontWeight={950} sx={{ color: '#0F172A', letterSpacing: -3, my: 3, lineHeight: 1 }}>
                                        Redefining Emergency <Box component="span" sx={{ color: '#E11D48' }}>Response</Box>
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#64748B', lineHeight: 1.8, mb: 4, fontWeight: 500 }}>
                                        BloodLink is more than just a directory; it's a real-time ecosystem designed to connect life-savers with those in urgent need.
                                    </Typography>
                                    <Grid container spacing={3} sx={{ mt: 2 }}>
                                        {[
                                            { title: 'Fast Connect', desc: 'Cutting edge algorithms to find the nearest match in seconds.' },
                                            { title: 'Verified Only', desc: 'Secure verification process for every registered donor.' }
                                        ].map((item, idx) => (
                                            <Grid item xs={12} sm={6} key={idx}>
                                                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 3, border: '1px solid #F1F5F9', height: '100%' }}>
                                                    <Typography variant="subtitle1" fontWeight={900} color="#0F172A" mb={1}>{item.title}</Typography>
                                                    <Typography variant="body2" color="#64748B" fontWeight={600} lineHeight={1.6}>{item.desc}</Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <Box sx={{
                                        width: '100%',
                                        aspectRatio: '1/1',
                                        bgcolor: '#FFF1F2',
                                        borderRadius: 12,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <Box sx={{
                                            width: 180,
                                            height: 180,
                                            bgcolor: '#E11D48',
                                            borderRadius: '50% 50% 50% 0',
                                            transform: 'rotate(-45deg)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 30px 60px rgba(225, 29, 72, 0.4)'
                                        }}>
                                            <Typography variant="h1" sx={{ transform: 'rotate(45deg)', color: 'white', fontWeight: 950 }}>B</Typography>
                                        </Box>
                                        <Box sx={{ position: 'absolute', top: '10%', right: '10%', width: 80, height: 80, borderRadius: '50%', border: '2px solid rgba(225,29,72,0.1)' }} />
                                        <Box sx={{ position: 'absolute', bottom: '15%', left: '15%', width: 40, height: 40, bgcolor: 'rgba(225,29,72,0.1)', borderRadius: 2 }} />
                                    </Box>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Container>
                );
            default:
                return null;
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#FFF5F5', color: '#1E293B', backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(225, 29, 72, 0.05) 0%, transparent 70%)' }}>
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
                        style={{
                            height: '100vh',
                            width: '100%',
                            backgroundColor: '#0F172A',
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
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Box sx={{
                                width: 70, height: 70, bgcolor: '#E11D48', borderRadius: 3,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 40px rgba(225, 29, 72, 0.4)'
                            }}>
                                <Typography variant="h4" fontWeight={900} color="white">B</Typography>
                            </Box>
                        </motion.div>
                        <Typography variant="h6" fontWeight={800} color="white" sx={{ letterSpacing: 3 }}>BLOODLINK</Typography>
                    </motion.div>
                ) : (
                    <motion.div
                        key={activePage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        style={{ flex: 1 }}
                    >
                        {renderContent()}

                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>

            <DonorFormDrawer
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            />
        </Box>
    );
};

export default CustomerLanding;
