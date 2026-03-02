import React from 'react';
import { Box, Typography, TextField, Button, Grid, Divider, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/admin');
  };

  const loginFormContent = (
    <>
      <Typography variant="h4" fontWeight="800" sx={{ color: '#1a202c', mb: 1 }}>
        Join Lifeline ❤️
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4, maxWidth: 350 }}>
        Every drop counts. Sign in to manage your donations, find donors, or request blood for emergencies.
      </Typography>

      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Email Address</Typography>
      <TextField
        fullWidth
        placeholder="donor@lifeline.com"
        variant="outlined"
        size="small"
        sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: '#f8fafc' } }}
      />

      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Password</Typography>
      <TextField
        fullWidth
        type="password"
        placeholder="••••••••"
        variant="outlined"
        size="small"
        sx={{ mb: 1, '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: '#f8fafc' } }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
        <Link href="#" underline="hover" sx={{ color: '#dc2626', fontSize: '13px', fontWeight: 500 }}>
          Forgot Password?
        </Link>
      </Box>

      <Button
        fullWidth
        variant="contained"
        onClick={handleSignIn}
        sx={{
          bgcolor: '#dc2626',
          color: 'white',
          py: 1.5,
          borderRadius: 2,
          fontWeight: 600,
          mb: 3,
          '&:hover': { bgcolor: '#b91c1c' }
        }}
      >
        Sign In
      </Button>

      <Divider sx={{ mb: 3, fontSize: '12px', color: '#94a3b8' }}>
        Or sign in with
      </Divider>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon sx={{ color: '#ea4335' }} />}
            sx={{ borderRadius: 2, borderColor: '#e2e8f0', color: '#475569', textTransform: 'none', fontWeight: 600, bgcolor: '#f8fafc' }}
          >
            Google
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon sx={{ color: '#1877f2' }} />}
            sx={{ borderRadius: 2, borderColor: '#e2e8f0', color: '#475569', textTransform: 'none', fontWeight: 600, bgcolor: '#f8fafc' }}
          >
            Facebook
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          New hero? <Link href="#" sx={{ color: '#dc2626', fontWeight: 600, cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); navigate('/customer'); }}>Register as Donor</Link>
        </Typography>
        <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 4 }}>
          © 2026 LIFELINE BLOOD DONATION. ALL RIGHTS RESERVED
        </Typography>
      </Box>
    </>
  );

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
          minHeight: 650
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
            {loginFormContent}
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              {/* Overlay to darken image slightly */}
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(220,38,38,0.2)', borderRadius: 5 }} />

              <motion.div
                initial={{ opacity: 0, y: 50, x: 50 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  position: 'absolute',
                  top: '15%',
                  right: '-10%',
                  width: '320px',
                  backgroundColor: 'white',
                  borderRadius: '24px',
                  padding: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  transform: 'scale(0.85)',
                  transformOrigin: 'top right'
                }}
              >
                <Typography variant="h6" fontWeight="800" sx={{ color: '#1a202c', mb: 1 }}>
                  Emergency Request �
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                  Need blood urgently? Register your request immediately without signing in.
                </Typography>
                <TextField placeholder="Patient Name" variant="outlined" size="small" fullWidth sx={{ mb: 1, '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                <Grid container spacing={1} mb={2}>
                  <Grid item xs={6}><TextField placeholder="Blood Type" variant="outlined" size="small" fullWidth sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} /></Grid>
                  <Grid item xs={6}><TextField placeholder="Units Required" variant="outlined" size="small" fullWidth sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} /></Grid>
                </Grid>
                <Button fullWidth variant="contained" sx={{ bgcolor: '#dc2626', color: 'white', py: 1, borderRadius: 2 }}>
                  Submit Emergency
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Login;
