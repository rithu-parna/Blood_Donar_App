import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, IconButton, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1920',
        title: 'Empowering Life Through Quick Blood Access',
        subtitle: 'A real-time platform bridging the gap between donors and patients.'
    },
    {
        url: 'https://images.unsplash.com/photo-1579154235602-3c227318728b?auto=format&fit=crop&q=80&w=1920',
        title: 'Join the Network and Save Lives',
        subtitle: 'Become a donor today and be a hero for someone in need.'
    },
    {
        url: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1920',
        title: 'Every Drop Counts, Every Second Matters',
        subtitle: 'Fast and reliable connectivity for life-saving emergencies.'
    }
];

const HeroSection = ({ onRegisterClick, onAboutClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000); // User specifically asked for 2s
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <Box sx={{
            position: 'relative',
            height: { xs: '85vh', md: '95vh' },
            overflow: 'hidden',
            bgcolor: '#0f172a'
        }}>
            {/* Background Image Slider with improved overlay */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0
                    }}
                >
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%), url(${images[currentIndex].url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} />
                </motion.div>
            </AnimatePresence>

            <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10 }}>
                <Box sx={{
                    maxWidth: { xs: '100%', md: 900 },
                    textAlign: 'left',
                    mt: { xs: 5, md: 0 }
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                            <Box sx={{ width: 40, height: 4, bgcolor: '#E11D48', borderRadius: 2 }} />
                            <Typography variant="overline" sx={{ color: '#E11D48', fontWeight: 900, letterSpacing: 4, fontSize: '0.85rem' }}>
                                SAVING LIVES TOGETHER
                            </Typography>
                        </Stack>

                        <Typography variant="h1" sx={{
                            fontWeight: 950,
                            fontSize: { xs: '3rem', sm: '4.5rem', md: '5.5rem' },
                            color: 'white',
                            lineHeight: 1.1,
                            mb: 3,
                            letterSpacing: -2,
                        }}>
                            {images[currentIndex].title.split(' ').map((word, i) => (
                                word === 'Life' || word === 'Hero' || word === 'Counts' ?
                                    <Box key={i} component="span" className="text-gradient" sx={{ display: 'inline-block', mr: 2 }}>{word}</Box> :
                                    <Box key={i} component="span" sx={{ display: 'inline-block', mr: 2 }}>{word}</Box>
                            ))}
                        </Typography>

                        <Typography variant="h5" sx={{
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.6,
                            mb: 6,
                            maxWidth: 600,
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            letterSpacing: 0.2
                        }}>
                            {images[currentIndex].subtitle}
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
                            <Button
                                variant="contained"
                                onClick={onRegisterClick}
                                className="glow-btn"
                                sx={{
                                    bgcolor: '#E11D48',
                                    px: 5,
                                    py: 1.8,
                                    borderRadius: 2,
                                    fontWeight: 800,
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    boxShadow: '0 10px 30px -5px rgba(225, 29, 72, 0.4)',
                                    '&:hover': { bgcolor: '#BE123C', transform: 'translateY(-2px)' },
                                    transition: 'all 0.3s'
                                }}
                            >
                                Register Now
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={onAboutClick}
                                sx={{
                                    borderColor: 'rgba(255,255,255,0.3)',
                                    color: 'white',
                                    px: 5,
                                    py: 1.8,
                                    borderRadius: 2,
                                    fontWeight: 800,
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    backdropFilter: 'blur(10px)',
                                    borderWidth: 2,
                                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)', transform: 'translateY(-2px)' },
                                    transition: 'all 0.3s'
                                }}
                            >
                                How it Works
                            </Button>
                        </Stack>
                    </motion.div>
                </Box>
            </Container>

            {/* Slider Controls with improved design */}
            <Box sx={{
                position: 'absolute',
                bottom: 80,
                right: { xs: 20, md: 80 },
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 5
            }}>
                <Stack direction="row" spacing={2}>
                    {images.map((_, i) => (
                        <Box
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            sx={{
                                width: currentIndex === i ? 60 : 16,
                                height: 8,
                                borderRadius: 10,
                                bgcolor: currentIndex === i ? '#E11D48' : 'rgba(255,255,255,0.2)',
                                cursor: 'pointer',
                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        />
                    ))}
                </Stack>
                <Stack direction="row" spacing={1.5}>
                    <IconButton
                        onClick={prevSlide}
                        sx={{
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            p: 2,
                            '&:hover': { bgcolor: '#E11D48', borderColor: '#E11D48' }
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        onClick={nextSlide}
                        sx={{
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            p: 2,
                            '&:hover': { bgcolor: '#E11D48', borderColor: '#E11D48' }
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    );
};


export default HeroSection;
