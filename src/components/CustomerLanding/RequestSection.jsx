import React, { useState, useMemo } from 'react';
import { Box, Typography, Button, IconButton, Grid, Select, MenuItem, Chip, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import CloseIcon from '@mui/icons-material/Close';
import BoltIcon from '@mui/icons-material/Bolt';
import SortIcon from '@mui/icons-material/Sort';
import RequestCard from './RequestCard';
import { initialRequests } from './constants';

const RequestSection = ({ selectedBloodType, searchQuery, onTypeFilterClear }) => {
    const [viewMode, setViewMode] = useState('list');
    const [filter, setFilter] = useState('All');
    const [sortBy, setSortBy] = useState('Urgency');
    const [requests] = useState(initialRequests);

    const filteredRequests = useMemo(() => {
        return requests.filter(req => {
            const matchesUrgency = filter === 'All' || req.urgency.toUpperCase() === filter.toUpperCase();
            const matchesBloodType = selectedBloodType === 'All' || req.type === selectedBloodType;
            const matchesSearch = !searchQuery ||
                req.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                req.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                req.type.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesUrgency && matchesBloodType && matchesSearch;
        });
    }, [requests, filter, selectedBloodType, searchQuery]);

    const sortedRequests = useMemo(() => {
        return [...filteredRequests].sort((a, b) => {
            if (sortBy === 'Units Needed') return b.units - a.units;
            if (sortBy === 'Urgency') {
                const priority = { 'CRITICAL': 3, 'HIGH': 2, 'NORMAL': 1 };
                return priority[b.urgency] - priority[a.urgency];
            }
            return 0;
        });
    }, [filteredRequests, sortBy]);

    return (
        <Box mb={10}>
            {/* Main Header Row */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'flex-end' },
                gap: 3,
                mb: 6,
                pb: 3,
                borderBottom: '1px solid rgba(226, 232, 240, 0.4)'
            }}>
                <Box>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                        <Box sx={{
                            p: 0.8,
                            bgcolor: 'rgba(225, 29, 72, 0.1)',
                            color: '#E11D48',
                            borderRadius: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <BoltIcon sx={{ fontSize: 24 }} />
                        </Box>
                        <Typography variant="h3" fontWeight={950} sx={{ color: '#0F172A', fontSize: { xs: '2rem', md: '2.8rem' }, letterSpacing: -1.5 }}>
                            Active <Box component="span" sx={{ color: '#E11D48' }}>Requests</Box>
                        </Typography>
                        <Chip
                            label={`${sortedRequests.length} Needs Found`}
                            size="small"
                            sx={{ bgcolor: '#F1F5F9', color: '#64748B', fontWeight: 800, borderRadius: 2, px: 1, border: '1px solid #E2E8F0' }}
                        />
                    </Stack>
                    <Typography variant="h6" color="#64748B" fontWeight={600} sx={{ opacity: 0.8 }}>
                        Live requirements from hospitals. Join and save a life today.
                    </Typography>
                </Box>

                <Stack direction="row" spacing={2} sx={{ alignSelf: { xs: 'stretch', md: 'auto' } }}>
                    <Button
                        variant="soft"
                        startIcon={<RefreshIcon />}
                        sx={{
                            bgcolor: '#F1F5F9',
                            color: '#0F172A',
                            textTransform: 'none',
                            borderRadius: 4,
                            fontWeight: 800,
                            px: 3.5,
                            py: 1.2,
                            '&:hover': { bgcolor: '#E2E8F0' }
                        }}
                    >
                        Refresh
                    </Button>

                    <Box sx={{ display: 'flex', bgcolor: '#F1F5F9', p: 0.8, borderRadius: 4 }}>
                        {[
                            { id: 'grid', icon: <GridViewIcon fontSize="small" /> },
                            { id: 'list', icon: <ViewListIcon fontSize="small" /> }
                        ].map(mode => (
                            <IconButton
                                key={mode.id}
                                onClick={() => setViewMode(mode.id)}
                                sx={{
                                    bgcolor: viewMode === mode.id ? 'white' : 'transparent',
                                    color: viewMode === mode.id ? '#E11D48' : '#94A3B8',
                                    borderRadius: 3.5,
                                    width: 42,
                                    height: 42,
                                    boxShadow: viewMode === mode.id ? '0 8px 16px rgba(0,0,0,0.06)' : 'none',
                                    '&:hover': { bgcolor: viewMode === mode.id ? 'white' : 'rgba(0,0,0,0.03)' },
                                    transition: 'all 0.3s'
                                }}
                            >
                                {mode.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Stack>
            </Box>

            {/* Filter and Sort Row */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'stretch', lg: 'center' },
                gap: 4,
                mb: 8
            }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
                    <Box sx={{
                        display: 'flex',
                        gap: 1.5,
                        bgcolor: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(10px)',
                        p: 1.5,
                        borderRadius: 6,
                        boxShadow: '0 15px 35px -10px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.5)'
                    }}>
                        {['All', 'Critical', 'High', 'Normal'].map(f => (
                            <Button
                                key={f}
                                onClick={() => setFilter(f)}
                                sx={{
                                    bgcolor: filter === f ? '#E11D48' : 'transparent',
                                    color: filter === f ? 'white' : '#64748B',
                                    borderRadius: 4.5,
                                    textTransform: 'none',
                                    px: 5,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 900,
                                    boxShadow: filter === f ? '0 12px 24px -6px rgba(225, 29, 72, 0.4)' : 'none',
                                    '&:hover': {
                                        bgcolor: filter === f ? '#BE123C' : 'rgba(255, 255, 255, 0.8)',
                                        transform: filter === f ? 'translateY(-2px)' : 'none'
                                    },
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                {f}
                            </Button>
                        ))}
                    </Box>

                    {selectedBloodType !== 'All' && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <Chip
                                label={selectedBloodType}
                                onDelete={onTypeFilterClear}
                                deleteIcon={<CloseIcon sx={{ fontSize: '1.2rem !important' }} />}
                                sx={{
                                    bgcolor: '#E11D48',
                                    color: 'white',
                                    fontWeight: 900,
                                    borderRadius: 4,
                                    fontSize: '1rem',
                                    px: 2,
                                    height: 60,
                                    boxShadow: '0 12px 24px -6px rgba(225, 29, 72, 0.3)',
                                    '& .MuiChip-deleteIcon': { color: 'white', '&:hover': { color: '#FEE2E2' } }
                                }}
                            />
                        </motion.div>
                    )}
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    bgcolor: 'white',
                    px: 4,
                    py: 2,
                    borderRadius: 6,
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    boxShadow: '0 15px 35px -10px rgba(0,0,0,0.05)'
                }}>
                    <SortIcon sx={{ color: '#E11D48', fontSize: 28 }} />
                    <Typography variant="subtitle1" color="#0F172A" fontWeight={900}>Sort By:</Typography>
                    <Select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        variant="standard"
                        disableUnderline
                        sx={{
                            minWidth: 160,
                            fontWeight: 900,
                            color: '#E11D48',
                            fontSize: '1.05rem',
                            cursor: 'pointer',
                            '& .MuiSelect-select': { py: 0 }
                        }}
                    >
                        <MenuItem value="Urgency">Immediate Need</MenuItem>
                        <MenuItem value="Units Needed">Quantity Required</MenuItem>
                    </Select>
                </Box>
            </Box>


            <Box sx={{ minHeight: 400 }}>
                <AnimatePresence mode="popLayout" initial={false}>
                    {sortedRequests.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Box sx={{
                                py: 15,
                                textAlign: 'center',
                                bgcolor: 'white',
                                borderRadius: 10,
                                border: '1px dashed #E2E8F0',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
                            }}>
                                <Typography variant="h5" color="#0F172A" fontWeight={900} mb={2}>No matching requests found.</Typography>
                                <Typography variant="body1" color="#64748B" fontWeight={600} mb={4}>Try adjusting your filters or search query.</Typography>
                                <Button
                                    onClick={() => { setFilter('All'); onTypeFilterClear(); }}
                                    variant="outlined"
                                    sx={{
                                        color: '#E11D48',
                                        borderColor: '#E11D48',
                                        fontWeight: 900,
                                        borderRadius: 4,
                                        px: 5,
                                        py: 1.5,
                                        '&:hover': { bgcolor: 'rgba(225, 29, 72, 0.05)', borderColor: '#BE123C' }
                                    }}
                                >
                                    Clear All Filters
                                </Button>
                            </Box>
                        </motion.div>
                    ) : (
                        viewMode === 'list' ? (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                {sortedRequests.map((req, idx) => (
                                    <motion.div
                                        key={req.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    >
                                        <RequestCard req={req} viewMode="list" />
                                    </motion.div>
                                ))}
                            </Box>
                        ) : (
                            <Grid container spacing={4}>
                                {sortedRequests.map((req, idx) => (
                                    <Grid item xs={12} sm={6} lg={4} key={req.id}>
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                                        >
                                            <RequestCard req={req} viewMode="grid" />
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        )
                    )}
                </AnimatePresence>
            </Box>
        </Box>
    );
};

export default RequestSection;
