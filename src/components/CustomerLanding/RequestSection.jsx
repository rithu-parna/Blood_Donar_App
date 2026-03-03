import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Grid, Select, MenuItem } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import RequestCard from './RequestCard';
import { initialRequests } from './constants';

const RequestSection = () => {
    const [viewMode, setViewMode] = useState('list');
    const [filter, setFilter] = useState('All');
    const [sortBy, setSortBy] = useState('Urgency');
    const [requests] = useState(initialRequests);

    const filteredRequests = requests.filter(req => {
        if (filter === 'All') return true;
        return req.urgency.toUpperCase() === filter.toUpperCase();
    });

    const sortedRequests = [...filteredRequests].sort((a, b) => {
        if (sortBy === 'Units Needed') return b.units - a.units;
        if (sortBy === 'Urgency') {
            const priority = { 'CRITICAL': 3, 'HIGH': 2, 'NORMAL': 1 };
            return priority[b.urgency] - priority[a.urgency];
        }
        return 0;
    });

    return (
        <Box mb={8}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h4" fontWeight={900} sx={{ color: '#111827' }}>
                        Active <Box component="span" sx={{ color: '#E11D48' }}>Requests</Box>
                    </Typography>
                    <Box sx={{ bgcolor: '#F1F5F9', px: 1.5, py: 0.5, borderRadius: 2, color: '#64748B', fontSize: '0.8rem', fontWeight: 600 }}>{sortedRequests.length} results</Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="outlined" startIcon={<RefreshIcon />} sx={{ bgcolor: 'white', borderColor: '#E5E7EB', color: '#4B5563', textTransform: 'none', borderRadius: 2, fontWeight: 600 }}>Refresh</Button>
                    <IconButton
                        onClick={() => setViewMode('grid')}
                        sx={{ bgcolor: viewMode === 'grid' ? '#E11D48' : 'white', color: viewMode === 'grid' ? 'white' : '#9CA3AF', borderRadius: 2, border: '1px solid #E5E7EB', '&:hover': { bgcolor: viewMode === 'grid' ? '#BE123C' : '#F9FAFB' } }}
                    >
                        <GridViewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        onClick={() => setViewMode('list')}
                        sx={{ bgcolor: viewMode === 'list' ? '#E11D48' : 'white', color: viewMode === 'list' ? 'white' : '#9CA3AF', borderRadius: 2, border: '1px solid #E5E7EB', '&:hover': { bgcolor: viewMode === 'list' ? '#BE123C' : '#F9FAFB' } }}
                    >
                        <ViewListIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Box sx={{ display: 'flex', gap: 1, bgcolor: 'white', p: 0.5, borderRadius: 2, border: '1px solid #E5E7EB' }}>
                    {['All', 'Critical', 'High', 'Normal'].map(f => (
                        <Button
                            key={f}
                            onClick={() => setFilter(f)}
                            sx={{
                                bgcolor: filter === f ? '#EF4444' : 'transparent',
                                color: filter === f ? 'white' : '#4B5563',
                                borderRadius: 1.5, textTransform: 'none', px: 3, fontWeight: filter === f ? 600 : 500,
                                '&:hover': { bgcolor: filter === f ? '#DC2626' : '#F9FAFB' }
                            }}
                            startIcon={f !== 'All' ? <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: f === 'Critical' ? '#EF4444' : f === 'High' ? '#F59E0B' : '#10B981' }} /> : null}
                        >
                            {f}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" color="#6B7280" fontWeight={600}>Sort by:</Typography>
                    <Select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        size="small"
                        sx={{ bgcolor: 'white', borderRadius: 2, '.MuiOutlinedInput-notchedOutline': { borderColor: '#E5E7EB' }, px: 1, fontWeight: 600, color: '#374151' }}
                    >
                        <MenuItem value="Urgency">Urgency</MenuItem>
                        <MenuItem value="Units Needed">Units Needed</MenuItem>
                    </Select>
                </Box>
            </Box>

            {viewMode === 'list' ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {sortedRequests.map(req => (
                        <RequestCard key={req.id} req={req} viewMode="list" />
                    ))}
                </Box>
            ) : (
                <Grid container spacing={4}>
                    {sortedRequests.map(req => (
                        <Grid item xs={12} md={6} lg={4} key={req.id}>
                            <RequestCard req={req} viewMode="grid" />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default RequestSection;
