import React from 'react';
import { Box, Button, InputBase, Select, MenuItem, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { bloodTypes } from './constants';

const SearchBar = () => {
    return (
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
    );
};

export default SearchBar;
