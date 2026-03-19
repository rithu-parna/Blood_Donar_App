import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Button, Stack } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import HeroSection from "../HeroSection";
import StatsBar from "../StatsBar";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ShieldIcon from '@mui/icons-material/Shield';
import VerifiedIcon from '@mui/icons-material/Verified';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HubIcon from '@mui/icons-material/Hub';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AdvancedInsights from "../AdvancedInsights";
import LivePulseMap from "../LivePulseMap";
import DonationTrends from "../DonationTrends";




const CountingNumber = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const numericValue = parseInt(value);
    const controls = animate(count, numericValue, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplay(latest));
  }, [rounded]);

  return <>{display}{suffix}</>;
};

const PremiumRequestCard = ({ req, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.4 }
    }}
  >
    <Box
      className="interactive"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        borderRadius: "40px",
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 20px 50px rgba(15, 23, 42, 0.05)",
        border: "1px solid rgba(15, 23, 42, 0.08)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 40px 80px rgba(225, 29, 72, 0.15)",
          "& .explore-link": { color: "#E11D48", transform: "translateX(5px)" },
          "& .gradient-bg": { opacity: 0.6, transform: 'scale(1.5)' },
          "& .card-image-box": { transform: 'scale(1.05)' }
        }
      }}
    >
      {/* Hover Gradient Background */}
      <Box
        className="gradient-bg"
        sx={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          background: `radial-gradient(circle at center, rgba(225, 29, 72, 0.1) 0%, transparent 60%)`,
          opacity: 0,
          zIndex: -1,
          transition: 'all 0.8s ease',
          transform: 'scale(0.5)'
        }}
      />

      {/* Visual Header / Image Area */}
      <Box
        className="card-image-box"
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          borderRadius: "30px",
          overflow: "hidden",
          mb: 3,
          bgcolor: "#F8FAFC",
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
        }}>
        <Box sx={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(45deg, rgba(225,29,72,0.05) 0%, rgba(225,29,72,0.15) 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <LocalHospitalIcon sx={{ fontSize: 60, color: "rgba(225,29,72,0.2)" }} />
        </Box>

        <Box sx={{
          position: "absolute",
          top: 16,
          right: 16,
          bgcolor: req.urgency === "CRITICAL" ? "#E11D48" : "#F59E0B",
          color: "white",
          px: 2,
          py: 0.8,
          borderRadius: "12px",
          fontWeight: 900,
          fontSize: "0.7rem",
          letterSpacing: 1,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
        }}>
          {req.urgency}
        </Box>

        <Box sx={{
          position: "absolute",
          bottom: 16,
          left: 16,
          bgcolor: "white",
          px: 2,
          py: 1,
          borderRadius: "12px",
          fontWeight: 950,
          color: "#0F172A",
          display: "flex",
          alignItems: "center",
          gap: 1,
          boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
        }}>
          <BloodtypeIcon sx={{ color: "#E11D48", fontSize: 20 }} />
          {req.type}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ px: 1, pb: 2, flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" fontWeight={900} sx={{ color: "#0F172A", mb: 1, letterSpacing: -0.5 }}>
          {req.hospital}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
          <LocationOnIcon sx={{ color: "#94A3B8", fontSize: 18 }} />
          <Typography variant="body2" sx={{ color: "#64748B", fontWeight: 700 }}>
            {req.location}
          </Typography>
        </Stack>

        <Box sx={{
          display: "flex",
          gap: 3,
          py: 2,
          borderTop: "1px solid #F1F5F9",
          mt: "auto"
        }}>
          <Box>
            <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 800, letterSpacing: 1, display: "block", mb: 0.5 }}>UNITS</Typography>
            <Typography variant="body1" fontWeight={950} sx={{ color: "#0F172A" }}>{req.units} Required</Typography>
          </Box>
          <Box sx={{ borderLeft: "1px solid #F1F5F9", pl: 3 }}>
            <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 800, letterSpacing: 1, display: "block", mb: 0.5 }}>STATUS</Typography>
            <Typography variant="body1" fontWeight={950} sx={{ color: "#E11D48" }}>Open</Typography>
          </Box>
        </Box>

        <Box
          className="explore-link"
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#0F172A",
            fontWeight: 900,
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "0.3s"
          }}
        >
          Explore Request <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>
    </Box>
  </motion.div>
);

