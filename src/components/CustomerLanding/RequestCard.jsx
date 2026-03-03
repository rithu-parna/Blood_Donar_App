import React from 'react';
import { Box, Typography, Card, CardContent, IconButton, Button, Grid, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';

const RequestCard = ({ req, viewMode }) => {
    if (viewMode === 'list') {
        return (
            <Card sx={{ borderRadius: 4, display: 'flex', overflow: 'hidden', border: '1px solid #F3F4F6', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                <Box sx={{ width: 6, bgcolor: req.color }} />
                <CardContent sx={{ p: 3, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Box sx={{ width: 64, height: 64, bgcolor: '#FFF1F2', color: '#E11D48', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(225,29,72,0.1)', mb: 1 }}>
                                <Typography variant="h5" fontWeight={800}>{req.type}</Typography>
                            </Box>
                            <Typography variant="caption" fontWeight={700} color="#9CA3AF">{req.id}</Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" fontWeight={800} color="#1F2937" mb={1}>{req.hospital}</Typography>
                            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#6B7280' }}>
                                    <LocationOnIcon sx={{ fontSize: 16 }} />
                                    <Typography variant="caption" fontWeight={600}>{req.location}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#6B7280' }}>
                                    <AccessTimeIcon sx={{ fontSize: 16 }} />
                                    <Typography variant="caption" fontWeight={600}>By <Box component="span" sx={{ color: '#EF4444', fontWeight: 800 }}>Overdue</Box></Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#6B7280' }}>
                                    <PersonIcon sx={{ fontSize: 16 }} />
                                    <Typography variant="caption" fontWeight={600}>{req.reason}</Typography>
                                </Box>
                                <Box sx={{ display: 'inline-flex', alignItems: 'center', bgcolor: req.color + '15', color: req.color, px: 1.5, py: 0.5, borderRadius: 1 }}>
                                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: req.color, mr: 1 }} />
                                    <Typography variant="caption" fontWeight={800}>{req.urgency}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="caption" display="block" color="#6B7280" fontWeight={600}>Units: <Box component="span" sx={{ color: '#EF4444', fontWeight: 800 }}>{req.units}</Box></Typography>
                        <Typography variant="caption" color="#9CA3AF" fontWeight={600}>{req.bloodProduct}</Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
                            <IconButton size="small" sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}><AccessTimeIcon fontSize="small" /></IconButton>
                            <IconButton size="small" sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}><EditIcon fontSize="small" /></IconButton>
                            <Button variant="contained" sx={{ bgcolor: '#EF4444', textTransform: 'none', fontWeight: 700, borderRadius: 2, px: 3, boxShadow: 'none', '&:hover': { bgcolor: '#DC2626' } }}>Donate →</Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{ borderRadius: 4, height: '100%', border: '1px solid #F3F4F6', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', position: 'relative', pt: 0.5 }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: req.color }} />
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{ width: 64, height: 64, bgcolor: '#FFF1F2', color: '#E11D48', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(225,29,72,0.1)', mb: 1 }}>
                            <Typography variant="h5" fontWeight={800}>{req.type}</Typography>
                        </Box>
                        <Typography variant="caption" fontWeight={700} color="#9CA3AF">{req.id}</Typography>
                    </Box>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', height: 'fit-content', bgcolor: req.color + '15', color: req.color, px: 1.5, py: 0.5, borderRadius: 1 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: req.color, mr: 1 }} />
                        <Typography variant="caption" fontWeight={800}>{req.urgency}</Typography>
                    </Box>
                </Box>

                <Typography variant="h6" fontWeight={800} color="#1F2937" mb={2}>{req.hospital}</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#6B7280' }}>
                        <LocationOnIcon fontSize="small" />
                        <Typography variant="caption" fontWeight={600}>{req.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#6B7280' }}>
                        <AccessTimeIcon fontSize="small" />
                        <Typography variant="caption" fontWeight={600}>By <Box component="span" sx={{ color: '#EF4444', fontWeight: 800 }}>Overdue</Box></Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#6B7280' }}>
                        <PersonIcon fontSize="small" />
                        <Typography variant="caption" fontWeight={600}>{req.reason}</Typography>
                    </Box>
                </Box>

                <Divider sx={{ mb: 2, borderStyle: 'dashed' }} />

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="caption" display="block" color="#6B7280" fontWeight={600}>Units: <Box component="span" sx={{ color: '#EF4444', fontWeight: 800 }}>{req.units}</Box></Typography>
                        <Typography variant="caption" color="#9CA3AF" fontWeight={600}>{req.bloodProduct}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small" sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}><AccessTimeIcon fontSize="small" /></IconButton>
                        <IconButton size="small" sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}><EditIcon fontSize="small" /></IconButton>
                    </Box>
                </Box>
                <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: '#EF4444', textTransform: 'none', fontWeight: 700, borderRadius: 2, boxShadow: 'none', '&:hover': { bgcolor: '#DC2626' } }}>Donate →</Button>
            </CardContent>
        </Card>
    );
};

export default RequestCard;
