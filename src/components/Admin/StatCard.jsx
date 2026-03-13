import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { motion } from 'framer-motion';
import { AnimatedNumber, PulseDot } from './AdminUIUtils';

/* ─── Stat Card ─────────────────────────────────────────────────────────────── */
const StatCard = ({ icon, label, value, sub, color, delay = 0 }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            <Box sx={{
                p: 3.5,
                borderRadius: 1,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: hovered ? color : '#e2e8f0',
                boxShadow: hovered ? `0 20px 60px ${color}22` : '0 4px 20px rgba(0,0,0,0.03)',
                transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                transform: hovered ? 'translateY(-4px)' : 'none',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                {/* Glow blob */}
                <Box sx={{
                    position: 'absolute', top: -30, right: -30, width: 100, height: 100,
                    borderRadius: '50%', bgcolor: color,
                    opacity: hovered ? 0.08 : 0,
                    transition: 'opacity 0.35s',
                    filter: 'blur(20px)',
                }} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                    <Box sx={{
                        width: 44, height: 44, borderRadius: 3,
                        bgcolor: `${color}15`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s',
                        transform: hovered ? 'rotate(8deg) scale(1.1)' : 'none',
                    }}>
                        {React.cloneElement(icon, { sx: { color, fontSize: 22 } })}
                    </Box>
                    <PulseDot color={color} size={8} />
                </Box>
                <Typography sx={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.8, mb: 1 }}>{label}</Typography>
                <Typography sx={{ fontSize: 32, fontWeight: 900, color: '#0f172a', lineHeight: 1, mb: 1, fontVariantNumeric: 'tabular-nums' }}>
                    <AnimatedNumber target={value} />
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 600, color, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <TrendingUpIcon sx={{ fontSize: 14 }} /> {sub}
                </Typography>
            </Box>
        </motion.div>
    );
};

export default StatCard;
