import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

/* ─── Animated Counter ─────────────────────────────────────────────────────── */
export const AnimatedNumber = ({ target, duration = 1800, prefix = '', suffix = '' }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setDisplay(target); clearInterval(timer); }
            else setDisplay(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration]);
    return <>{prefix}{display.toLocaleString()}{suffix}</>;
};

/* ─── Heartbeat Pulse ───────────────────────────────────────────────────────── */
export const PulseDot = ({ color = '#dc2626', size = 10 }) => (
    <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{
            width: size, height: size, borderRadius: '50%', bgcolor: color,
            animation: 'pulse 2s ease-in-out infinite',
            '@keyframes pulse': { '0%,100%': { transform: 'scale(1)', opacity: 1 }, '50%': { transform: 'scale(1.6)', opacity: 0.4 } }
        }} />
        <Box sx={{
            position: 'absolute', width: size * 2.5, height: size * 2.5, borderRadius: '50%',
            border: `2px solid ${color}`, opacity: 0.3,
            animation: 'ripple 2s ease-out infinite',
            '@keyframes ripple': { '0%': { transform: 'scale(0.6)', opacity: 0.6 }, '100%': { transform: 'scale(1.8)', opacity: 0 } }
        }} />
    </Box>
);

/* ─── Floating Particles ────────────────────────────────────────────────────── */
export const Particles = () => (
    <Box sx={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        {[...Array(12)].map((_, i) => (
            <Box key={i} sx={{
                position: 'absolute',
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                borderRadius: '50%',
                bgcolor: i % 3 === 0 ? 'rgba(220,38,38,0.15)' : i % 3 === 1 ? 'rgba(79,70,229,0.1)' : 'rgba(245,158,11,0.1)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float${i} ${Math.random() * 8 + 6}s ease-in-out infinite`,
                [`@keyframes float${i}`]: {
                    '0%,100%': { transform: `translate(0,0) scale(1)` },
                    '33%': { transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.3)` },
                    '66%': { transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0.8)` },
                },
                animationDelay: `${Math.random() * 5}s`
            }} />
        ))}
    </Box>
);

/* ─── Blood Group Badge ─────────────────────────────────────────────────────── */
export const BloodBadge = ({ type }) => {
    const colors = { 'O+': '#dc2626', 'O-': '#b91c1c', 'A+': '#4f46e5', 'A-': '#4338ca', 'B+': '#d97706', 'B-': '#b45309', 'AB+': '#16a34a', 'AB-': '#15803d' };
    return (
        <Box sx={{
            width: 38, height: 38, borderRadius: '50%',
            bgcolor: `${colors[type] || '#dc2626'}18`,
            color: colors[type] || '#dc2626',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: 11, border: `2px solid ${colors[type] || '#dc2626'}30`,
        }}>{type}</Box>
    );
};
