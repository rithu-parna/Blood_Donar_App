import { Box, InputBase, Button, Select, MenuItem, Stack, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, onChange, onNewRequestClick }) => {
    return (
        <Box
            sx={{
                bgcolor: 'white',
                p: 0.8,
                borderRadius: 2.5,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 1.5,
                width: '100%',
                maxWidth: '1200px',
                mx: 'auto'
            }}
        >
            <Stack direction="row" sx={{ flex: 1, width: '100%', alignItems: 'center', px: 2 }}>
                <SearchIcon sx={{ color: '#94A3B8', mr: 2, fontSize: 20 }} />
                <InputBase
                    fullWidth
                    placeholder="Search by blood type, location, hospital..."
                    value={value}
                    onChange={onChange}
                    sx={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#475569',
                    }}
                />
            </Stack>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, mx: 1 }} />

            <Box sx={{ display: 'flex', gap: 1, width: { xs: '100%', md: 'auto' }, alignItems: 'center' }}>
                <Select
                    value="All Blood Types"
                    variant="standard"
                    disableUnderline
                    sx={{
                        minWidth: 150,
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#475569',
                        bgcolor: '#F8FAFC',
                        px: 2,
                        py: 0.8,
                        borderRadius: 1.5
                    }}
                >
                    <MenuItem value="All Blood Types">All Blood Types</MenuItem>
                </Select>

                <Select
                    value="All Urgency"
                    variant="standard"
                    disableUnderline
                    sx={{
                        minWidth: 130,
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#475569',
                        bgcolor: '#F8FAFC',
                        px: 2,
                        py: 0.8,
                        borderRadius: 1.5
                    }}
                >
                    <MenuItem value="All Urgency">All Urgency</MenuItem>
                </Select>

                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 2,
                        px: 4,
                        py: 1,
                        textTransform: 'none',
                        bgcolor: '#E11D48',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        '&:hover': { bgcolor: '#BE123C' },
                        boxShadow: 'none'
                    }}
                >
                    Search
                </Button>

                <Button
                    variant="contained"
                    onClick={onNewRequestClick}
                    sx={{
                        borderRadius: 2,
                        px: 3,
                        py: 1,
                        whiteSpace: 'nowrap',
                        textTransform: 'none',
                        bgcolor: '#E11D48',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        '&:hover': { bgcolor: '#BE123C' },
                        boxShadow: 'none'
                    }}
                >
                    + New Request
                </Button>
            </Box>
        </Box>
    );
};

export default SearchBar;
