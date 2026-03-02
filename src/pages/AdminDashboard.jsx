import React, { useState, useEffect, useRef } from 'react';
import {
    Box, Typography, Grid, Paper, Avatar, IconButton, Badge, Divider, List,
    ListItem, ListItemIcon, ListItemText, InputBase, Button, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, Chip
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler);

/* ─── Animated Counter ─────────────────────────────────────────────────────── */
const AnimatedNumber = ({ target, duration = 1800, prefix = '', suffix = '' }) => {
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
const PulseDot = ({ color = '#dc2626', size = 10 }) => (
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
const Particles = () => (
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
                borderRadius: 4,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: hovered ? color : '#e2e8f0',
                boxShadow: hovered ? `0 20px 60px ${color}22` : '0 4px 20px rgba(0,0,0,0.03)',
                transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                transform: hovered ? 'translateY(-4px)' : 'none',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
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

/* ─── Blood Group Badge ─────────────────────────────────────────────────────── */
const BloodBadge = ({ type }) => {
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

/* ─── Sidebar Item ──────────────────────────────────────────────────────────── */
const SideItem = ({ icon, label, active, onClick, delay = 0 }) => (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.4 }}>
        <ListItem button onClick={onClick} sx={{
            borderRadius: 3, mb: 0.5, py: 1.5, px: 2,
            bgcolor: active ? 'rgba(220,38,38,0.08)' : 'transparent',
            color: active ? '#dc2626' : '#64748b',
            transition: 'all 0.25s ease',
            position: 'relative', overflow: 'hidden',
            '&:hover': { bgcolor: active ? 'rgba(220,38,38,0.12)' : '#f8fafc', color: active ? '#dc2626' : '#1e293b', transform: 'translateX(4px)' },
            '&::before': active ? {
                content: '""', position: 'absolute', left: 0, top: '20%', height: '60%',
                width: 3, borderRadius: '0 4px 4px 0', bgcolor: '#dc2626'
            } : {}
        }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                <motion.div animate={active ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.4 }}>
                    {icon}
                </motion.div>
            </ListItemIcon>
            <ListItemText primary={label} primaryTypographyProps={{ fontSize: 14, fontWeight: active ? 700 : 500 }} />
            {active && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#dc2626' }} />
                </motion.div>
            )}
        </ListItem>
    </motion.div>
);

/* ─── Main Component ────────────────────────────────────────────────────────── */
const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [searchFocused, setSearchFocused] = useState(false);

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
            {
                label: 'Donations',
                data: [400, 500, 450, 650, 300, 400, 300, 500, 400, 600],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220,38,38,0.08)',
                tension: 0.4, fill: true, pointRadius: 4,
                pointBackgroundColor: '#dc2626',
                pointBorderColor: 'white', pointBorderWidth: 2,
            },
            {
                label: 'Requests',
                data: [500, 700, 550, 550, 600, 400, 600, 500, 700, 500],
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245,158,11,0.05)',
                borderDash: [5, 5], tension: 0.4, fill: true, pointRadius: 4,
                pointBackgroundColor: '#f59e0b',
                pointBorderColor: 'white', pointBorderWidth: 2,
            }
        ]
    };

    const lineOptions = {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 1200, easing: 'easeInOutQuart' },
        plugins: {
            legend: { position: 'top', align: 'end', labels: { boxWidth: 8, usePointStyle: true, padding: 20, font: { size: 12, weight: 600 } } },
            tooltip: { backgroundColor: '#0f172a', titleColor: '#f8fafc', bodyColor: '#94a3b8', padding: 12, cornerRadius: 10, displayColors: false }
        },
        scales: {
            y: { ticks: { font: { size: 11 }, color: '#94a3b8' }, grid: { color: '#f1f5f9', drawBorder: false } },
            x: { ticks: { font: { size: 11 }, color: '#94a3b8' }, grid: { display: false } }
        }
    };

    const barData = {
        labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
        datasets: [{
            label: 'Units Available',
            data: [120, 80, 40, 60, 20, 15, 30, 5],
            backgroundColor: ['#dc2626', '#ef4444', '#4f46e5', '#6366f1', '#d97706', '#f59e0b', '#16a34a', '#22c55e'].map(c => c + 'cc'),
            borderRadius: 8, barPercentage: 0.55,
        }]
    };

    const barOptions = {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 1400, easing: 'easeInOutBounce', delay: ctx => ctx.dataIndex * 80 },
        plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0f172a', cornerRadius: 10, padding: 12 } },
        scales: { x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 11, weight: 700 } } }, y: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { color: '#f8fafc' } } }
    };

    const hospitals = [
        { name: 'City General Hospital', need: 'Critical O-', units: 5, status: 'Pending' },
        { name: 'Mercy Care Center', need: 'Urgent A+', units: 2, status: 'Fulfilled' },
        { name: 'St. Jude Clinic', need: 'High B+', units: 4, status: 'Pending' },
    ];

    const donors = [
        { id: 1, name: 'Alice Johnson', type: 'O-', lastDonation: '10 days ago', status: 'Active' },
        { id: 2, name: 'Bob Smith', type: 'A+', lastDonation: '2 months ago', status: 'Active' },
        { id: 3, name: 'Charlie Brown', type: 'B+', lastDonation: '1 year ago', status: 'Inactive' },
        { id: 4, name: 'Diana Prince', type: 'AB-', lastDonation: '5 days ago', status: 'Active' },
    ];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
    };

    const renderDashboard = () => (
        <AnimatePresence mode="wait">
            <motion.div key="dashboard" variants={containerVariants} initial="hidden" animate="visible">
                {/* Stats Row */}
                <Grid container spacing={2.5} sx={{ mb: 3 }}>
                    {[
                        { icon: <PeopleIcon />, label: 'Total Donors', value: 24592, sub: '+124 Registered Today', color: '#dc2626' },
                        { icon: <BloodtypeIcon />, label: 'Units Available', value: 3042, sub: 'Stock Updated 5m ago', color: '#4f46e5' },
                        { icon: <WarningAmberIcon />, label: 'Pending Requests', value: 142, sub: '8 Critical Emergencies', color: '#f59e0b' },
                        { icon: <FavoriteIcon />, label: 'Lives Saved', value: 82904, sub: 'Since inception', color: '#16a34a' },
                    ].map((s, i) => (
                        <Grid item xs={12} sm={6} md={3} key={s.label}>
                            <StatCard {...s} delay={i * 0.08} />
                        </Grid>
                    ))}
                </Grid>

                {/* Charts Row */}
                <Grid container spacing={2.5} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={7}>
                        <motion.div variants={itemVariants}>
                            <Paper sx={{
                                p: 3.5, borderRadius: 4,
                                boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                                border: '1px solid #e2e8f0',
                                background: 'white',
                                height: 320,
                                display: 'flex', flexDirection: 'column'
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
                                    <Box>
                                        <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#0f172a', mb: 0.5 }}>Donation & Request Trends</Typography>
                                        <Typography sx={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>10-month overview</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 3 }}>
                                        {[{ label: 'Donations', val: '4,285', color: '#dc2626' }, { label: 'Requests', val: '5,102', color: '#f59e0b' }, { label: 'Fulfilled', val: '84%', color: '#16a34a' }].map(m => (
                                            <Box key={m.label} sx={{ textAlign: 'center' }}>
                                                <Typography sx={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>{m.label}</Typography>
                                                <Typography sx={{ fontSize: 20, fontWeight: 900, color: m.color }}>{m.val}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                                <Box sx={{ flex: 1, position: 'relative' }}>
                                    <Line data={lineData} options={lineOptions} />
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <motion.div variants={itemVariants}>
                            <Paper sx={{
                                p: 3.5, borderRadius: 4,
                                boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                                border: '1px solid #e2e8f0',
                                height: 320,
                                display: 'flex', flexDirection: 'column'
                            }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                    <Box>
                                        <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#0f172a', mb: 0.5 }}>Blood Inventory</Typography>
                                        <Typography sx={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>Available units by group</Typography>
                                    </Box>
                                    <Button size="small" variant="outlined" sx={{
                                        borderColor: '#dc262630', color: '#dc2626', textTransform: 'none',
                                        borderRadius: 100, fontWeight: 700, fontSize: 12, px: 2,
                                        '&:hover': { borderColor: '#dc2626', bgcolor: '#fef2f2' }
                                    }}>Update</Button>
                                </Box>
                                <Box sx={{ flex: 1, position: 'relative' }}>
                                    <Bar data={barData} options={barOptions} />
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Requests Table */}
                <motion.div variants={itemVariants}>
                    <Paper sx={{ p: 3.5, borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                            <Box>
                                <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#0f172a', mb: 0.5 }}>Recent Requests</Typography>
                                <Typography sx={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>Hospitals requiring urgent blood units</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', bgcolor: '#f8fafc', borderRadius: 100, p: 0.5, border: '1px solid #e2e8f0' }}>
                                {['Active', 'History'].map(t => (
                                    <Button key={t} size="small" sx={{
                                        bgcolor: t === 'Active' ? 'white' : 'transparent',
                                        color: t === 'Active' ? '#dc2626' : '#94a3b8',
                                        fontWeight: 700, borderRadius: 100, textTransform: 'none',
                                        fontSize: 12, px: 2.5,
                                        boxShadow: t === 'Active' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                                        '&:hover': { bgcolor: t === 'Active' ? 'white' : '#f1f5f9' }
                                    }}>{t}</Button>
                                ))}
                            </Box>
                        </Box>
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow sx={{ '& th': { borderBottom: '2px solid #f8fafc', color: '#94a3b8', fontWeight: 700, fontSize: 11, pb: 2, textTransform: 'uppercase', letterSpacing: 0.8 } }}>
                                        {['#', 'Hospital', 'Requirement', 'Units', 'Status'].map(h => (
                                            <TableCell key={h} align={['Requirement', 'Units', 'Status'].includes(h) ? 'right' : 'left'}>{h}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {hospitals.map((row, i) => (
                                        <motion.tr
                                            key={row.name}
                                            component={TableRow}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + i * 0.1 }}
                                            style={{ display: 'table-row' }}
                                        >
                                            <TableRow
                                                hover
                                                sx={{
                                                    '& td': { borderBottom: '1px solid #f8fafc', py: 2, fontSize: 13, color: '#1e293b', fontWeight: 600 },
                                                    transition: 'background 0.2s',
                                                    '&:hover': { bgcolor: '#fef2f2' },
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <TableCell sx={{ color: '#94a3b8 !important', fontWeight: '700 !important', width: 40 }}>{String(i + 1).padStart(2, '0')}</TableCell>
                                                <TableCell>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <Box sx={{ width: 32, height: 32, borderRadius: 2, bgcolor: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <LocalHospitalIcon sx={{ fontSize: 16, color: '#dc2626' }} />
                                                        </Box>
                                                        {row.name}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Chip label={row.need} size="small" sx={{ bgcolor: '#fef2f2', color: '#dc2626', fontWeight: 800, borderRadius: 100, fontSize: 11 }} />
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography sx={{ fontWeight: 900, fontSize: 15 }}>{row.units}</Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Chip label={row.status} size="small" sx={{
                                                        bgcolor: row.status === 'Pending' ? '#fffbeb' : '#dcfce7',
                                                        color: row.status === 'Pending' ? '#d97706' : '#16a34a',
                                                        fontWeight: 800, borderRadius: 100, fontSize: 11
                                                    }} />
                                                </TableCell>
                                            </TableRow>
                                        </motion.tr>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );

    const renderDonors = () => (
        <AnimatePresence mode="wait">
            <motion.div key="donors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <Paper sx={{ p: 4, borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: 900, color: '#0f172a', mb: 0.5 }}>Registered Donors</Typography>
                            <Typography sx={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{donors.length} donors found</Typography>
                        </Box>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                            <Button variant="contained" sx={{
                                bgcolor: '#dc2626', textTransform: 'none', borderRadius: 100,
                                fontWeight: 700, px: 3, py: 1,
                                boxShadow: '0 8px 25px rgba(220,38,38,0.35)',
                                '&:hover': { bgcolor: '#b91c1c', boxShadow: '0 12px 30px rgba(220,38,38,0.45)' }
                            }}>+ Add Donor</Button>
                        </motion.div>
                    </Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ '& th': { borderBottom: '2px solid #f8fafc', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 0.8 } }}>
                                    {['Name', 'Blood Group', 'Last Donation', 'Status', ''].map(h => <TableCell key={h} align={h === '' ? 'right' : 'left'}>{h}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {donors.map((row, i) => (
                                    <motion.tr
                                        key={row.id}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.4 }}
                                        style={{ display: 'table-row' }}
                                    >
                                        <TableRow hover sx={{ '& td': { py: 2.5, borderBottom: '1px solid #f8fafc', fontWeight: 600, fontSize: 14 }, '&:hover': { bgcolor: '#fef2f2' }, cursor: 'pointer', transition: 'background 0.2s' }}>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                                                        <Avatar sx={{ width: 38, height: 38, bgcolor: '#fef2f2', color: '#dc2626', fontWeight: 900, fontSize: 14, border: '2px solid #fecaca' }}>
                                                            {row.name.charAt(0)}
                                                        </Avatar>
                                                    </motion.div>
                                                    <Box>
                                                        <Typography sx={{ fontWeight: 700, fontSize: 14, color: '#0f172a' }}>{row.name}</Typography>
                                                        <Typography sx={{ fontSize: 11, color: '#94a3b8' }}>ID #{String(row.id).padStart(4, '0')}</Typography>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                            <TableCell><BloodBadge type={row.type} /></TableCell>
                                            <TableCell sx={{ color: '#64748b !important' }}>{row.lastDonation}</TableCell>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <PulseDot color={row.status === 'Active' ? '#16a34a' : '#94a3b8'} size={7} />
                                                    <Chip label={row.status} size="small" sx={{
                                                        bgcolor: row.status === 'Active' ? '#dcfce7' : '#f1f5f9',
                                                        color: row.status === 'Active' ? '#16a34a' : '#64748b',
                                                        fontWeight: 800, borderRadius: 100, fontSize: 11
                                                    }} />
                                                </Box>
                                            </TableCell>
                                            <TableCell align="right">
                                                <motion.div whileHover={{ x: 3 }} style={{ display: 'inline-flex' }}>
                                                    <IconButton size="small" sx={{ color: '#94a3b8', '&:hover': { color: '#dc2626' } }}>
                                                        <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
                                                    </IconButton>
                                                </motion.div>
                                            </TableCell>
                                        </TableRow>
                                    </motion.tr>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </motion.div>
        </AnimatePresence>
    );

    const renderHospitals = () => (
        <AnimatePresence mode="wait">
            <motion.div key="hospitals" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <Typography sx={{ fontSize: 20, fontWeight: 900, color: '#0f172a', mb: 3 }}>Partner Hospitals</Typography>
                <Grid container spacing={3}>
                    {hospitals.map((h, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            >
                                <Paper sx={{
                                    p: 4, borderRadius: 4,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                    border: '1px solid #e2e8f0',
                                    cursor: 'pointer',
                                    transition: 'border-color 0.25s, box-shadow 0.25s',
                                    '&:hover': { borderColor: '#dc2626', boxShadow: '0 20px 50px rgba(220,38,38,0.12)' }
                                }}>
                                    <Box sx={{ width: 52, height: 52, borderRadius: 3, bgcolor: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                                        <LocalHospitalIcon sx={{ fontSize: 28, color: '#dc2626' }} />
                                    </Box>
                                    <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#0f172a', mb: 0.5 }}>{h.name}</Typography>
                                    <Typography sx={{ fontSize: 12, color: '#94a3b8', mb: 3 }}>Primary Partner Facility</Typography>
                                    <Divider sx={{ mb: 3, borderColor: '#f1f5f9' }} />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Chip label={`Needs: ${h.need}`} size="small" sx={{ bgcolor: '#fef2f2', color: '#dc2626', fontWeight: 700, borderRadius: 100, fontSize: 11 }} />
                                        <Button size="small" sx={{ borderRadius: 100, textTransform: 'none', fontWeight: 700, fontSize: 12, color: '#64748b', border: '1px solid #e2e8f0', '&:hover': { borderColor: '#dc2626', color: '#dc2626' } }}>Manage</Button>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </AnimatePresence>
    );

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8fafc', fontFamily: '"DM Sans", Inter, sans-serif', position: 'relative' }}>
            <Particles />

            {/* ── Sidebar ── */}
            <motion.div
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: 10 }}
            >
                <Box sx={{
                    width: 260, bgcolor: 'white',
                    borderRight: '1px solid #e2e8f0',
                    display: 'flex', flexDirection: 'column',
                    height: '100vh', position: 'sticky', top: 0,
                    boxShadow: '4px 0 30px rgba(0,0,0,0.04)'
                }}>
                    {/* Logo */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <Box sx={{ p: 3.5, display: 'flex', alignItems: 'center', gap: 2, borderBottom: '1px solid #f1f5f9' }}>
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                            >
                                <Box sx={{
                                    bgcolor: '#dc2626', p: 1.2, borderRadius: 2.5,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 8px 25px rgba(220,38,38,0.4)',
                                }}>
                                    <BloodtypeIcon sx={{ color: 'white', fontSize: 24 }} />
                                </Box>
                            </motion.div>
                            <Box>
                                <Typography sx={{ fontSize: 18, fontWeight: 900, color: '#0f172a', letterSpacing: -0.5, lineHeight: 1 }}>Lifeline</Typography>
                                <Typography sx={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>Blood Management</Typography>
                            </Box>
                        </Box>
                    </motion.div>

                    {/* Nav */}
                    <List sx={{ flexGrow: 1, px: 2, pt: 2 }}>
                        {[
                            { icon: <DashboardIcon sx={{ fontSize: 20 }} />, label: 'Blood Bank', tab: 'dashboard', delay: 0.15 },
                            { icon: <PeopleIcon sx={{ fontSize: 20 }} />, label: 'Donors', tab: 'donors', delay: 0.2 },
                            { icon: <LocalHospitalIcon sx={{ fontSize: 20 }} />, label: 'Hospitals', tab: 'hospitals', delay: 0.25 },
                            { icon: <FlashOnIcon sx={{ fontSize: 20 }} />, label: 'Requests', tab: null, delay: 0.3 },
                            { icon: <EventAvailableIcon sx={{ fontSize: 20 }} />, label: 'Camps', tab: null, delay: 0.35 },
                        ].map(item => (
                            <SideItem key={item.label} icon={item.icon} label={item.label} active={activeTab === item.tab} onClick={() => item.tab && setActiveTab(item.tab)} delay={item.delay} />
                        ))}
                        <Box sx={{ mx: -2, my: 2, borderTop: '1px dashed #f1f5f9' }} />
                        <SideItem icon={<LoginIcon sx={{ fontSize: 20 }} />} label="Logout" active={false} onClick={() => navigate?.('/login')} delay={0.4} />
                    </List>

                    {/* Bottom CTA */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <Box sx={{ p: 2.5 }}>
                            <Box sx={{
                                background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                                borderRadius: 4, p: 3, textAlign: 'center', color: 'white',
                                boxShadow: '0 15px 40px rgba(220,38,38,0.4)',
                                position: 'relative', overflow: 'hidden',
                            }}>
                                <Box sx={{
                                    position: 'absolute', top: -20, right: -20,
                                    width: 80, height: 80, borderRadius: '50%',
                                    bgcolor: 'rgba(255,255,255,0.08)',
                                    animation: 'spin 8s linear infinite',
                                    '@keyframes spin': { '100%': { transform: 'rotate(360deg)' } }
                                }} />
                                <motion.div
                                    animate={{ scale: [1, 1.08, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <FavoriteIcon sx={{ fontSize: 28, mb: 1, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
                                </motion.div>
                                <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 0.5 }}>Host a Blood Camp</Typography>
                                <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', mb: 2.5 }}>Save up to 100 lives a day</Typography>
                                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                    <Button fullWidth sx={{
                                        bgcolor: 'white', color: '#dc2626', borderRadius: 100,
                                        fontSize: 12, fontWeight: 800, py: 1,
                                        '&:hover': { bgcolor: '#f8fafc' }
                                    }}>Organize Now</Button>
                                </motion.div>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            </motion.div>

            {/* ── Main ── */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <motion.div initial={{ y: -90 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                    <Box sx={{
                        height: 76, borderBottom: '1px solid #e2e8f0',
                        bgcolor: 'rgba(255,255,255,0.85)',
                        backdropFilter: 'blur(16px)',
                        display: 'flex', alignItems: 'center', px: 4,
                        justifyContent: 'space-between', zIndex: 5,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    }}>
                        {/* Search */}
                        <motion.div animate={{ width: searchFocused ? 380 : 300 }} transition={{ duration: 0.3 }}>
                            <Box sx={{
                                display: 'flex', alignItems: 'center',
                                bgcolor: searchFocused ? 'white' : '#f1f5f9',
                                px: 2, py: 1, borderRadius: 100,
                                border: '1px solid',
                                borderColor: searchFocused ? '#dc262640' : '#e2e8f0',
                                boxShadow: searchFocused ? '0 4px 20px rgba(220,38,38,0.1)' : 'none',
                                transition: 'all 0.3s',
                            }}>
                                <SearchIcon sx={{ color: searchFocused ? '#dc2626' : '#94a3b8', fontSize: 18, mr: 1.5, transition: 'color 0.3s' }} />
                                <InputBase
                                    placeholder="Search donors, blood groups..."
                                    sx={{ fontSize: 13, flex: 1, color: '#334155', '& input': { fontWeight: 500 } }}
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                />
                            </Box>
                        </motion.div>

                        {/* Right icons */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            {[LanguageIcon, SettingsIcon].map((Icon, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.1, rotate: i === 1 ? 20 : 0 }} whileTap={{ scale: 0.9 }}>
                                    <IconButton size="small" sx={{ bgcolor: '#f8fafc', color: '#64748b', '&:hover': { bgcolor: '#f1f5f9' } }}>
                                        <Icon sx={{ fontSize: 18 }} />
                                    </IconButton>
                                </motion.div>
                            ))}
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <IconButton size="small" sx={{ bgcolor: '#fef2f2', color: '#dc2626' }}>
                                    <Badge variant="dot" color="error"><NotificationsIcon sx={{ fontSize: 18 }} /></Badge>
                                </IconButton>
                            </motion.div>
                            <Divider orientation="vertical" flexItem sx={{ mx: 1, height: 28, my: 'auto' }} />
                            <motion.div whileHover={{ scale: 1.03 }} style={{ cursor: 'pointer' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Avatar sx={{ width: 38, height: 38, bgcolor: '#0f172a', fontWeight: 900, fontSize: 14, boxShadow: '0 4px 12px rgba(15,23,42,0.3)' }}>A</Avatar>
                                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                        <Typography sx={{ fontWeight: 800, fontSize: 13, color: '#0f172a', lineHeight: 1.2 }}>Admin User</Typography>
                                        <Typography sx={{ fontSize: 11, color: '#94a3b8' }}>System Operator</Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Box>
                    </Box>
                </motion.div>

                {/* Page Content */}
                <Box sx={{ p: 4, overflowY: 'auto', flex: 1 }}>
                    <AnimatePresence mode="wait">
                        {activeTab === 'dashboard' && renderDashboard()}
                        {activeTab === 'donors' && renderDonors()}
                        {activeTab === 'hospitals' && renderHospitals()}
                    </AnimatePresence>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminDashboard;