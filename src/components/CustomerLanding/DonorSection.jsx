import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';

const DonorSection = ({ onRegisterClick }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                <Typography variant="h4" fontWeight={900} sx={{ color: '#111827' }}>
                    Registered <Box component="span" sx={{ color: '#10B981' }}>Donors</Box>
                </Typography>
                <Button variant="contained" startIcon={<span>+</span>} onClick={onRegisterClick} sx={{ bgcolor: '#10B981', borderRadius: 2, px: 3, py: 1, textTransform: 'none', fontWeight: 700, boxShadow: 'none', '&:hover': { bgcolor: '#059669' } }}>
                    Register Donor
                </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 8 }}>
                <HandshakeIcon sx={{ fontSize: 64, color: '#FCD34D', mb: 2, opacity: 0.8 }} />
                <Typography variant="body1" color="#6B7280" fontWeight={600}>
                    No donors yet. <Typography component="span" sx={{ color: '#10B981', fontWeight: 700, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }} onClick={onRegisterClick}>Register the first one!</Typography>
                </Typography>
            </Box>
        </Box>
    );
};

export default DonorSection;
