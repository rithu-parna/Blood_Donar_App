import React, { useState } from 'react';
import {
    Box, Typography, Paper, Grid, Card, CardActionArea,
    Avatar, Button, Divider, List, ListItem, ListItemAvatar,
    ListItemText, Radio, RadioGroup, FormControlLabel
} from '@mui/material';
import { motion } from 'framer-motion';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import TranslateIcon from '@mui/icons-material/Translate';

const languages = [
    { code: 'en', name: 'English', native: 'English', flag: '🇺🇸', region: 'Global' },
    { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸', region: 'Europe/LatAm' },
    { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷', region: 'Europe' },
    { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪', region: 'Europe' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', region: 'Asia' },
    { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦', region: 'Middle East' },
    { code: 'zh', name: 'Chinese', native: '中文', flag: '🇨🇳', region: 'Asia' },
    { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇵🇹', region: 'Europe/Brazil' },
];

const LanguageView = () => {
    const [selected, setSelected] = useState('en');

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontSize: 28, fontWeight: 900, color: '#0f172a', letterSpacing: -1 }}>Language & Localization</Typography>
                <Typography sx={{ fontSize: 14, color: '#64748b', fontWeight: 600 }}>Choose your preferred interface language</Typography>
            </Box>

            <Grid container spacing={4}>
                {/* Active Selection Info */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 4, borderRadius: 6, border: '1px solid #e2e8f0', bgcolor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)' }}>
                        <Box sx={{ p: 3, bgcolor: '#f1f5f9', borderRadius: 4, mb: 4, textAlign: 'center' }}>
                            <Box sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: '#0f172a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2, fontSize: 32 }}>
                                {languages.find(l => l.code === selected)?.flag}
                            </Box>
                            <Typography sx={{ fontWeight: 800, fontSize: 20 }}>{languages.find(l => l.code === selected)?.name}</Typography>
                            <Typography sx={{ fontSize: 12, color: '#64748b', fontWeight: 700 }}>Currently Active Interface</Typography>
                        </Box>

                        <Typography sx={{ fontSize: 14, fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TranslateIcon fontSize="small" color="primary" /> Auto-translation
                        </Typography>
                        <Typography sx={{ fontSize: 13, color: '#64748b', mb: 3 }}>
                            The dashboard supports dynamic localization. Some custom fields might remain in their original language.
                        </Typography>
                        <Button fullWidth variant="contained" sx={{ bgcolor: '#dc2626', borderRadius: 100, textTransform: 'none', fontWeight: 800, py: 1.2, '&:hover': { bgcolor: '#b91c1c' } }}>
                            Apply Changes
                        </Button>
                    </Paper>
                </Grid>

                {/* Language Grid */}
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        {languages.map((lang) => (
                            <Grid item xs={12} sm={6} key={lang.code}>
                                <Card
                                    sx={{
                                        borderRadius: 4,
                                        border: '2px solid',
                                        borderColor: selected === lang.code ? '#dc2626' : '#e2e8f0',
                                        boxShadow: selected === lang.code ? '0 10px 30px rgba(220,38,36,0.1)' : 'none',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    <CardActionArea onClick={() => setSelected(lang.code)} sx={{ p: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar sx={{ bgcolor: '#f8fafc', fontSize: 24, boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>{lang.flag}</Avatar>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography sx={{ fontWeight: 800, fontSize: 15, color: '#0f172a' }}>{lang.name}</Typography>
                                                <Typography sx={{ fontSize: 11, color: '#94a3b8', fontWeight: 600 }}>{lang.native} • {lang.region}</Typography>
                                            </Box>
                                            <Radio checked={selected === lang.code} size="small" sx={{ color: '#dc2626', '&.Mui-checked': { color: '#dc2626' } }} />
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ mt: 5, p: 3, borderRadius: 6, bgcolor: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <PublicIcon sx={{ fontSize: 40, color: '#94a3b8' }} />
                        <Box>
                            <Typography sx={{ fontWeight: 800, fontSize: 15 }}>Missing your language?</Typography>
                            <Typography sx={{ fontSize: 13, color: '#64748b' }}>We are constantly adding new localization modules. Contribute to our translation project.</Typography>
                        </Box>
                        <Button size="small" sx={{ color: '#dc2626', fontWeight: 800, textTransform: 'none', ml: 'auto' }}>Contact Support</Button>
                    </Box>
                </Grid>
            </Grid>
        </motion.div>
    );
};

export default LanguageView;
