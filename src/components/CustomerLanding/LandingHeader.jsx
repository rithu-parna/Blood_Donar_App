import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, IconButton, Stack, Divider, useScrollTrigger } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const LandingHeader = ({ onRegisterClick }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    return (
        <Box sx={{ width: '100%', position: trigger ? 'fixed' : 'absolute', top: 0, zIndex: 1100, transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            {/* Top Bar - Premium Info */}
            <Box sx={{
                bgcolor: trigger ? '#0f172a' : 'rgba(15, 23, 42, 0.3)',
                backdropFilter: 'blur(12px)',
                color: 'white',
                py: 1.2,
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: { xs: 'none', lg: 'block' },
                transition: 'all 0.4s ease'
            }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack direction="row" spacing={5} alignItems="center">
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                                <LocationOnIcon sx={{ fontSize: 18, color: '#E11D48' }} />
                                <Typography variant="caption" fontWeight={800} sx={{ letterSpacing: 0.8, textTransform: 'uppercase' }}>Kozhikode, Kerala, India</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                                <MailOutlineIcon sx={{ fontSize: 18, color: '#E11D48' }} />
                                <Typography variant="caption" fontWeight={800} sx={{ letterSpacing: 0.8, textTransform: 'uppercase' }}>support@bloodlink.org</Typography>
                            </Box>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon].map((Icon, idx) => (
                                <IconButton key={idx} size="small" sx={{ color: 'rgba(255,255,255,0.8)', '&:hover': { color: '#E11D48', bgcolor: 'rgba(255,255,255,0.1)', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}>
                                    <Icon fontSize="inherit" />
                                </IconButton>
                            ))}
                        </Stack>
                    </Box>
                </Container>
            </Box>

            {/* Main Header */}
            <Box sx={{
                width: '100%',
                bgcolor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: trigger ? 'blur(20px)' : 'none',
                boxShadow: trigger ? '0 15px 40px rgba(0,0,0,0.1)' : 'none',
                py: trigger ? 1.5 : 4,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                borderBottom: trigger ? '1px solid rgba(226, 232, 240, 0.8)' : 'none'
            }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {/* Logo Hub */}
                        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <Box sx={{
                                width: { xs: 45, md: 55 },
                                height: { xs: 45, md: 55 },
                                bgcolor: '#E11D48',
                                borderRadius: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2.5,
                                boxShadow: '0 15px 30px rgba(225, 29, 72, 0.35)',
                                transform: 'rotate(-6deg)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                '&:hover': { transform: 'rotate(0deg) scale(1.05)' }
                            }}>
                                <BloodtypeIcon sx={{ color: 'white', fontSize: { xs: 26, md: 34 } }} />
                            </Box>
                            <Typography variant="h4" fontWeight={950} sx={{
                                letterSpacing: -2,
                                color: trigger ? '#0f172a' : 'white',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: { xs: '1.8rem', md: '2.5rem' }
                            }}>
                                Blood<Typography component="span" variant="inherit" sx={{ color: '#E11D48' }}>Link</Typography>
                            </Typography>
                        </Box>

                        {/* Navigation Hub */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 5, lg: 10 } }}>
                            <Stack direction="row" spacing={6} sx={{ display: { xs: 'none', lg: 'flex' } }}>
                                {['Home', 'About', 'Donors', 'Contact'].map((item) => (
                                    <Typography
                                        key={item}
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 900,
                                            color: trigger ? '#475569' : 'rgba(255,255,255,0.9)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            fontSize: '1rem',
                                            position: 'relative',
                                            letterSpacing: 0.5,
                                            '&:after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: '0%',
                                                height: '3px',
                                                bottom: '-8px',
                                                left: 0,
                                                bgcolor: '#E11D48',
                                                transition: 'width 0.3s',
                                                borderRadius: 1
                                            },
                                            '&:hover': {
                                                color: trigger ? '#E11D48' : 'white',
                                                '&:after': { width: '80%' }
                                            }
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Stack>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <Button
                                    variant="contained"
                                    onClick={onRegisterClick}
                                    className="glow-btn"
                                    sx={{
                                        bgcolor: '#E11D48',
                                        borderRadius: 4,
                                        px: { xs: 4, md: 6 },
                                        py: 2,
                                        fontWeight: 950,
                                        textTransform: 'none',
                                        fontSize: '1.05rem',
                                        display: { xs: 'none', sm: 'block' },
                                        boxShadow: '0 12px 24px rgba(225, 29, 72, 0.3)',
                                        '&:hover': { bgcolor: '#BE123C', transform: 'translateY(-3px)' },
                                        transition: 'all 0.4s'
                                    }}
                                >
                                    Get Started
                                </Button>

                                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2.5 }}>
                                    <Box sx={{
                                        width: 55,
                                        height: 55,
                                        borderRadius: '50%',
                                        bgcolor: 'rgba(225, 29, 72, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(225, 29, 72, 0.2)',
                                        cursor: 'pointer',
                                        boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
                                        '&:hover': { transform: 'scale(1.1) rotate(15deg)', bgcolor: '#E11D48', color: 'white', borderColor: '#E11D48' },
                                        transition: 'all 0.4s',
                                        color: '#E11D48'
                                    }}>
                                        <PhoneInTalkIcon fontSize="medium" />
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" sx={{ color: trigger ? '#64748B' : 'rgba(255,255,255,0.6)', display: 'block', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1 }}>Rescue Hub</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 950, color: trigger ? '#0f172a' : 'white', letterSpacing: 0.5, lineHeight: 1 }}>+91 98765 43210</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};


export default LandingHeader;
