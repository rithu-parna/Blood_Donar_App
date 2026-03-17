import React from 'react';
import {
    Drawer, Box, Typography, IconButton, Avatar,
    Stack, Divider, Grid, Chip, Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
import HistoryIcon from '@mui/icons-material/History';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const DonorProfileDrawer = ({ open, onClose, donor }) => {
    if (!donor) return null;

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: { xs: '100%', sm: 500 },
                    bgcolor: '#FFF5F5',
                    borderLeft: '1px solid rgba(0,0,0,0.05)'
                }
            }}
        >
            <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h5" fontWeight={950} sx={{ color: '#0F172A', letterSpacing: -1 }}>
                        Donor <Box component="span" sx={{ color: '#E11D48' }}>Profile</Box>
                    </Typography>
                    <IconButton onClick={onClose} sx={{ bgcolor: '#F1F5F9', '&:hover': { bgcolor: '#E2E8F0' } }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Profile Card */}
                <Box sx={{
                    bgcolor: 'white',
                    borderRadius: 6,
                    p: 3,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.02)',
                    textAlign: 'center',
                    position: 'relative',
                    mb: 4
                }}>
                    <Chip
                        icon={<VerifiedIcon sx={{ fontSize: '14px !important' }} />}
                        label="VERIFIED HERO"
                        size="small"
                        sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            bgcolor: '#E11D48',
                            color: 'white',
                            fontWeight: 800,
                            fontSize: '0.65rem'
                        }}
                    />
                    <Avatar
                        src={donor.avatar}
                        sx={{
                            width: 100,
                            height: 100,
                            mx: 'auto',
                            mb: 2,
                            border: '4px solid #FFF1F2',
                            boxShadow: '0 10px 30px rgba(225, 29, 72, 0.15)'
                        }}
                    />
                    <Typography variant="h5" fontWeight={900} sx={{ color: '#0F172A', mb: 0.5 }}>
                        {donor.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#E11D48', fontWeight: 800, letterSpacing: 1.5 }}>
                        ID: {donor.id}
                    </Typography>

                    <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 3 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" fontWeight={950} sx={{ color: '#1E293B' }}>{donor.count}</Typography>
                            <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 700 }}>DONATIONS</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" fontWeight={950} sx={{ color: '#1E293B' }}>{donor.type}</Typography>
                            <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 700 }}>BLOOD TYPE</Typography>
                        </Box>
                    </Stack>
                </Box>

                {/* Info List */}
                <Stack spacing={3} sx={{ flex: 1 }}>
                    <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 800, letterSpacing: 2, mb: 1, display: 'block' }}>
                            CONTACT DETAILS
                        </Typography>
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: '#F1F5F9', color: '#64748B' }}>
                                    <LocationOnIcon fontSize="small" />
                                </Box>
                                <Typography variant="body2" fontWeight={700} sx={{ color: '#475569' }}>{donor.location}, Kerala</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: '#F1F5F9', color: '#64748B' }}>
                                    <AccessTimeIcon fontSize="small" />
                                </Box>
                                <Typography variant="body2" fontWeight={700} sx={{ color: '#475569' }}>Member Since {donor.joined}</Typography>
                            </Box>
                        </Stack>
                    </Box>

                    <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 800, letterSpacing: 2, mb: 1, display: 'block' }}>
                            MEDAL & ACHIEVEMENTS
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Box sx={{ p: 2, borderRadius: 3, bgcolor: 'white', border: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <WorkspacePremiumIcon sx={{ color: '#FFD700' }} />
                                    <Typography variant="caption" fontWeight={800} sx={{ color: '#475569' }}>Gold Donor</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ p: 2, borderRadius: 3, bgcolor: 'white', border: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <HistoryIcon sx={{ color: '#E11D48' }} />
                                    <Typography variant="caption" fontWeight={800} sx={{ color: '#475569' }}>Active</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>

                {/* Actions */}
                <Box sx={{ mt: 4 }}>
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<WhatsAppIcon />}
                            sx={{
                                borderRadius: 3,
                                py: 1.5,
                                textTransform: 'none',
                                fontWeight: 800,
                                borderColor: '#E2E8F0',
                                color: '#1E293B',
                                '&:hover': { bgcolor: '#F1F5F9', borderColor: '#CBD5E1' }
                            }}
                        >
                            WhatsApp
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<PhoneIcon />}
                            sx={{
                                borderRadius: 3,
                                py: 1.5,
                                textTransform: 'none',
                                fontWeight: 800,
                                borderColor: '#E2E8F0',
                                color: '#1E293B',
                                '&:hover': { bgcolor: '#F1F5F9', borderColor: '#CBD5E1' }
                            }}
                        >
                            Call Now
                        </Button>
                    </Stack>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            borderRadius: 1,
                            py: 1.8,
                            marginBottom:'26px',
                            textTransform: 'none',
                            fontWeight: 900,
                            bgcolor: '#E11D48',
                            boxShadow: '0 10px 20px rgba(225, 29, 72, 0.2)',
                            '&:hover': { bgcolor: '#BE123C', boxShadow: '0 15px 30px rgba(225, 29, 72, 0.3)' }
                        }}
                    >
                        Request Blood Donation
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default DonorProfileDrawer;
