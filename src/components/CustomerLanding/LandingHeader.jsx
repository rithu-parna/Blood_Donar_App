import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const LandingHeader = ({ onRegisterClick }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: { xs: 2, md: 8 }, py: 3, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <BloodtypeIcon sx={{ color: '#E11D48', fontSize: 32, mr: 1 }} />
                <Typography variant="h6" fontWeight={800} sx={{ letterSpacing: 0.5 }}>
                    BloodLink
                </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
                {['HOME', 'FIND DONOR', 'REQUESTS', 'ABOUT'].map((item) => (
                    <Typography key={item} variant="body2" sx={{ fontWeight: 600, color: '#9CA3AF', cursor: 'pointer', '&:hover': { color: 'white' }, letterSpacing: 0.5 }}>
                        {item}
                    </Typography>
                ))}
                <Button
                    variant="contained"
                    onClick={onRegisterClick}
                    sx={{ bgcolor: '#E11D48', borderRadius: 1.5, px: 3, py: 1, fontWeight: 700, textTransform: 'none', '&:hover': { bgcolor: '#BE123C' } }}
                >
                    REGISTER / REQUEST
                </Button>
            </Box>
        </Box>
    );
};

export default LandingHeader;
