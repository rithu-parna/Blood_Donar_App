import React from 'react';
import { Box, Typography, Card, CardContent, IconButton, Button, Divider, Tooltip, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RequestCard = ({ req, viewMode }) => {
    const isCritical = req.urgency === 'CRITICAL';

    if (viewMode === 'list') {
        return (
            <Card
                className="premium-card"
                sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid rgba(226, 232, 240, 0.6)',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.03)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px -12px rgba(0,0,0,0.08)',
                        borderColor: req.color + '40'
                    }
                }}
            >
                <Box sx={{ width: 6, position: 'absolute', top: 0, bottom: 0, left: 0, bgcolor: req.color }} />
                <CardContent sx={{ p: { xs: 3, md: 3 }, pl: { xs: 4, md: 5 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        {/* Blood Type Box */}
                        <Box sx={{ textAlign: 'center' }}>
                            <Box sx={{
                                width: 70,
                                height: 70,
                                bgcolor: req.color + '08',
                                color: req.color,
                                borderRadius: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: `2px solid ${req.color}15`,
                                mb: 1
                            }}>
                                <Typography variant="h3" fontWeight={900} sx={{ fontSize: '1.8rem' }}>{req.type}</Typography>
                            </Box>
                            <Typography variant="caption" fontWeight={800} color="#94A3B8" sx={{ fontSize: '0.65rem', letterSpacing: 1 }}>{req.id}</Typography>
                        </Box>

                        <Box>
                            <Typography variant="h5" fontWeight={900} color="#0F172A" sx={{ mb: 1.5, fontSize: '1.3rem' }}>{req.hospital}</Typography>

                            <Stack direction="row" spacing={3} alignItems="center">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#64748B' }}>
                                    <LocationOnIcon sx={{ fontSize: 16, color: '#94A3B8' }} />
                                    <Typography variant="caption" fontWeight={700}>{req.location}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#64748B' }}>
                                    <AccessTimeIcon sx={{ fontSize: 16, color: '#94A3B8' }} />
                                    <Typography variant="caption" fontWeight={700}>Overdue</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#64748B' }}>
                                    <PersonIcon sx={{ fontSize: 16, color: '#94A3B8' }} />
                                    <Typography variant="caption" fontWeight={700}>{req.reason || 'Post-surgery emergency'}</Typography>
                                </Box>
                                <Box sx={{
                                    bgcolor: isCritical ? '#FEF2F2' : '#F0F9FF',
                                    color: isCritical ? '#E11D48' : '#0EA5E9',
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    border: `1px solid ${isCritical ? '#FEE2E2' : '#E0F2FE'}`
                                }}>
                                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'currentColor' }} />
                                    <Typography variant="caption" fontWeight={900} sx={{ fontSize: '0.65rem', letterSpacing: 0.5 }}>{req.urgency}</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="caption" color="#64748B" fontWeight={700}>Units: <Box component="span" sx={{ color: '#E11D48', fontWeight: 900, fontSize: '1rem' }}>{req.units}</Box></Typography>
                            <Typography variant="caption" display="block" color="#94A3B8" fontWeight={700} sx={{ fontSize: '0.65rem' }}>{req.bloodProduct || 'Whole Blood'}</Typography>
                        </Box>

                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <IconButton size="small" sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', p: 1 }}>
                                <HistoryIcon sx={{ fontSize: 18, color: '#64748B' }} />
                            </IconButton>
                            <IconButton size="small" sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', p: 1 }}>
                                <ShareIcon sx={{ fontSize: 18, color: '#64748B' }} />
                            </IconButton>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#E11D48',
                                    textTransform: 'none',
                                    fontWeight: 800,
                                    borderRadius: 2.5,
                                    px: 3,
                                    py: 1,
                                    fontSize: '0.85rem',
                                    boxShadow: 'none',
                                    '&:hover': { bgcolor: '#BE123C', boxShadow: '0 8px 16px rgba(225, 29, 72, 0.2)' }
                                }}
                            >
                                Donate →
                            </Button>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        );
    }

    // Grid View
    return (
        <Card
            className="premium-card"
            sx={{
                height: '100%',
                position: 'relative',
                border: '1px solid rgba(226, 232, 240, 0.6)',
                borderRadius: 4,
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.03)',
                transition: 'all 0.4s',
                '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px -12px rgba(0,0,0,0.1)'
                }
            }}
        >
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: req.color }} />
            <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            width: 60,
                            height: 60,
                            bgcolor: req.color + '08',
                            color: req.color,
                            borderRadius: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${req.color}15`,
                            mb: 1
                        }}>
                            <Typography variant="h4" fontWeight={900}>{req.type}</Typography>
                        </Box>
                        <Typography variant="caption" fontWeight={700} color="#94A3B8" sx={{ fontSize: '0.65rem' }}>{req.id}</Typography>
                    </Box>
                    <Box sx={{
                        bgcolor: isCritical ? '#FEF2F2' : '#F0F9FF',
                        color: isCritical ? '#E11D48' : '#0EA5E9',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        border: `1px solid ${isCritical ? '#FEE2E2' : '#E0F2FE'}`
                    }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'currentColor' }} />
                        <Typography variant="caption" fontWeight={900} sx={{ fontSize: '0.65rem', letterSpacing: 0.5 }}>{req.urgency}</Typography>
                    </Box>
                </Box>

                <Typography variant="h6" fontWeight={900} color="#0F172A" sx={{ mb: 3, fontSize: '1.2rem', minHeight: '3.6rem', lineHeight: 1.3 }}>
                    {req.hospital}
                </Typography>

                <Stack spacing={2} sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#64748B' }}>
                        <LocationOnIcon sx={{ fontSize: 18, color: '#94A3B8' }} />
                        <Typography variant="body2" fontWeight={700}>{req.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#64748B' }}>
                        <AccessTimeIcon sx={{ fontSize: 18, color: '#94A3B8' }} />
                        <Typography variant="body2" fontWeight={700}>Overdue</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#64748B' }}>
                        <PersonIcon sx={{ fontSize: 18, color: '#94A3B8' }} />
                        <Typography variant="body2" fontWeight={700} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{req.reason || 'Road accident victim'}</Typography>
                    </Box>
                </Stack>

                <Divider sx={{ mb: 3, borderColor: 'rgba(226, 232, 240, 0.6)' }} />

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="caption" color="#64748B" fontWeight={700} sx={{ fontSize: '0.7rem' }}>Units: <Box component="span" sx={{ color: '#E11D48', fontWeight: 900 }}>{req.units}</Box></Typography>
                        <Typography variant="caption" display="block" color="#94A3B8" fontWeight={700} sx={{ fontSize: '0.6rem' }}>{req.bloodProduct || 'Whole Blood'}</Typography>
                    </Box>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <IconButton size="small" sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                            <HistoryIcon sx={{ fontSize: 16, color: '#64748B' }} />
                        </IconButton>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#E11D48',
                                textTransform: 'none',
                                fontWeight: 800,
                                borderRadius: 2,
                                px: 2,
                                py: 0.8,
                                fontSize: '0.75rem',
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#BE123C' }
                            }}
                        >
                            Donate →
                        </Button>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
};

export default RequestCard;
