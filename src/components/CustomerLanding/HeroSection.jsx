import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HandshakeIcon from '@mui/icons-material/Handshake';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { bloodTypes } from './constants';

const HeroSection = ({ onRegisterClick }) => {
    return (
        <Container maxWidth="xl" sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 10, md: 12 } }}>
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={7}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', bgcolor: '#3E1825', px: 2, py: 0.75, borderRadius: 10, mb: 4 }}>
                        <WaterDropIcon sx={{ color: '#E11D48', fontSize: 16, mr: 1 }} />
                        <Typography variant="caption" fontWeight={700} sx={{ color: '#FDA4AF', letterSpacing: 1 }}>SAVE A LIFE TODAY</Typography>
                    </Box>

                    <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.1, mb: 3, maxWidth: 600 }}>
                        Connect <Box component="span" sx={{ color: '#E11D48' }}>Blood Donors</Box> with Those in Need
                    </Typography>

                    <Typography variant="body1" sx={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.6, mb: 5, maxWidth: 550 }}>
                        A real-time platform that bridges the gap between blood donors and patients in critical need. Fast, reliable, and life-saving.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            onClick={onRegisterClick}
                            startIcon={<HandshakeIcon sx={{ color: '#FCD34D' }} />}
                            sx={{ bgcolor: '#E11D48', px: 4, py: 1.5, borderRadius: 2, fontWeight: 700, textTransform: 'none', fontSize: '1rem', '&:hover': { bgcolor: '#BE123C' } }}
                        >
                            Register as Donor
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<IntegrationInstructionsIcon />}
                            sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white', px: 4, py: 1.5, borderRadius: 2, fontWeight: 700, textTransform: 'none', fontSize: '1rem', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' } }}
                        >
                            Request Blood
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, pl: { md: 8 } }}>
                        {bloodTypes.map((type, i) => (
                            <Box
                                key={type + i}
                                sx={{
                                    aspectRatio: '1', bgcolor: '#4C1D2A', borderRadius: 3, display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(225,29,72,0.2)',
                                    position: 'relative', transition: 'all 0.3s', cursor: 'pointer',
                                    '&:hover': { transform: 'translateY(-5px)', borderColor: '#E11D48', boxShadow: '0 10px 25px rgba(225,29,72,0.2)' }
                                }}
                            >
                                <Typography variant="h5" fontWeight={800} color="white">{type}</Typography>
                                <Box sx={{ width: 4, height: 4, bgcolor: '#E11D48', borderRadius: '50%', position: 'absolute', bottom: '20%' }} />
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeroSection;
