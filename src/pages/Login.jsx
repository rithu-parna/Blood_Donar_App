import React from 'react';
import { Box, Typography, TextField, Button, Grid, Divider, Link, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/admin');
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#fef2f2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: 1000 }}
      >
        <Box sx={{
          bgcolor: '#ffffff',
          borderRadius: 6,
          position: 'relative',
          display: 'flex',
          width: '100%',
          boxShadow: '0 24px 48px rgba(220,38,38,0.15)',
          minHeight: 650,
          overflow: 'hidden'
        }}>
          {/* Left Side Form */}
          <Box sx={{
            flex: 1,
            p: { xs: 4, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 1
          }}>
            <Typography variant="h4" fontWeight="900" sx={{ color: '#1E293B', mb: 1, letterSpacing: -1 }}>
              Join <Box component="span" sx={{ color: '#E11D48' }}>BloodLink</Box> ❤️
            </Typography>
            <Typography variant="body2" color="#64748B" sx={{ mb: 4, fontWeight: 500, lineHeight: 1.6 }}>
              Every drop counts. Sign in to manage your donations or find donors.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: '#1E293B' }}>Email Address</Typography>
            <TextField
              fullWidth
              placeholder="donor@bloodlink.org"
              variant="outlined"
              sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#F8FAFC' } }}
            />

            <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: '#1E293B' }}>Password</Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="••••••••"
              variant="outlined"
              sx={{ mb: 1, '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: '#F8FAFC' } }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
              <Link href="#" underline="hover" sx={{ color: '#E11D48', fontSize: '14px', fontWeight: 800 }}>
                Forgot Password?
              </Link>
            </Box>

            <Button
              fullWidth
              variant="contained"
              onClick={handleSignIn}
              sx={{
                bgcolor: '#E11D48',
                color: 'white',
                py: 1.8,
                borderRadius: 3,
                fontWeight: 900,
                fontSize: '1rem',
                mb: 4,
                boxShadow: '0 8px 16px rgba(225, 29, 72, 0.2)',
                textTransform: 'none',
                '&:hover': { bgcolor: '#BE123C' }
              }}
            >
              Sign In
            </Button>

            <Divider sx={{ mb: 4, fontSize: '13px', color: '#94a3b8', fontWeight: 700 }}>
              Or sign in with
            </Divider>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon sx={{ color: '#ea4335' }} />}
                  sx={{ borderRadius: 3, borderColor: '#e2e8f0', color: '#475569', textTransform: 'none', fontWeight: 800, bgcolor: '#f8fafc', py: 1.2 }}
                >
                  Google
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<FacebookIcon sx={{ color: '#1877f2' }} />}
                  sx={{ borderRadius: 3, borderColor: '#e2e8f0', color: '#475569', textTransform: 'none', fontWeight: 800, bgcolor: '#f8fafc', py: 1.2 }}
                >
                  Facebook
                </Button>
              </Grid>
            </Grid>

            <Box sx={{ mt: 5, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                New hero? <Link href="#" sx={{ color: '#E11D48', fontWeight: 900, cursor: 'pointer', ml: 1 }} onClick={(e) => { e.preventDefault(); navigate('/customer'); }}>Register as Donor</Link>
              </Typography>
            </Box>
          </Box>

          {/* Right Side Image Area */}
          <Box sx={{
            flex: 1,
            display: { xs: 'none', md: 'block' },
            p: 2,
            position: 'relative'
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
              backgroundImage: 'url(https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(225, 29, 72, 0.25)', borderRadius: 5 }} />

              <Box sx={{ position: 'absolute', bottom: 40, left: 40, right: 40, bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', p: 4, borderRadius: 5, border: '1px solid rgba(255,255,255,0.2)' }}>
                <Typography variant="h5" fontWeight={900} color="white" sx={{ mb: 1 }}>Helping Hands</Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.9)" fontWeight={500} sx={{ lineHeight: 1.6 }}>
                  "I needed blood for my father's surgery in Kozhikode. This app helped me find a donor in 15 minutes. Truly life saving!"
                </Typography>
                <Typography variant="caption" sx={{ color: 'white', display: 'block', mt: 2, fontWeight: 800 }}>- Muhammed Fayis</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Login;
