import React, { useState } from 'react';
import {
    Box, Typography, Button, Container, Grid, Card, CardContent, InputBase, Select, MenuItem, IconButton, Drawer, TextField, Divider
} from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import CloseIcon from '@mui/icons-material/Close';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import EditIcon from '@mui/icons-material/Edit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HandshakeIcon from '@mui/icons-material/Handshake';

const bloodTypes = ['A+', 'B+', 'O-', 'AB+', 'B-', 'A-', 'O+', 'AB-'];

const initialRequests = [
    { id: 'REQ-001', type: "O-", hospital: "MIMS Hospital", location: "Kozhikode, Kerala", units: 3, bloodProduct: "Whole Blood", urgency: "CRITICAL", reason: "Post-surgery emergency", color: "#EF4444" },
    { id: 'REQ-004', type: "AB-", hospital: "Aster MIMS Hospital", location: "Malappuram, Kerala", units: 4, bloodProduct: "RBC", urgency: "CRITICAL", reason: "Road accident victim", color: "#EF4444" },
    { id: 'REQ-002', type: "A+", hospital: "Baby Memorial Hospital", location: "Kozhikode, Kerala", units: 2, bloodProduct: "Whole Blood", urgency: "HIGH", reason: "Planned surgery", color: "#F59E0B" },
    { id: 'REQ-003', type: "B+", hospital: "Govt. Medical College", location: "Kochi, Kerala", units: 1, bloodProduct: "Whole Blood", urgency: "NORMAL", reason: "Dialysis patient", color: "#10B981" },
];

