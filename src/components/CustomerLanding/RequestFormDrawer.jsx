import React, { useState } from 'react';
import {
    Box, Typography, Button, IconButton, Drawer,
    TextField, Grid, Select, MenuItem, Divider,
    Stack, InputAdornment
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmergencyIcon from '@mui/icons-material/ReportProblem';
import { bloodTypes } from './constants';

const RequestFormDrawer = ({ open, onClose }) => {
    const [selectedType, setSelectedType] = useState('O-');

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: { xs: '100%', sm: 550 },
                    borderRadius: { xs: 0, sm: '24px 0 0 24px' },
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                    overflow: 'hidden'
                }
            }}
        >
            <Box sx={{ p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', height: '100%', bgcolor: '#F8FAFC' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                        <Box sx={{
                            bgcolor: '#FFF1F2',
                            p: 2,
                            borderRadius: 4,
                            boxShadow: '0 8px 16px rgba(225, 29, 72, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <WaterDropIcon sx={{ color: '#E11D48', fontSize: 28 }} />
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight={900} color="#1E293B">New Blood Request</Typography>
                            <Typography variant="body2" color="#64748B" fontWeight={600}>Initiate an urgent requirement for the donor network.</Typography>
                        </Box>
                    </Box>
                    <IconButton
                        onClick={onClose}
                        sx={{ bgcolor: 'white', border: '1px solid #E2E8F0', borderRadius: 2.5, p: 1 }}
                    >
                        <CloseIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                </Box>

                <Box sx={{ flex: 1, overflowY: 'auto', pr: 1.5, pb: 4 }}>
                    {/* HOSPITAL & LOCATION */}
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="overline" fontWeight={800} color="#E11D48" sx={{ letterSpacing: 2, display: 'block', mb: 3 }}>
                            Facility Details
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Hospital Name <span style={{ color: '#E11D48' }}>*</span></Typography>
                                <TextField
                                    fullWidth
                                    placeholder="e.g. MIMS Hospital"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><LocalHospitalIcon sx={{ color: '#94A3B8', fontSize: 20 }} /></InputAdornment>,
                                    }}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Hospital Location / City <span style={{ color: '#E11D48' }}>*</span></Typography>
                                <TextField fullWidth placeholder="Kozhikode, Kerala" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }} />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* REQUIREMENT DETAILS */}
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="overline" fontWeight={800} color="#3B82F6" sx={{ letterSpacing: 2, display: 'block', mb: 3 }}>
                            Blood Requirement
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            <Typography variant="caption" fontWeight={700} color="#475569" mb={2} display="block">Blood Group Needed <span style={{ color: '#E11D48' }}>*</span></Typography>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1.5 }}>
                                {bloodTypes.map(type => (
                                    <Button
                                        key={type}
                                        onClick={() => setSelectedType(type)}
                                        variant={selectedType === type ? "contained" : "outlined"}
                                        sx={{
                                            aspectRatio: '1',
                                            borderRadius: 3.5,
                                            borderColor: selectedType === type ? '#E11D48' : '#E2E8F0',
                                            bgcolor: selectedType === type ? '#E11D48' : 'white',
                                            color: selectedType === type ? 'white' : '#475569',
                                            fontWeight: 800,
                                            fontSize: '1rem',
                                            minWidth: 0,
                                            transition: 'all 0.2s',
                                            '&:hover': {
                                                borderColor: '#E11D48',
                                                bgcolor: selectedType === type ? '#BE123C' : 'rgba(225, 29, 72, 0.05)',
                                                color: selectedType === type ? 'white' : '#E11D48'
                                            }
                                        }}
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </Box>
                        </Box>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Units Needed <span style={{ color: '#E11D48' }}>*</span></Typography>
                                <TextField
                                    fullWidth
                                    type="number"
                                    placeholder="e.g. 3"
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Urgency Level <span style={{ color: '#E11D48' }}>*</span></Typography>
                                <Select
                                    fullWidth
                                    defaultValue="NORMAL"
                                    sx={{ borderRadius: 3, bgcolor: 'white' }}
                                    //@ts-ignore
                                    renderValue={(value) => (
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Box sx={{
                                                width: 8, height: 8, borderRadius: '50%',
                                                bgcolor: value === 'CRITICAL' ? '#E11D48' : value === 'HIGH' ? '#F59E0B' : '#10B981'
                                            }} />
                                            <Typography variant="body2" fontWeight={700}>{value}</Typography>
                                        </Stack>
                                    )}
                                >
                                    <MenuItem value="CRITICAL">Critical (Immediate)</MenuItem>
                                    <MenuItem value="HIGH">High (Within 6 hours)</MenuItem>
                                    <MenuItem value="NORMAL">Normal (Within 24 hours)</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* PATIENT INFO */}
                    <Box>
                        <Typography variant="overline" fontWeight={800} color="#10B981" sx={{ letterSpacing: 2, display: 'block', mb: 3 }}>
                            Patient Information & Reason
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Reason for Request</Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    placeholder="e.g. Post-surgery emergency, Dialysis requirement..."
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4, bgcolor: 'white' } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Contact Person</Typography>
                                <TextField fullWidth placeholder="Attender's Name" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Contact Number</Typography>
                                <TextField fullWidth placeholder="+91 XXXXXXXXXX" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'white' } }} />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    pt: 3.5,
                    borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                    bgcolor: '#F8FAFC',
                    mt: 'auto'
                }}>
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        sx={{
                            flex: 1,
                            borderColor: '#E2E8F0',
                            color: '#64748B',
                            fontWeight: 800,
                            textTransform: 'none',
                            borderRadius: 3.5,
                            py: 1.5,
                            '&:hover': { borderColor: '#CBD5E1', bgcolor: 'white' }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            flex: 2,
                            bgcolor: '#E11D48',
                            color: 'white',
                            fontWeight: 900,
                            textTransform: 'none',
                            borderRadius: 3.5,
                            py: 1.5,
                            boxShadow: '0 8px 16px rgba(225, 29, 72, 0.25)',
                            '&:hover': { bgcolor: '#BE123C', boxShadow: '0 12px 24px rgba(225, 29, 72, 0.35)' }
                        }}
                    >
                        Publish Request
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default RequestFormDrawer;
