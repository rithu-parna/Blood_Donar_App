import React from 'react';
import { Box, Typography, Button, Grid, CardContent, Card, Stack, Avatar, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RefreshIcon from '@mui/icons-material/Refresh';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';

const dummyDonors = [
    { name: 'Rahul Sharma', type: 'O+', location: 'Kozhikode', count: 5, avatar: null, id: 'DON-001', joined: 'Jan 2024' },
    { name: 'Anjali Nair', type: 'B+', location: 'Kochi', count: 3, avatar: null, id: 'DON-002', joined: 'Mar 2024' },
    { name: 'Muhammed Fayis', type: 'A-', location: 'Malappuram', count: 8, avatar: null, id: 'DON-003', joined: 'Feb 2024' },
    { name: 'Sneha Krishna', type: 'O-', location: 'Trivandrum', count: 12, avatar: null, id: 'DON-004', joined: 'Dec 2023' },
];

const DonorSection = ({ onRegisterClick, limit }) => {
    const displayedDonors = limit ? dummyDonors.slice(0, limit) : dummyDonors;

    return (
        <Box sx={{ mb: 10 }}>
            {/* Header Row */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: 2,
                mb: 4
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h4" fontWeight={900} sx={{ color: '#0F172A', fontSize: '1.8rem', letterSpacing: -0.5 }}>
                        Top <Box component="span" sx={{ color: '#E11D48' }}>Donors</Box>
                    </Typography>
                    <Box sx={{
                        bgcolor: '#E2E8F0',
                        px: 1.5,
                        py: 0.4,
                        borderRadius: 5,
                        color: '#64748B',
                        fontSize: '0.8rem',
                        fontWeight: 700
                    }}>
                        {dummyDonors.length} results
                    </Box>
                </Box>

                <Stack direction="row" spacing={1.5} alignItems="center">
                    <Button
                        variant="outlined"
                        startIcon={<RefreshIcon sx={{ fontSize: 18 }} />}
                        sx={{
                            borderColor: '#E2E8F0',
                            color: '#64748B',
                            textTransform: 'none',
                            borderRadius: 2,
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            px: 2,
                            py: 0.6,
                            '&:hover': { borderColor: '#CBD5E1', bgcolor: 'transparent' }
                        }}
                    >
                        Refresh
                    </Button>
                    <Box sx={{
                        px: 2,
                        py: 0.6,
                        bgcolor: '#F8FAFC',
                        borderRadius: 2,
                        border: '1px solid #E2E8F0',
                        color: '#64748B',
                        fontSize: '0.85rem',
                        fontWeight: 600
                    }}>
                        All Districts
                    </Box>
                </Stack>
            </Box>

            <Grid container spacing={3}>
                {displayedDonors.map((donor, i) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={donor.name}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card sx={{
                                borderRadius: 3,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                border: '1px solid #F1F5F9',
                                '&:hover': { boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }
                            }}>
                                <CardContent sx={{ p: 3 }}>
                                    {/* Profile Info */}
                                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                                        <Avatar sx={{ width: 50, height: 50, bgcolor: '#F1F5F9', color: '#94A3B8' }} />
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight={800} sx={{ color: '#1E293B', lineHeight: 1.2 }}>{donor.name}</Typography>
                                            <Stack direction="row" spacing={1.5} sx={{ mt: 0.5 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#94A3B8' }}>
                                                    <LocationOnIcon sx={{ fontSize: 14 }} />
                                                    <Typography variant="caption" fontWeight={600}>{donor.location}</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#94A3B8' }}>
                                                    <AccessTimeIcon sx={{ fontSize: 14 }} />
                                                    <Typography variant="caption" fontWeight={600}>{donor.joined}</Typography>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Box>

                                    {/* Blood Type & Stats */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                        <Box sx={{
                                            width: 60,
                                            height: 60,
                                            bgcolor: '#FFF1F2',
                                            color: '#E11D48',
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 12px rgba(225, 29, 72, 0.08)',
                                            flexShrink: 0
                                        }}>
                                            <Typography variant="h5" fontWeight={900}>{donor.type}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 700, display: 'block' }}>Donor ID: <span style={{ color: '#1E293B' }}>{donor.id}</span></Typography>
                                            <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 700, display: 'block' }}>Total Donations: <span style={{ color: '#E11D48', fontWeight: 800 }}>{donor.count}</span></Typography>
                                        </Box>
                                    </Box>

                                    {/* Bottom Actions */}
                                    <Box sx={{ pt: 2, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Stack direction="row" spacing={1}>
                                            {[WhatsAppIcon, PhoneIcon, MessageIcon].map((Icon, idx) => (
                                                <IconButton key={idx} size="small" sx={{ bgcolor: '#F8FAFC', color: '#94A3B8', '&:hover': { bgcolor: '#F1F5F9' } }}>
                                                    <Icon sx={{ fontSize: 16 }} />
                                                </IconButton>
                                            ))}
                                        </Stack>
                                        <Button
                                            size="small"
                                            sx={{
                                                color: '#E11D48',
                                                fontWeight: 800,
                                                textTransform: 'none',
                                                fontSize: '0.8rem',
                                                '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                                            }}
                                        >
                                            View Profile →
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default DonorSection;
