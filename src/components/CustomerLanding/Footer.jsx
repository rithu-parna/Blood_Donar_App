import React from 'react';
import { Box, Container, Grid, Typography, Stack, IconButton, Divider, Button, InputBase, Paper } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#0F172A', color: 'white', pt: 10, pb: 4, position: 'relative', overflow: 'hidden' }}>
            {/* Background Decoration */}
            <Box sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: 400,
                height: 400,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(225, 29, 72, 0.05) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={8}>
                    {/* Brand Section */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Box sx={{
                                width: 36,
                                height: 36,
                                bgcolor: '#E11D48',
                                borderRadius: '50% 50% 50% 0',
                                transform: 'rotate(-45deg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                                boxShadow: '0 4px 15px rgba(225, 29, 72, 0.4)',
                            }}>
                                <Box sx={{ width: 8, height: 8, bgcolor: 'white', borderRadius: '50%', transform: 'rotate(45deg)' }} />
                            </Box>
                            <Typography variant="h5" fontWeight={900} sx={{ letterSpacing: -1 }}>
                                Blood<Typography component="span" variant="inherit" sx={{ color: '#E11D48' }}>Link</Typography>
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, mb: 4, maxWidth: 320 }}>
                            Connecting life-savers across the nation. Our platform ensures that blood reaches those in need swiftly and reliably through technology and community.
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, idx) => (
                                <IconButton
                                    key={idx}
                                    size="small"
                                    sx={{
                                        bgcolor: 'rgba(255,255,255,0.03)',
                                        color: 'rgba(255,255,255,0.6)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        '&:hover': { bgcolor: '#E11D48', color: 'white', borderColor: '#E11D48' },
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    <Icon fontSize="small" />
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" fontWeight={800} sx={{ mb: 4, letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.8rem', color: '#E11D48' }}>
                            Quick Links
                        </Typography>
                        <Stack spacing={2}>
                            {['Home', 'Find Donor', 'Requests', 'About Us', 'Contact'].map((link) => (
                                <Typography
                                    key={link}
                                    variant="body2"
                                    sx={{
                                        color: 'rgba(255,255,255,0.6)',
                                        cursor: 'pointer',
                                        '&:hover': { color: 'white' },
                                        transition: '0.2s'
                                    }}
                                >
                                    {link}
                                </Typography>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={6} md={3}>
                        <Typography variant="subtitle1" fontWeight={800} sx={{ mb: 4, letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.8rem', color: '#E11D48' }}>
                            Contact Us
                        </Typography>
                        <Stack spacing={3}>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <LocationOnIcon sx={{ color: '#E11D48', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                                    BloodLink Foundation,<br />
                                    Phase 3, Technopark,<br />
                                    Kerala, India - 695581
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <PhoneIcon sx={{ color: '#E11D48', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                    +91 9876 543 210
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <EmailIcon sx={{ color: '#E11D48', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                    support@bloodlink.org
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Newsletter Section */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle1" fontWeight={800} sx={{ mb: 4, letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.8rem', color: '#E11D48' }}>
                            Newsletter
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 3 }}>
                            Subscribe to get latest updates on donation camps and emergency requests.
                        </Typography>
                        <Paper
                            component="form"
                            sx={{
                                p: '4px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 1.5,
                                boxShadow: 'none'
                            }}
                        >
                            <InputBase
                                sx={{ ml: 1.5, flex: 1, color: 'white', fontSize: '0.85rem' }}
                                placeholder="Enter your email"
                            />
                            <IconButton sx={{ p: '10px', color: '#E11D48' }}>
                                <SendIcon fontSize="small" />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>

                <Divider sx={{ mt: 10, mb: 4, borderColor: 'rgba(255,255,255,0.05)' }} />

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: 0.5 }}>
                        © 2026 BLOODLINK FOUNDATION. ALL RIGHTS RESERVED.
                    </Typography>
                    <Stack direction="row" spacing={4}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text) => (
                            <Typography
                                key={text}
                                variant="caption"
                                sx={{
                                    color: 'rgba(255,255,255,0.4)',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'white' },
                                    fontWeight: 600
                                }}
                            >
                                {text}
                            </Typography>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
