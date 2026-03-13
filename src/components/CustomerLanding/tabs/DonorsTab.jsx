import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SearchBar from '../SearchBar';
import DonorSection from '../DonorSection';

const DonorsTab = ({ searchQuery, setSearchQuery, onRegisterClick }) => {
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
                    onNewRequestClick={onRegisterClick}
                />
            </Box>
            <DonorSection onRegisterClick={onRegisterClick} />
        </Container>
    );
};

export default DonorsTab;
