import React from 'react';
import { Box, Typography, TextField, Button, Grid, Divider, Link, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { motion } from 'framer-motion';
import { loginStyles as style } from './loginstyle';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/admin');
  };

  return (
    <Box sx={style.pageContainer}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: 1000 }}
      >
        <Box sx={style.crmdashbdcard}>
          {/* Left Side Form */}
          <Box sx={style.leftSide}>
            <Typography variant="h4" sx={style.title}>
              Join <Box component="span" sx={style.titleHighlight}>BloodLink</Box> ❤️
            </Typography>
            <Typography variant="body2" sx={style.subtitle}>
              Every drop counts. Sign in to manage your donations or find donors.
            </Typography>

            <Typography variant="subtitle2" sx={style.formLabel}>Email Address</Typography>
            <TextField
              fullWidth
              placeholder="donor@bloodlink.org"
              variant="outlined"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon sx={{ color: '#E11D48', fontSize: 20 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={style.inputField}
            />

            <Typography variant="subtitle2" sx={style.formLabel}>Password</Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="••••••••"
              variant="outlined"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon sx={{ color: '#E11D48', fontSize: 20 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={style.passwordField}
            />

            <Box sx={style.forgotPasswordContainer}>
              <Link href="#" underline="none" sx={style.forgotPasswordLink}>
                Forgot Password?
              </Link>
            </Box>

            <Button
              fullWidth
              variant="contained"
              onClick={handleSignIn}
              sx={style.signInButton}
            >
              Sign In
            </Button>

            <Divider sx={style.divider}>
              Or sign in with
            </Divider>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon sx={{ color: '#ea4335' }} />}
                  sx={style.socialButton}
                >
                  Google
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<FacebookIcon sx={{ color: '#1877f2' }} />}
                  sx={style.socialButton}
                >
                  Facebook
                </Button>
              </Grid>
            </Grid>

            <Box sx={style.footerText}>
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                New hero? <Link href="#" sx={style.registerLink} onClick={(e) => { e.preventDefault(); navigate('/customer'); }}>Register as Donor</Link>
              </Typography>
            </Box>
          </Box>

          {/* Right Side Image Area */}
          <Box sx={style.rightSideArea}>
            <Box sx={style.rightSideImage}>
              <Box sx={style.rightSideOverlay} />

              <Box sx={style.quoteBox}>
                <Typography variant="h5" sx={style.quoteTitle}>Helping Hands</Typography>
                <Typography variant="body2" sx={style.quoteBody}>
                  "I needed blood for my father's surgery in Kozhikode. This app helped me find a donor in 15 minutes. Truly life saving!"
                </Typography>
                <Typography variant="caption" sx={style.quoteAuthor}>- Muhammed Fayis</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Login;
