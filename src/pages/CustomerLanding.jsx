import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import LandingHeader from '../components/CustomerLanding/LandingHeader';
import HeroSection from '../components/CustomerLanding/HeroSection';
import StatsBar from '../components/CustomerLanding/StatsBar';
import SearchBar from '../components/CustomerLanding/SearchBar';
import RequestSection from '../components/CustomerLanding/RequestSection';
import DonorSection from '../components/CustomerLanding/DonorSection';
import DonorFormDrawer from '../components/CustomerLanding/DonorFormDrawer';

const CustomerLanding = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#FDF8F5', fontFamily: '"Inter", sans-serif' }}>

            {/* Header & Hero Section */}
            <Box sx={{ bgcolor: '#1A1423', color: 'white' }}>
                <LandingHeader onRegisterClick={toggleDrawer(true)} />
                <HeroSection onRegisterClick={toggleDrawer(true)} />
            </Box>

            {/* Stats Bar */}
            <StatsBar />

            {/* Main Content Area */}
            <Container maxWidth="xl" sx={{ py: 8 }}>
                {/* Search / Filter Bar */}
                <SearchBar />

                {/* Active Requests Section */}
                <RequestSection />

                {/* Registered Donors Section */}
                <DonorSection onRegisterClick={toggleDrawer(true)} />
            </Container>

            {/* Right Drawer - Register as Donor Form */}
            <DonorFormDrawer
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            />
        </Box>
    );
};

export default CustomerLanding;

