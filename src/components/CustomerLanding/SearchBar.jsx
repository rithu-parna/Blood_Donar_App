import React from 'react';
import { Box, InputBase, Button, InputAdornment, Tooltip, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const SearchBar = ({ value, onChange }) => {
    return (
        <Box
            sx={{
                bgcolor: 'white',
                p: { xs: 1.5, md: 2 },
                borderRadius: 7,
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.08)',
                border: '1px solid rgba(226, 232, 240, 0.6)',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 2,
                mb: 8,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:focus-within': {
                    borderColor: 'rgba(225, 29, 72, 0.2)',
                    boxShadow: '0 25px 50px -15px rgba(225, 29, 72, 0.12)',
                    transform: 'translateY(-2px)'
                }
            }}
        >
            <Stack direction="row" sx={{ flex: 1, width: '100%', gap: 1.5, alignItems: 'center' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flex: 1,
                    bgcolor: '#F8FAFC',
                    borderRadius: 5,
                    px: 3,
                    py: 1.8,
                    width: '100%',
                    border: '1px solid #F1F5F9',
                    transition: 'all 0.3s',
                    '&:hover': { bgcolor: '#F1F5F9' }
                }}>
                    <SearchIcon sx={{ color: '#E11D48', mr: 2, fontSize: 24 }} />
                    <InputBase
                        fullWidth
                        placeholder="Search by hospital, location, or blood type..."
                        value={value}
                        onChange={onChange}
                        sx={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: '#0F172A',
                            '&::placeholder': { color: '#94A3B8', opacity: 1 }
                        }}
                    />
                </Box>
            </Stack>

            <Box sx={{ display: 'flex', gap: 1.5, width: { xs: '100%', md: 'auto' } }}>
                <Tooltip title="Advanced Filters">
                    <Button
                        variant="outlined"
                        startIcon={<TuneIcon />}
                        sx={{
                            borderRadius: 4.5,
                            px: 3.5,
                            py: 1.5,
                            textTransform: 'none',
                            borderColor: '#E2E8F0',
                            color: '#475569',
                            fontWeight: 800,
                            flexShrink: 0,
                            '&:hover': { borderColor: '#CBD5E1', bgcolor: '#F8FAFC' }
                        }}
                    >
                        Filters
                    </Button>
                </Tooltip>

                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 4.5,
                        px: 5,
                        py: 1.5,
                        textTransform: 'none',
                        bgcolor: '#E11D48',
                        fontWeight: 900,
                        fontSize: '1rem',
                        flexGrow: { xs: 1, md: 0 },
                        boxShadow: '0 12px 24px rgba(225, 29, 72, 0.3)',
                        '&:hover': { bgcolor: '#BE123C', boxShadow: '0 15px 30px rgba(225, 29, 72, 0.4)', transform: 'scale(1.02)' },
                        transition: 'all 0.3s'
                    }}
                >
                    Find Results
                </Button>
            </Box>
        </Box>
    );
};

export default SearchBar;
