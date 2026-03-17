import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Drawer, TextField, Grid, Select, MenuItem, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedIcon from '@mui/icons-material/Verified';
import { bloodTypes } from './constants';

const DonorFormDrawer = ({ open, onClose, onAddDonor }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        location: '',
        bloodType: '',
        lastDonation: '',
        availability: 'Anywhere',
        weight: '',
        gender: 'Other',
        notes: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleBloodTypeSelect = (type) => {
        setFormData(prev => ({ ...prev, bloodType: type }));
        if (errors.bloodType) {
            setErrors(prev => ({ ...prev, bloodType: null }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.age) newErrors.age = 'Age is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.location) newErrors.location = 'Location is required';
        if (!formData.bloodType) newErrors.bloodType = 'Blood group is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;

        const newDonor = {
            id: `DON-${Math.floor(100 + Math.random() * 900)}`,
            name: formData.name,
            type: formData.bloodType,
            location: formData.location,
            count: 0,
            avatar: null,
            joined: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            ...formData
        };

        if (onAddDonor) {
            onAddDonor(newDonor);
        }

        // Reset and close
        setFormData({
            name: '',
            age: '',
            phone: '',
            location: '',
            bloodType: '',
            lastDonation: '',
            availability: 'Anywhere',
            weight: '',
            gender: 'Other',
            notes: ''
        });
        onClose();
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: { xs: '100%', sm: 550 },
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
                }
            }}
        >
            <Box sx={{ p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', height: '100%', bgcolor: '#F8FAFC' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                        <Box sx={{
                            bgcolor: '#ECFDF5',
                            p: 2,
                            borderRadius: 4,
                            boxShadow: '0 8px 16px rgba(16, 185, 129, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <HandshakeIcon sx={{ color: '#10B981', fontSize: 28 }} />
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight={900} color="#1E293B">Become a Hero</Typography>
                            <Typography variant="body2" color="#64748B" fontWeight={600}>Fill in your details to join the donor network.</Typography>
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
                    {/* PERSONAL INFORMATION */}
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="overline" fontWeight={800} color="#10B981" sx={{ letterSpacing: 2, display: 'block', mb: 3 }}>
                            Personal Information
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 12 }}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Full Name <span style={{ color: '#E11D48' }}>*</span></Typography>
                                <TextField
                                    fullWidth
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    placeholder="e.g. Rahul Sharma"
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1, bgcolor: 'white' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Age <span style={{ color: '#E11D48' }}>*</span></Typography>
                                <TextField
                                    fullWidth
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    error={!!errors.age}
                                    placeholder="18-65"
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1, bgcolor: 'white' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 8 }}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Primary Phone <span style={{ color: '#E11D48' }}>*</span></Typography>
                                <TextField
                                    fullWidth
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={!!errors.phone}
                                    placeholder="+91 XXXXXXXXXX"
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1, bgcolor: 'white' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12 }}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">City / Location <span style={{ color: '#E11D48' }}>*</span></Typography>
                                <TextField
                                    fullWidth
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    error={!!errors.location}
                                    placeholder="Kozhikode, Kerala"
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1, bgcolor: 'white' } }}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* BLOOD INFORMATION */}
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="overline" fontWeight={800} color="#E11D48" sx={{ letterSpacing: 2, display: 'block', mb: 3 }}>
                            Blood Details
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            <Typography variant="caption" fontWeight={700} color="#475569" mb={2} display="block">
                                Select Blood Group <span style={{ color: '#E11D48' }}>*</span>
                                {errors.bloodType && <span style={{ color: '#d32f2f', marginLeft: '10px' }}> - {errors.bloodType}</span>}
                            </Typography>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
                                {bloodTypes.map(type => (
                                    <Button
                                        key={type}
                                        variant={formData.bloodType === type ? "contained" : "outlined"}
                                        onClick={() => handleBloodTypeSelect(type)}
                                        sx={{
                                            aspectRatio: '1',
                                            borderRadius: 3.5,
                                            borderColor: formData.bloodType === type ? '#E11D48' : '#E2E8F0',
                                            color: formData.bloodType === type ? 'white' : '#475569',
                                            bgcolor: formData.bloodType === type ? '#E11D48' : 'white',
                                            fontWeight: 800,
                                            fontSize: '1rem',
                                            height: '79px',
                                            width: '81px',
                                            minWidth: 0,
                                            transition: 'all 0.2s',
                                            '&:hover': {
                                                borderColor: '#E11D48',
                                                bgcolor: formData.bloodType === type ? '#BE123C' : 'rgba(225, 29, 72, 0.05)',
                                                color: formData.bloodType === type ? 'white' : '#E11D48'
                                            }
                                        }}
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </Box>
                        </Box>

                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Last Donation Date</Typography>
                                <TextField
                                    fullWidth
                                    type="date"
                                    name="lastDonation"
                                    value={formData.lastDonation}
                                    onChange={handleChange}
                                    variant="outlined"
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1, bgcolor: 'white' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Availability Preference</Typography>
                                <Select
                                    fullWidth
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleChange}
                                    sx={{ borderRadius: 1, bgcolor: 'white' }}
                                >
                                    <MenuItem value="Anywhere">Any Hospital</MenuItem>
                                    <MenuItem value="Specific">Specific Radius Only</MenuItem>
                                    <MenuItem value="Emergency">Emergency Only</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* HEALTH DECLARATION */}
                    <Box>
                        <Typography variant="overline" fontWeight={800} color="#F59E0B" sx={{ letterSpacing: 2, display: 'block', mb: 3 }}>
                            Health Declaration
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Weight (kg)</Typography>
                                <TextField
                                    fullWidth
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    placeholder="Min 50kg"
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1, bgcolor: 'white' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Biological Gender</Typography>
                                <Select
                                    fullWidth
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    sx={{ borderRadius: 1, bgcolor: 'white' }}
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                    <MenuItem value="Other">Rather not say</MenuItem>
                                </Select>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12 }}>
                                <Typography variant="caption" fontWeight={700} color="#475569" mb={1} display="block">Important Health Notes</Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="Any medical conditions or medications we should know about?"
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1, bgcolor: 'white' } }}
                                />
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
                            borderRadius: 1,
                            py: 1.5,
                            '&:hover': { borderColor: '#CBD5E1', bgcolor: 'white' }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        className="glow-btn"
                        onClick={handleSubmit}
                        sx={{
                            flex: 2,
                            bgcolor: '#10B981',
                            color: 'white',
                            fontWeight: 900,
                            textTransform: 'none',
                            borderRadius: 1,
                            py: 1.5,
                            boxShadow: '0 8px 16px rgba(16, 185, 129, 0.25)',
                            '&:hover': { bgcolor: '#059669', boxShadow: '0 12px 24px rgba(16, 185, 129, 0.35)' }
                        }}
                    >
                        Create Donor Profile
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default DonorFormDrawer;
