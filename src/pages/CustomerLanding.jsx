import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Stack, Divider, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LandingHeader from '../components/CustomerLanding/LandingHeader';
import HeroSection from '../components/CustomerLanding/HeroSection';
import StatsBar from '../components/CustomerLanding/StatsBar';
import SearchBar from '../components/CustomerLanding/SearchBar';
import RequestSection from '../components/CustomerLanding/RequestSection';
import DonorSection from '../components/CustomerLanding/DonorSection';
import DonorFormDrawer from '../components/CustomerLanding/DonorFormDrawer';
import Footer from '../components/CustomerLanding/Footer';

import donation1 from '../assets/about/donation1.png';
import donation2 from '../assets/about/donation2.png';
import donation3 from '../assets/about/donation3.png';

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
                    <Box sx={{ pt: 20, pb: 15, position: 'relative', overflow: 'hidden' }}>
                        {/* Background Decorative Shapes */}
                        <Box sx={{ position: 'absolute', top: '10%', right: '-5%', width: 600, height: 600, bgcolor: 'rgba(225, 29, 72, 0.03)', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0 }} />
                        <Box sx={{ position: 'absolute', bottom: '20%', left: '-10%', width: 400, height: 400, bgcolor: 'rgba(225, 29, 72, 0.02)', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }} />

                        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                            <Grid container spacing={10} alignItems="center">
                                {/* Text Content */}
                                <Grid item xs={12} lg={6}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <Typography variant="overline" sx={{ color: '#E11D48', fontWeight: 900, letterSpacing: 5, mb: 2, display: 'block' }}>
                                            OUR JOURNEY
                                        </Typography>
                                        <Typography variant="h1" fontWeight={950} sx={{ color: '#0F172A', letterSpacing: -4, lineHeight: 0.9, mb: 4 }}>
                                            Saving Lives Through <Box component="span" sx={{ color: '#E11D48' }}>Connection</Box>
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: '#64748B', lineHeight: 1.8, mb: 6, fontWeight: 500, maxWidth: 550 }}>
                                            We believe that nobody should have to wait for a life-saving blood donation. BloodLink bridges the gap between those who want to give and those who need to receive.
                                        </Typography>

                                        <Stack direction="row" spacing={4} sx={{ mb: 8 }}>
                                            <Box>
                                                <Typography variant="h3" fontWeight={950} color="#0F172A">98%</Typography>
                                                <Typography variant="caption" fontWeight={800} color="#E11D48">MATCH RATE</Typography>
                                            </Box>
                                            <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(0,0,0,0.06)', height: 60 }} />
                                            <Box>
                                                <Typography variant="h3" fontWeight={950} color="#0F172A">15m</Typography>
                                                <Typography variant="caption" fontWeight={800} color="#E11D48">AVG RESPONSE</Typography>
                                            </Box>
                                        </Stack>

                                        <Grid container spacing={3}>
                                            {[
                                                { icon: '❤', title: 'Deep Impact', desc: 'Over 10,000 successful matches made this year alone.' },
                                                { icon: '⚡', title: 'Real-time Tech', desc: 'Instant notifications to verified donors in your direct vicinity.' }
                                            ].map((item, idx) => (
                                                <Grid item xs={12} sm={6} key={idx}>
                                                    <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid #F1F5F9' }}>
                                                        <Box sx={{ fontSize: '2rem', mb: 2 }}>{item.icon}</Box>
                                                        <Typography variant="subtitle1" fontWeight={900} sx={{ color: '#0F172A', mb: 1 }}>{item.title}</Typography>
                                                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 600, lineHeight: 1.6 }}>{item.desc}</Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </motion.div>
                                </Grid>

                                {/* Visual Section - Dribbble Style */}
                                <Grid item xs={12} lg={6}>
                                    <Box sx={{ position: 'relative', height: { lg: 750, xs: 500 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* Main Large Image */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1 }}
                                            style={{ width: '85%', zIndex: 2 }}
                                        >
                                            <Box sx={{
                                                width: '100%',
                                                aspectRatio: '1/1',
                                                borderRadius: 10,
                                                overflow: 'hidden',
                                                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.2)',
                                                border: '8px solid white',
                                                backgroundImage: `url(${donation1})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }} />
                                        </motion.div>

                                        {/* Secondary Floating Image */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                            style={{ position: 'absolute', top: '10%', right: '0%', width: '45%', zIndex: 3 }}
                                        >
                                            <Box sx={{
                                                width: '100%',
                                                aspectRatio: '1/1',
                                                borderRadius: '50% 50% 5% 50%',
                                                overflow: 'hidden',
                                                boxShadow: '0 30px 60px rgba(225,29,72,0.15)',
                                                border: '6px solid white',
                                                backgroundImage: `url(${donation2})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }} />
                                        </motion.div>

                                        {/* Tertiary Image */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.6 }}
                                            style={{ position: 'absolute', bottom: '5%', left: '-5%', width: '40%', zIndex: 4 }}
                                        >
                                            <Box sx={{
                                                width: '100%',
                                                aspectRatio: '16/9',
                                                borderRadius: 5,
                                                overflow: 'hidden',
                                                boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                                                border: '6px solid white',
                                                backgroundImage: `url(${donation3})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }} />
                                        </motion.div>

                                        {/* Decorative Elements */}
                                        <Box className="floating" sx={{
                                            position: 'absolute',
                                            top: '20%',
                                            left: '10%',
                                            width: 120,
                                            height: 120,
                                            bgcolor: '#E11D48',
                                            borderRadius: '50% 50% 0 50%',
                                            zIndex: 1,
                                            opacity: 0.1
                                        }} />
                                    </Box>
                                </Grid>
                            </Grid>

                            {/* New Storytelling Section - How it Works */}
                            <Box sx={{ mt: 20 }}>
                                <Typography variant="h3" fontWeight={950} sx={{ textAlign: 'center', mb: 10, color: '#0F172A' }}>
                                    How it <Box component="span" sx={{ color: '#E11D48' }}>Works</Box>
                                </Typography>

                                <Grid container spacing={4}>
                                    {[
                                        {
                                            title: 'Register Profile',
                                            desc: 'Join our community as a donor or verified hospital by providing your medical credentials.',
                                            img: donation2
                                        },
                                        {
                                            title: 'Smart Matching',
                                            desc: 'Our AI-driven system scans for the closest match based on urgency and location.',
                                            img: donation1
                                        },
                                        {
                                            title: 'Direct Connection',
                                            desc: 'Connect directly via our secure messaging system to coordinate the emergency donation.',
                                            img: donation3
                                        }
                                    ].map((step, i) => (
                                        <Grid item xs={12} md={4} key={i}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                            >
                                                <Box sx={{
                                                    p: 2,
                                                    bgcolor: 'white',
                                                    borderRadius: 6,
                                                    boxShadow: '0 30px 60px -20px rgba(0,0,0,0.05)',
                                                    border: '1px solid rgba(0,0,0,0.03)',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                }}>
                                                    <Box sx={{
                                                        width: '100%',
                                                        height: 250,
                                                        borderRadius: 5,
                                                        mb: 3,
                                                        backgroundImage: `url(${step.img})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center'
                                                    }} />
                                                    <Box sx={{ px: 2, pb: 2 }}>
                                                        <Typography variant="h5" fontWeight={900} color="#0F172A" mb={1}>
                                                            0{i + 1}. {step.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="#64748B" fontWeight={600} lineHeight={1.8}>
                                                            {step.desc}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </motion.div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            {/* CTA Section */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <Box sx={{
                                    mt: 20,
                                    p: { xs: 6, md: 10 },
                                    bgcolor: '#0F172A',
                                    borderRadius: 10,
                                    textAlign: 'center',
                                    color: 'white',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, bgcolor: 'rgba(225, 29, 72, 0.1)', borderRadius: '50%' }} />
                                    <Typography variant="h2" fontWeight={950} sx={{ mb: 3 }}>Ready to make a <Typography component="span" variant="inherit" sx={{ color: '#E11D48' }}>difference?</Typography></Typography>
                                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.6)', mb: 6, fontWeight: 500, maxWidth: 600, mx: 'auto' }}>
                                        Join over 10,000+ donors who are already saving lives in our community. Register today.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={toggleDrawer(true)}
                                        sx={{
                                            bgcolor: '#E11D48',
                                            px: 6,
                                            py: 2,
                                            borderRadius: 3,
                                            fontWeight: 900,
                                            boxShadow: '0 20px 40px rgba(225, 29, 72, 0.3)',
                                            '&:hover': { bgcolor: '#BE123C' }
                                        }}
                                    >
                                        BECOME A DONOR
                                    </Button>
                                </Box>
                            </motion.div>
                        </Container>
                    </Box>
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
