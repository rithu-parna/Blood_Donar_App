import React from 'react';
import { Box, Typography, Card, CardContent, IconButton, Button, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import ArticleIcon from '@mui/icons-material/Article';

const RequestCard = ({ req, viewMode }) => {
    const urgency = req.urgency?.toUpperCase() || 'NORMAL';

    const colors = {
        CRITICAL: { main: '#E11D48', bg: '#FFF1F2', hover: '#BE123C' },
        HIGH: { main: '#F59E0B', bg: '#FFFBEB', hover: '#D97706' },
        NORMAL: { main: '#10B981', bg: '#F0FDF4', hover: '#059669' },
        DEFAULT: { main: '#64748B', bg: '#F8FAFC', hover: '#475569' }
    };

    const colorSet = colors[urgency] || colors.DEFAULT;

    const BloodBox = () => (
        <Box sx={{
            width: 70,
            height: 70,
            bgcolor: colorSet.bg,
            color: colorSet.main,
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 20px ${colorSet.main}15`,
            transition: 'all 0.5s ease',
            '&:hover': {
                borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
                transform: 'rotate(5deg) scale(1.05)'
            }
        }}>
            <Typography variant="h4" fontWeight={900}>{req.type}</Typography>
        </Box>
    );

    const InfoLine = ({ icon, text, boldText }) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#64748B' }}>
            {React.cloneElement(icon, { sx: { ...icon.props.sx, color: colorSet.main } })}
            <Typography variant="body2" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>
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
                    bgcolor: colorSet.main,
                    textTransform: 'none',
                    fontWeight: 800,
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    fontSize: '0.9rem',
                    '&:hover': { bgcolor: colorSet.hover },
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
                borderRadius: '24px', // More premium large radius
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #F1F5F9',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    boxShadow: `0 20px 40px -10px ${colorSet.main}26`,
                    transform: 'translateX(4px)',
                    borderColor: colorSet.main + '40',
                    '& .side-curve': {
                        height: '100%',
                        top: 0,
                        width: 8,
                        borderRadius: '0 4px 4px 0'
                    }
                }
            }}>
                {/* Dynamic Curved Indicator */}
                <Box
                    className="side-curve"
                    sx={{
                        position: 'absolute',
                        top: '20%',
                        left: 0,
                        width: 4,
                        height: '60%',
                        bgcolor: colorSet.main,
                        borderRadius: '0 100px 100px 0',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        zIndex: 10
                    }}
                />

                <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <BloodBox />
                            <Typography variant="caption" sx={{ color: colorSet.main, fontWeight: 800, mt: 1, display: 'block', letterSpacing: 1 }}>{req.id}</Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" fontWeight={900} sx={{ mb: 1.5, color: '#0F172A', letterSpacing: -0.5 }}>{req.hospital}</Typography>
                            <Stack direction="row" spacing={3}>
                                <InfoLine icon={<LocationOnIcon sx={{ fontSize: 18 }} />} text={req.location} />
                                <InfoLine icon={<AccessTimeIcon sx={{ fontSize: 18 }} />} text="By" boldText="Overdue" />
                                <InfoLine icon={<PersonIcon sx={{ fontSize: 18 }} />} text={req.reason || "Post-surgery emergency"} />
                                <Box sx={{
                                    bgcolor: colorSet.bg,
                                    color: colorSet.main,
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    border: `1px solid ${colorSet.main}20`
                                }}>
                                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: colorSet.main }} />
                                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 0.5 }}>{urgency}</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: '#1E293B' }}>Units: <span style={{ color: colorSet.main }}>{req.units}</span></Typography>
                            <Typography variant="caption" color="text.secondary" fontWeight={700}>Whole Blood</Typography>
                        </Box>
                        <Actions />
                    </Box>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{
            borderRadius: 5,
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            height: '100%',
            overflow: 'hidden',
            border: '2px solid transparent',
            bgcolor: 'white',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            '&:hover': {
                boxShadow: `0 30px 60px -15px ${colorSet.main}26`,
                transform: 'translateY(-12px)',
                borderColor: colorSet.main + '20',
                '& .top-indicator': {
                    height: 12,
                    borderRadius: '0 0 20px 20px' // Curved indicator on hover
                }
            }
        }}>
            {/* Curved Top Indicator */}
            <Box className="top-indicator" sx={{
                position: 'absolute', top: 0, left: '15%', right: '15%', height: 0,
                bgcolor: colorSet.main, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 1,
                borderRadius: '0 0 100px 100px'
            }} />

            <CardContent sx={{ p: 4, position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <Box sx={{
                        width: 70,
                        height: 70,
                        bgcolor: colorSet.bg,
                        color: colorSet.main,
                        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%', // Organic curve
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 20px ${colorSet.main}15`,
                        flexShrink: 0
                    }}>
                        <Typography variant="h4" fontWeight={900}>{req.type}</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                        <Box sx={{
                            bgcolor: colorSet.bg,
                            color: colorSet.main,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 1
                        }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: colorSet.main }} />
                            <Typography variant="caption" fontWeight={900}>{urgency}</Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary" fontWeight={800}>{req.id}</Typography>
                    </Box>
                </Box>

                <Typography variant="h6" fontWeight={900} sx={{ mb: 2.5, color: '#0F172A', minHeight: '3.5rem', lineHeight: 1.3 }}>{req.hospital}</Typography>

                <Stack spacing={2} sx={{ mb: 4 }}>
                    <InfoLine icon={<LocationOnIcon sx={{ fontSize: 18 }} />} text={req.location} />
                    <InfoLine icon={<AccessTimeIcon sx={{ fontSize: 18 }} />} text="By" boldText="Overdue" />
                    <InfoLine icon={<PersonIcon sx={{ fontSize: 18 }} />} text={req.reason || "Post-surgery emergency"} />
                </Stack>

                <Box sx={{ pt: 3, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <Box>
                        <Stack direction="row" spacing={0.5} alignItems="baseline">
                            <Typography variant="h5" fontWeight={950} color="#0F172A">{req.units}</Typography>
                            <Typography variant="caption" fontWeight={900} color="#E11D48">UNITS</Typography>
                        </Stack>
                        <Typography variant="caption" color="text.secondary" fontWeight={700}>Whole Blood</Typography>
                    </Box>
                    <Actions />
                </Box>
            </CardContent>
        </Card>
    );
};

export default RequestCard;
