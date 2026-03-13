import React from 'react';
import { Box, Typography, Card, CardContent, IconButton, Button, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import ArticleIcon from '@mui/icons-material/Article';

const RequestCard = ({ req, viewMode }) => {
    const isCritical = req.urgency === 'CRITICAL';

    const BloodBox = () => (
        <Box sx={{
            width: 70,
            height: 70,
            bgcolor: '#FFF1F2',
            color: '#E11D48',
            borderRadius: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(225, 29, 72, 0.08)',
            flexShrink: 0
        }}>
            <Typography variant="h4" fontWeight={900}>{req.type}</Typography>
        </Box>
    );

    const InfoLine = ({ icon, text, boldText }) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#64748B' }}>
            {icon}
            <Typography variant="body2" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                {text && <span>{text}</span>}
                {boldText && <span style={{ fontWeight: 800, color: '#1E293B', marginLeft: '4px' }}>{boldText}</span>}
            </Typography>
        </Box>
    );

    const Actions = () => (
        <Stack direction="row" spacing={1} alignItems="center">
            <IconButton size="small" sx={{ border: '1px solid #E2E8F0', borderRadius: 1.5, p: 0.8 }}>
                <HistoryIcon sx={{ fontSize: 18, color: '#94A3B8' }} />
            </IconButton>
            <IconButton size="small" sx={{ border: '1px solid #E2E8F0', borderRadius: 1.5, p: 0.8 }}>
                <ArticleIcon sx={{ fontSize: 18, color: '#94A3B8' }} />
            </IconButton>
            <Button
                variant="contained"
                sx={{
                    bgcolor: '#E11D48',
                    textTransform: 'none',
                    fontWeight: 700,
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    fontSize: '0.9rem',
                    '&:hover': { bgcolor: '#BE123C' },
                    boxShadow: 'none'
                }}
            >
                Donate →
            </Button>
        </Stack>
    );

    if (viewMode === 'list') {
        return (
            <Card sx={{
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'visible',
                '&:hover': { boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }
            }}>
                <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 4, bgcolor: '#E11D48', borderRadius: '3px 0 0 3px' }} />
                <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <BloodBox />
                            <Typography variant="caption" sx={{ color: '#E11D48', fontWeight: 800, mt: 1, display: 'block' }}>{req.id}</Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" fontWeight={800} sx={{ mb: 1.5, color: '#1E293B' }}>{req.hospital}</Typography>
                            <Stack direction="row" spacing={3}>
                                <InfoLine icon={<LocationOnIcon sx={{ fontSize: 18, color: '#EF4444' }} />} text={req.location} />
                                <InfoLine icon={<AccessTimeIcon sx={{ fontSize: 18, color: '#EF4444' }} />} text="By" boldText="Overdue" />
                                <InfoLine icon={<PersonIcon sx={{ fontSize: 18, color: '#EF4444' }} />} text={req.reason || "Post-surgery emergency"} />
                                <Box sx={{
                                    bgcolor: '#FFF1F2',
                                    color: '#E11D48',
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: 5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}>
                                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#E11D48' }} />
                                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 0.5 }}>{req.urgency}</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: '#1E293B' }}>Units: <span style={{ color: '#E11D48' }}>{req.units}</span></Typography>
                            <Typography variant="caption" color="text.secondary" fontWeight={600}>Whole Blood</Typography>
                        </Box>
                        <Actions />
                    </Box>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            height: '100%',
            '&:hover': { boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }
        }}>
            <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <BloodBox />
                    <Box sx={{ textAlign: 'right' }}>
                        <Box sx={{
                            bgcolor: '#FFF1F2',
                            color: '#E11D48',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 1
                        }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#E11D48' }} />
                            <Typography variant="caption" fontWeight={900}>{req.urgency}</Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary" fontWeight={800}>{req.id}</Typography>
                    </Box>
                </Box>

                <Typography variant="h6" fontWeight={800} sx={{ mb: 2, color: '#1E293B', minHeight: '3rem', lineHeight: 1.3 }}>{req.hospital}</Typography>

                <Stack spacing={1.5} sx={{ mb: 3 }}>
                    <InfoLine icon={<LocationOnIcon sx={{ fontSize: 18, color: '#EF4444' }} />} text={req.location} />
                    <InfoLine icon={<AccessTimeIcon sx={{ fontSize: 18, color: '#EF4444' }} />} text="By" boldText="Overdue" />
                    <InfoLine icon={<PersonIcon sx={{ fontSize: 18, color: '#EF4444' }} />} text={req.reason || "Post-surgery emergency"} />
                </Stack>

                <Box sx={{ pt: 2, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="body2" sx={{ fontWeight: 800, color: '#1E293B' }}>Units: <span style={{ color: '#E11D48' }}>{req.units}</span></Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={600}>Whole Blood</Typography>
                    </Box>
                    <Actions />
                </Box>
            </CardContent>
        </Card>
    );
};

export default RequestCard;