const CustomerLanding = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [viewMode, setViewMode] = useState('list'); // Default to list view as in image
    const [filter, setFilter] = useState('All');
    const [sortBy, setSortBy] = useState('Urgency');
    const [requests] = useState(initialRequests);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

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
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#FDF8F5', fontFamily: '"Inter", sans-serif' }}>
            
            {/* Header & Hero Section */}
            <Box sx={{ bgcolor: '#1A1423', color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: { xs: 2, md: 8 }, py: 3, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <BloodtypeIcon sx={{ color: '#E11D48', fontSize: 32, mr: 1 }} />
                        <Typography variant="h6" fontWeight={800} sx={{ letterSpacing: 0.5 }}>
                            BloodLink
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
                        {['HOME', 'FIND DONOR', 'REQUESTS', 'ABOUT'].map((item) => (
                            <Typography key={item} variant="body2" sx={{ fontWeight: 600, color: '#9CA3AF', cursor: 'pointer', '&:hover': { color: 'white' }, letterSpacing: 0.5 }}>
                                {item}
                            </Typography>
                        ))}
                        <Button 
                            variant="contained" 
                            onClick={toggleDrawer(true)}
                            sx={{ bgcolor: '#E11D48', borderRadius: 1.5, px: 3, py: 1, fontWeight: 700, textTransform: 'none', '&:hover': { bgcolor: '#BE123C' } }}
                        >
                            REGISTER / REQUEST
                        </Button>
                    </Box>
                </Box>

                <Container maxWidth="xl" sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 10, md: 12 } }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Box sx={{ display: 'inline-flex', alignItems: 'center', bgcolor: '#3E1825', px: 2, py: 0.75, borderRadius: 10, mb: 4 }}>
                                <WaterDropIcon sx={{ color: '#E11D48', fontSize: 16, mr: 1 }} />
                                <Typography variant="caption" fontWeight={700} sx={{ color: '#FDA4AF', letterSpacing: 1 }}>SAVE A LIFE TODAY</Typography>
                            </Box>
                            
                            <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.1, mb: 3, maxWidth: 600 }}>
                                Connect <Box component="span" sx={{ color: '#E11D48' }}>Blood Donors</Box> with Those in Need
                            </Typography>
                            
                            <Typography variant="body1" sx={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.6, mb: 5, maxWidth: 550 }}>
                                A real-time platform that bridges the gap between blood donors and patients in critical need. Fast, reliable, and life-saving.
                            </Typography>
                            
                            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                                <Button 
                                    variant="contained" 
                                    onClick={toggleDrawer(true)}
                                    startIcon={<HandshakeIcon sx={{ color: '#FCD34D' }} />}
                                    sx={{ bgcolor: '#E11D48', px: 4, py: 1.5, borderRadius: 2, fontWeight: 700, textTransform: 'none', fontSize: '1rem', '&:hover': { bgcolor: '#BE123C' } }}
                                >
                                    Register as Donor
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    startIcon={<IntegrationInstructionsIcon />}
                                    sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white', px: 4, py: 1.5, borderRadius: 2, fontWeight: 700, textTransform: 'none', fontSize: '1rem', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' } }}
                                >
                                    Request Blood
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, pl: { md: 8 } }}>
                                {bloodTypes.map((type, i) => (
                                    <Box 
                                        key={type + i}
                                        sx={{ 
                                            aspectRatio: '1', bgcolor: '#4C1D2A', borderRadius: 3, display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(225,29,72,0.2)',
                                            position: 'relative', transition: 'all 0.3s', cursor: 'pointer',
                                            '&:hover': { transform: 'translateY(-5px)', borderColor: '#E11D48', boxShadow: '0 10px 25px rgba(225,29,72,0.2)' }
                                        }}
                                    >
                                        <Typography variant="h5" fontWeight={800} color="white">{type}</Typography>
                                        <Box sx={{ width: 4, height: 4, bgcolor: '#E11D48', borderRadius: '50%', position: 'absolute', bottom: '20%' }} />
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats Bar */}
            <Box sx={{ bgcolor: 'white', py: 4, borderBottom: '1px solid #F3F4F6' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} textAlign="center">
                        {[
                            { val: '1,248', label: 'REGISTERED DONORS' },
                            { val: '342', label: 'ACTIVE REQUESTS' },
                            { val: '896', label: 'LIVES SAVED' },
                            { val: '18', label: 'HOSPITALS PARTNERED' },
                        ].map((stat, i) => (
                            <Grid item xs={6} md={3} key={i}>
                                <Typography variant="h4" fontWeight={900} sx={{ color: '#E11D48', mb: 0.5 }}>{stat.val}</Typography>
                                <Typography variant="caption" fontWeight={700} sx={{ color: '#9CA3AF', letterSpacing: 1 }}>{stat.label}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Main Content Area */}
            <Container maxWidth="xl" sx={{ py: 8 }}>
                
                {/* Search / Filter Bar */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, bgcolor: 'white', p: 1.5, borderRadius: 3, border: '1px solid #E5E7EB', alignItems: 'center', mb: 8 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 280, px: 2 }}>
                        <SearchIcon sx={{ color: '#9CA3AF', mr: 1 }} />
                        <InputBase placeholder="Search by blood type, location, hospital..." sx={{ width: '100%', fontSize: '0.95rem' }} />
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
                    
                    <Select defaultValue="All Blood Types" size="small" variant="standard" disableUnderline sx={{ minWidth: 140, px: 2, color: '#4B5563', fontWeight: 500 }}>
                        <MenuItem value="All Blood Types">All Blood Types</MenuItem>
                        {bloodTypes.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                    </Select>
                    <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

                    <Select defaultValue="High" size="small" variant="standard" disableUnderline sx={{ minWidth: 100, px: 2, color: '#4B5563', fontWeight: 500 }}>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Critical">Critical</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Normal">Normal</MenuItem>
                    </Select>
                    
                    <Button variant="contained" sx={{ bgcolor: '#E11D48', borderRadius: 2, px: 4, py: 1.25, fontWeight: 600, textTransform: 'none', '&:hover': { bgcolor: '#BE123C' } }}>
                        Search
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: '#EF4444', borderRadius: 2, px: 3, py: 1.25, fontWeight: 600, textTransform: 'none', boxShadow: 'none', '&:hover': { bgcolor: '#DC2626', boxShadow: 'none' } }}>
                        + New Request
                    </Button>
                </Box>

                {/* Active Requests Section */}
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

                    {/* Conditional Rendering of List/Grid */}
                    {viewMode === 'list' ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {sortedRequests.map(req => (
                                <Card key={req.id} sx={{ borderRadius: 4, display: 'flex', overflow: 'hidden', border: '1px solid #F3F4F6', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
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
                            ))}
                        </Box>
                    ) : (
                        <Grid container spacing={4}>
                            {sortedRequests.map(req => (
                                <Grid item xs={12} md={6} lg={4} key={req.id}>
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
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>

                {/* Registered Donors Section */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                        <Typography variant="h4" fontWeight={900} sx={{ color: '#111827' }}>
                            Registered <Box component="span" sx={{ color: '#10B981' }}>Donors</Box>
                        </Typography>
                        <Button variant="contained" startIcon={<span>+</span>} onClick={toggleDrawer(true)} sx={{ bgcolor: '#10B981', borderRadius: 2, px: 3, py: 1, textTransform: 'none', fontWeight: 700, boxShadow: 'none', '&:hover': { bgcolor: '#059669' } }}>
                            Register Donor
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 8 }}>
                        <HandshakeIcon sx={{ fontSize: 64, color: '#FCD34D', mb: 2, opacity: 0.8 }} />
                        <Typography variant="body1" color="#6B7280" fontWeight={600}>
                            No donors yet. <Typography component="span" sx={{ color: '#10B981', fontWeight: 700, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }} onClick={toggleDrawer(true)}>Register the first one!</Typography>
                        </Typography>
                    </Box>
                </Box>
            </Container>

            {/* Right Drawer - Register as Donor Form */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} PaperProps={{ sx: { width: { xs: '100%', sm: 500 } } }}>
                <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ bgcolor: '#ECFDF5', p: 1.5, borderRadius: 2 }}>
                                <HandshakeIcon sx={{ color: '#FCD34D', fontSize: 24 }} />
                            </Box>
                            <Box>
                                <Typography variant="h6" fontWeight={800} color="#111827">Register as Donor</Typography>
                                <Typography variant="body2" color="#64748B">Join the network and save lives</Typography>
                            </Box>
                        </Box>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', borderBottom: '1px solid #E5E7EB', mb: 4 }}>
                        <Typography sx={{ pb: 1.5, px: 2, borderBottom: '2px solid #10B981', color: '#10B981', fontWeight: 600, fontSize: '0.9rem', width: '50%', textAlign: 'center', cursor: 'pointer' }}>
                            <ViewListIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} /> Field by Field
                        </Typography>
                        <Typography sx={{ pb: 1.5, px: 2, color: '#9CA3AF', fontWeight: 600, fontSize: '0.9rem', width: '50%', textAlign: 'center', cursor: 'pointer' }}>
                            ⚡ Quick Paste
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, overflowY: 'auto', pr: 1 }}>
                        {/* PERSONAL INFORMATION */}
                        <Typography variant="caption" fontWeight={700} color="#10B981" sx={{ letterSpacing: 1, display: 'flex', alignItems: 'center', mb: 3 }}>
                            PERSONAL INFORMATION <Box sx={{ flex: 1, height: 1, bgcolor: '#E5E7EB', ml: 2 }} />
                        </Typography>
                        
                        <Grid container spacing={3} mb={4}>
                            <Grid item xs={6}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Full Name <span style={{ color: '#EF4444' }}>*</span></Typography>
                                <TextField fullWidth size="small" placeholder="Arjun Menon" InputProps={{ sx: { borderRadius: 2 } }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Age <span style={{ color: '#EF4444' }}>*</span></Typography>
                                <TextField fullWidth size="small" placeholder="18-65" InputProps={{ sx: { borderRadius: 2 } }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Phone <span style={{ color: '#EF4444' }}>*</span></Typography>
                                <TextField fullWidth size="small" placeholder="+91 XXXXXXXXXX" InputProps={{ sx: { borderRadius: 2 } }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Email</Typography>
                                <TextField fullWidth size="small" placeholder="you@email.com" InputProps={{ sx: { borderRadius: 2 } }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">City / Location <span style={{ color: '#EF4444' }}>*</span></Typography>
                                <TextField fullWidth size="small" placeholder="Kozhikode, Kerala" InputProps={{ sx: { borderRadius: 2 } }} />
                            </Grid>
                        </Grid>

                        {/* BLOOD INFORMATION */}
                        <Typography variant="caption" fontWeight={700} color="#10B981" sx={{ letterSpacing: 1, display: 'flex', alignItems: 'center', mb: 3 }}>
                            BLOOD INFORMATION <Box sx={{ flex: 1, height: 1, bgcolor: '#E5E7EB', ml: 2 }} />
                        </Typography>
                        
                        <Box mb={4}>
                            <Typography variant="caption" fontWeight={600} color="#374151" mb={2} display="block">Blood Group <span style={{ color: '#EF4444' }}>*</span></Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                                {bloodTypes.map(type => (
                                    <Button key={type} variant="outlined" sx={{ minWidth: { xs: 40, sm: 48 }, height: 40, borderRadius: 2, borderColor: '#E5E7EB', color: '#6B7280', fontWeight: 600 }}>{type}</Button>
                                ))}
                            </Box>
                            
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Last Donated</Typography>
                                    <TextField fullWidth size="small" type="date" InputProps={{ sx: { borderRadius: 2 } }} InputLabelProps={{ shrink: true }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Available At</Typography>
                                    <Select fullWidth size="small" defaultValue="Any hospital" sx={{ borderRadius: 2 }}>
                                        <MenuItem value="Any hospital">Any hospital</MenuItem>
                                        <MenuItem value="Selected">Selected only</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </Box>

                        {/* HEALTH DETAILS */}
                        <Typography variant="caption" fontWeight={700} color="#10B981" sx={{ letterSpacing: 1, display: 'flex', alignItems: 'center', mb: 3 }}>
                            HEALTH DETAILS <Box sx={{ flex: 1, height: 1, bgcolor: '#E5E7EB', ml: 2 }} />
                        </Typography>
                        
                        <Grid container spacing={3} mb={4}>
                            <Grid item xs={6}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Weight (kg)</Typography>
                                <TextField fullWidth size="small" placeholder="≥ 50 kg" InputProps={{ sx: { borderRadius: 2 } }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Gender</Typography>
                                <Select fullWidth size="small" defaultValue="Male" sx={{ borderRadius: 2 }}>
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="caption" fontWeight={600} color="#374151" mb={1} display="block">Medical Conditions (If any)</Typography>
                                <TextField fullWidth size="small" multiline rows={2} placeholder="Leave blank if none.." InputProps={{ sx: { borderRadius: 2 } }} />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, pt: 3, borderTop: '1px solid #E5E7EB', mt: 'auto' }}>
                        <Button variant="outlined" onClick={toggleDrawer(false)} sx={{ flex: 1, borderColor: '#E5E7EB', color: '#6B7280', fontWeight: 600, textTransform: 'none', borderRadius: 2 }}>Cancel</Button>
                        <Button variant="contained" sx={{ flex: 2, bgcolor: '#10B981', color: 'white', fontWeight: 600, textTransform: 'none', borderRadius: 2, boxShadow: 'none', '&:hover': { bgcolor: '#059669', boxShadow: 'none' } }}>
                            ✓ Save Donor Profile
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
};

export default CustomerLanding;