const PremiumDonorCard = ({ donor, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{
      y: -15,
      rotateZ: index % 2 === 0 ? 1 : -1,
      transition: { duration: 0.5, type: "spring" }
    }}
  >
    <Box
      className="interactive"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        borderRadius: "40px",
        p: 5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxShadow: "0 20px 50px rgba(15, 23, 42, 0.05)",
        border: "1px solid rgba(15, 23, 42, 0.08)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 40px 80px rgba(225, 29, 72, 0.15)",
          "& .donor-icon": { transform: "scale(1.1) rotate(5deg)", boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)" },
          "& .gradient-bg": { opacity: 0.6, transform: 'scale(1.5)' }
        }
      }}
    >
      {/* Hover Gradient Background */}
      <Box
        className="gradient-bg"
        sx={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          background: `radial-gradient(circle at center, rgba(15, 23, 42, 0.08) 0%, transparent 60%)`,
          opacity: 0,
          zIndex: -1,
          transition: 'all 0.8s ease',
          transform: 'scale(0.5)'
        }}
      />

      <Box
        className="donor-icon"
        sx={{
          width: 70,
          height: 70,
          borderRadius: "20px",
          bgcolor: index === 0 ? "#FFF9EB" : index === 1 ? "#F5F0FF" : "#EDFFF4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {index === 0 && <VerifiedIcon sx={{ fontSize: 32, color: "#F59E0B" }} />}
        {index === 1 && <ShieldIcon sx={{ fontSize: 32, color: "#8B5CF6" }} />}
        {index === 2 && <StarIcon sx={{ fontSize: 32, color: "#10B981" }} />}
        {index > 2 && <WaterDropIcon sx={{ fontSize: 32, color: "#E11D48" }} />}
      </Box>

      <Typography variant="h5" fontWeight={950} sx={{ color: "#0F172A", mb: 1.5, letterSpacing: -0.5 }}>
        {donor.name}
      </Typography>

      <Typography variant="body2" sx={{ color: "#64748B", fontWeight: 700, mb: 4, lineHeight: 1.6 }}>
        Verified elite donor from {donor.location}, actively contributing to the humanitarian cause.
      </Typography>

      <Box sx={{ mt: "auto", pt: 3, borderTop: "1px solid #F1F5F9", width: "100%" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h4" fontWeight={950} sx={{ color: "#E11D48" }}>
              <CountingNumber value={donor.count} />
            </Typography>
            <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 800, letterSpacing: 1 }}>DONATIONS</Typography>
          </Box>
          <Box sx={{
            px: 2,
            py: 1,
            bgcolor: "#F8FAFC",
            borderRadius: "12px",
            color: "#0F172A",
            fontWeight: 900,
            fontSize: "0.75rem",
            border: "1px solid #F1F5F9"
          }}>
            {donor.type}
          </Box>
        </Stack>
      </Box>
    </Box>
  </motion.div>
);

const StarIcon = ({ sx }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={sx}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
  </svg>
);

const HomeTab = ({
  onDonorRegisterClick,
  onRequestCreateClick,
  onAboutClick,
  onRequestsClick,
  requests,
}) => {
  const featuredDonors = [
    { name: 'Rahul Sharma', type: 'O+', location: 'Kozhikode', count: 115 },
    { name: 'Sneha Krishna', type: 'O-', location: 'Trivandrum', count: 98 },
    { name: 'Muhammed Fayis', type: 'A-', location: 'Malappuram', count: 82 },
  ];

  const [hoveredWhyUs, setHoveredWhyUs] = useState(1); // Default to second card like in screenshot

  return (
    <>
      <HeroSection
        onRegisterClick={onDonorRegisterClick}
        onAboutClick={onAboutClick}
      />

      <Box sx={{ pt: 10, pb: 20, position: 'relative' }}>
        {/* Subtle background decoration */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          backgroundImage: `radial-gradient(#0F172A 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px',
          zIndex: -1
        }} />

        <StatsBar />

        {/* Why Choose Section (Screenshot Style) */}
        <Container maxWidth="lg" sx={{ py: 15 }} mb={-15}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Box sx={{
              display: "inline-block",
              px: 2, py: 0.8,
              bgcolor: "#FFF9EB",
              borderRadius: "10px",
              color: "#F59E0B",
              fontWeight: 950,
              fontSize: "0.75rem",
              letterSpacing: 2,
              mb: 3
            }}>
              WHY US
            </Box>
            <Typography variant="h2" fontWeight={950} sx={{ color: "#0F172A", mb: 3, letterSpacing: -2 }}>
              Why Choose <Box component="span" sx={{ color: "#E11D48" }}>Donor App?</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: "#64748B", fontWeight: 500, fontSize: "1.1rem", maxWidth: 650, mx: "auto", lineHeight: 1.6 }}>
              We provide the best service to help you find your perfect donor with ease and confidence.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* Active Dot Indicators Row */}
            {/* <Box sx={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
              position: 'absolute',
              top: -40,
              zIndex: 10
            }}>
              {[0, 1, 2, 3].map((i) => (
                <Box key={i} sx={{ width: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <motion.div
                    animate={{
                      scale: hoveredWhyUs === i ? 1.2 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Box sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: `1px solid ${hoveredWhyUs === i ? 'rgba(225, 29, 72, 0.4)' : 'rgba(15, 23, 42, 0.05)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'border-color 0.3s ease'
                    }}>
                      <Box sx={{
                        width: 8,
                        height: 8,
                        bgcolor: hoveredWhyUs === i ? '#E11D48' : '#cbd5e1',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                        boxShadow: hoveredWhyUs === i ? '0 0 10px rgba(225, 29, 72, 0.4)' : 'none'
                      }} />
                    </Box>
                  </motion.div>
                </Box>
              ))}
            </Box> */}

            <Grid container spacing={4}>
              {[
                {
                  title: "Verified Network",
                  icon: <VerifiedIcon sx={{ color: "#F59E0B" }} />,
                  bg: "#FFF9EB",
                  glow: "rgba(245, 158, 11, 0.2)",
                  desc: "Every donor is thoroughly checked and verified for your peace of mind.",
                  motion: { whileHover: { scale: 1.05, rotateY: 10 } }
                },
                {
                  title: "Premium Speed",
                  icon: <WaterDropIcon sx={{ color: "#E11D48" }} />,
                  bg: "#FEF2F2",
                  glow: "rgba(225, 29, 72, 0.2)",
                  desc: "Access the fastest selection of blood donors in your pinpoint locations.",
                  motion: { whileHover: { y: -20, scale: 1.02 } }
                },
                {
                  title: "Expert Support",
                  icon: <HubIcon sx={{ color: "#10B981" }} />,
                  bg: "#F0FDF4",
                  glow: "rgba(16, 185, 129, 0.2)",
                  desc: "Our dedicated team is here to guide you 24/7 through emergencies.",
                  motion: { whileHover: { rotateZ: -2, y: -10 } }
                },
                {
                  title: "Network Insights",
                  icon: <ArrowForwardIcon sx={{ color: "#3B82F6" }} />,
                  bg: "#EFF6FF",
                  glow: "rgba(59, 130, 246, 0.2)",
                  desc: "Get valuable real-time data to make informed life-saving decisions.",
                  motion: { whileHover: { rotateY: -10, scale: 1.05 } }
                }
              ].map((item, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, rotateY: i % 2 === 0 ? -15 : 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                    style={{ height: '100%', perspective: '1000px' }}
                    onMouseEnter={() => setHoveredWhyUs(i)}
                    {...item.motion}
                  >
                    <Box sx={{
                      bgcolor: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "40px",
                      p: 5,
                      textAlign: "center",
                      boxShadow: hoveredWhyUs === i
                        ? `0 40px 80px ${item.glow}`
                        : "0 10px 30px rgba(15, 23, 42, 0.04)",
                      border: "1px solid",
                      borderColor: hoveredWhyUs === i ? item.glow : "rgba(15, 23, 42, 0.08)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.95)",
                        "& .gradient-bg": {
                          opacity: 0.6,
                          transform: 'scale(1.5)'
                        },
                        "& .icon-box": {
                          transform: i === 1 ? 'translateY(-10px)' : 'scale(1.1) rotate(5deg)',
                          boxShadow: `0 20px 40px ${item.glow}`
                        }
                      }
                    }}>
                      {/* Hover Gradient Background */}
                      <Box
                        className="gradient-bg"
                        sx={{
                          position: 'absolute',
                          top: '-50%',
                          left: '-50%',
                          right: '-50%',
                          bottom: '-50%',
                          background: `radial-gradient(circle at center, ${item.glow} 0%, transparent 60%)`,
                          opacity: 0,
                          zIndex: -1,
                          transition: 'all 0.8s ease',
                          transform: 'scale(0.5)'
                        }}
                      />

                      <Box
                        className="icon-box"
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "24px",
                          bgcolor: item.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 4,
                          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                      >
                        {React.cloneElement(item.icon, { sx: { fontSize: 32, color: item.icon.props.sx.color } })}
                      </Box>
                      <Typography variant="h5" fontWeight={950} sx={{ color: "#0F172A", mb: 2, letterSpacing: -0.5 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: "#64748B", fontWeight: 600, lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* DONATION TRENDS (ADVANCED ANALYTICS) */}
        <DonationTrends />

        {/* Featured Properties Style - REQUESTS PREVIEW */}
        <Box sx={{
          py: 5,
          bgcolor: "transparent",
          position: 'relative',
          backgroundImage: 'linear-gradient(135deg, rgba(225, 29, 72, 0.02) 0%, rgba(15, 23, 42, 0.03) 100%)',
        }}>
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.1), transparent)'
          }} />

          <Container maxWidth="lg">
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 8 }}>
              <Box>
                <Typography variant="h3" fontWeight={950} sx={{ color: "#0F172A", letterSpacing: -2, mb: 1 }}>
                  Featured <Box component="span" sx={{ color: "#E11D48" }}>Requests</Box>
                </Typography>
                <Typography variant="h6" sx={{ color: "#64748B", fontWeight: 500 }}>
                  Handpicked urgent requirements just for you
                </Typography>
              </Box>
              <Button
                onClick={onRequestsClick}
                sx={{
                  color: "#E11D48",
                  fontWeight: 950,
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  letterSpacing: 1.5,
                  "&:hover": { bgcolor: "transparent", transform: "translateX(5px)" },
                  transition: "0.3s"
                }}
              >
                VIEW ALL REQUESTS
              </Button>
            </Stack>

            <Grid container spacing={4}>
              {(requests || []).slice(0, 3).map((req, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={req.id}>
                  <PremiumRequestCard req={req} index={i} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ADVANCED BIOLOGICAL INSIGHTS SECTION */}
        <Box sx={{ py: 5, bgcolor: "rgba(15, 23, 42, 0.02)" }}>
          <AdvancedInsights />
        </Box>

        {/* TOP DONORS SECTION */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography variant="h3" fontWeight={950} sx={{ color: "#0F172A", letterSpacing: -2, mb: 2 }}>
              Our <Box component="span" sx={{ color: "#E11D48" }}>Hero Donors</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: "#64748B", fontWeight: 500 }}>
              Meet the champions who save lives every day
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {featuredDonors.map((donor, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <PremiumDonorCard donor={donor} index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <LivePulseMap />

      {/* PREMIUM CTA (MATCHING SCREENSHOT 4) */}
      <Container maxWidth="lg" sx={{ mb: 15, mt: 20 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Box sx={{
            bgcolor: "#0F172A",
            borderRadius: "48px",
            p: { xs: 8, md: 15 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 60px 120px rgba(0,0,0,0.18)",
            backgroundImage: "radial-gradient(circle at 10% 10%, rgba(225, 29, 72, 0.1) 0%, transparent 40%), radial-gradient(circle at 90% 90%, rgba(59, 130, 246, 0.1) 0%, transparent 40%)"
          }}>
            <Box sx={{
              display: "inline-block",
              px: 2, py: 0.8,
              bgcolor: "rgba(225, 29, 72, 0.08)",
              borderRadius: "10px",
              color: "#E11D48",
              fontWeight: 950,
              fontSize: "0.75rem",
              letterSpacing: 2,
              mb: 4
            }}>
              SAVE A LIFE TODAY
            </Box>

            <Typography variant="h1" fontWeight={950} sx={{ color: "white", mb: 3, letterSpacing: -4, fontSize: { xs: "2.5rem", md: "4.5rem" } }}>
              Every Drop of <Box component="span" sx={{ color: "#E11D48" }}>Blood Matters</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.5)", mb: 10, maxWidth: 700, mx: "auto", lineHeight: 1.8, fontSize: "1.1rem" }}>
              Don't just search for a donor — become part of a life-saving community where <Box component="span" sx={{ color: "#E11D48" }}>heroes</Box> unite. Register today and make a difference.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={4} justifyContent="center">
              <Button
                onClick={onDonorRegisterClick}
                variant="contained"
                className="interactive"
                sx={{
                  bgcolor: "#E11D48",
                  color: "white",
                  px: 8, py: 2.5,
                  borderRadius: "16px",
                  fontWeight: 950,
                  fontSize: "1rem",
                  boxShadow: "0 20px 40px rgba(225, 29, 72, 0.3)",
                  "&:hover": { bgcolor: "#BE123C", transform: "translateY(-5px)" },
                  transition: "0.4s"
                }}
              >
                Become a Donor
              </Button>
              <Button
                onClick={onRequestCreateClick}
                variant="contained"
                className="interactive"
                sx={{
                  bgcolor: "#1E293B",
                  color: "white",
                  px: 8, py: 2.5,
                  borderRadius: "16px",
                  fontWeight: 950,
                  fontSize: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)", transform: "translateY(-5px)" },
                  transition: "0.4s"
                }}
              >
                Request Blood
              </Button>
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={4} justifyContent="center" sx={{ mt: 8 }}>
              {[
                { label: "Free Service", color: "#E11D48" },
                { label: "Verified Donors", color: "#E11D48" },
                { label: "24/7 Support", color: "#E11D48" }
              ].map((item, i) => (
                <Stack key={i} direction="row" spacing={1} alignItems="center">
                  <VerifiedIcon sx={{ color: item.color, fontSize: 18 }} />
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 800 }}>{item.label}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </motion.div>
      </Container>

    </>
  );
};

export default HomeTab;
