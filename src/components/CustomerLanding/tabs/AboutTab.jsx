import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import donationHero from "../../../assets/about/donation1.png";
import missionImg from "../../../assets/about/donation2.png";

const CountingNumber = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const numericValue = parseInt(value);
    const controls = animate(count, numericValue, {
      duration: 2.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value]);

  useEffect(() => {
    return rounded.onChange((latest) => setDisplay(latest));
  }, [rounded]);

  return <>{display}{suffix}</>;
};

const PillarCard = ({ icon: Icon, title, subtitle, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Box
      className="interactive"
      sx={{
        p: 5,
        height: "100%",
        bgcolor: "white",
        borderRadius: 8,
        boxShadow: "0 20px 60px rgba(0,0,0,0.03)",
        textAlign: "center",
        border: "1px solid rgba(0,0,0,0.02)",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 40px 80px rgba(225, 29, 72, 0.08)",
          "& .icon-bg": { bgcolor: "#E11D48", color: "white" }
        },
      }}
    >
      <Box
        className="icon-bg"
        sx={{
          width: 54,
          height: 54,
          borderRadius: 2.5,
          bgcolor: "rgba(225, 29, 72, 0.05)",
          color: "#E11D48",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 4,
          transition: "0.3s"
        }}
      >
        <Icon sx={{ fontSize: 26 }} />
      </Box>
      <Typography variant="h6" fontWeight={950} sx={{ color: "#0F172A", mb: 2, letterSpacing: -0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.6, fontSize: "0.85rem" }}>
        {subtitle}
      </Typography>
    </Box>
  </motion.div>
);

const TeamMember = ({ name, role, img, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Box sx={{ textAlign: "center" }}>
      <Box
        className="interactive"
        sx={{
          width: "100%",
          aspectRatio: "1/1.2",
          overflow: "hidden",
          borderRadius: 8,
          mb: 3,
          bgcolor: "#F1F5F9",
          position: "relative",
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          cursor: "none"
        }}
      >
        <Box
          component="img"
          src={img}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(100%)",
            transition: "0.5s",
            "&:hover": { filter: "grayscale(0%)", transform: "scale(1.05)" }
          }}
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"; }}
        />
      </Box>
      <Typography variant="h6" fontWeight={950} sx={{ color: "#0F172A", mb: 0.5 }}>{name}</Typography>
      <Typography variant="caption" sx={{ color: "#E11D48", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1 }}>{role}</Typography>
    </Box>
  </motion.div>
);

const AboutTab = () => {
  return (
    <Box sx={{ bgcolor: "transparent", color: "#1E293B", overflow: "hidden" }}>


      {/* 1. HERO BANNER */}
      <Box
        sx={{
          height: { xs: "50vh", md: "75vh" },
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${donationHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: 4
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box sx={{ textAlign: "center", maxWidth: 900 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 950,
                color: "white",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                letterSpacing: -2,
                lineHeight: 1,
                mb: 3
              }}
            >
              The Nation's Most Trusted <br />
              <Box component="span" sx={{ color: "#E11D48" }}>Blood Donor Network</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 400, fontSize: "1.1rem" }}>
              Saving lives through rapid coordination, secure protocols, and a community of verified heroes.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* 2. STATS SECTION */}
      <Box
        sx={{
          bgcolor: "#0F172A",
          py: 0,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "25%",
            width: "1px",
            height: "100%",
            bgcolor: "rgba(255,255,255,0.05)"
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: "25%",
            width: "1px",
            height: "100%",
            bgcolor: "rgba(255,255,255,0.05)"
          }
        }}
      >
        <Box sx={{ position: "absolute", top: 0, left: "50%", width: "1px", height: "100%", bgcolor: "rgba(255,255,255,0.05)" }} />
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            {[
              { val: "1000", suffix: "+", label: "SUCCESSFUL DONATIONS" },
              { val: "2500", suffix: "+", label: "REGISTERED HEROES" },
              { val: "120", suffix: "+", label: "HOSPITAL NODES" },
              { val: "10", suffix: "+", label: "YEARS OF TRUST" }
            ].map((stat, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ backgroundColor: "rgba(225, 29, 72, 0.08)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="interactive"
                  style={{ padding: "50px 20px", textAlign: "center", transition: "all 0.4s ease" }}
                >
                  <Typography variant="h3" fontWeight={850} sx={{ color: "white", mb: 1, letterSpacing: -2 }}>
                    <CountingNumber value={stat.val} suffix={stat.suffix} />
                  </Typography>
                  <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 800, letterSpacing: 2 }}>
                    {stat.label}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pt: 15, pb: 15 }}>

        {/* 3. MISSION SECTION */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 20 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: 6,
                  overflow: "hidden",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.1)",
                  border: "4px solid white"
                }}
              >
                <Box
                  className="interactive"
                  component="img"
                  src={missionImg}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=1000"; }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Typography variant="subtitle2" sx={{ color: "#E11D48", fontWeight: 900, letterSpacing: 3, mb: 1.5, textTransform: "uppercase" }}>
                OUR MISSION
              </Typography>
              <Typography variant="h3" fontWeight={950} sx={{ color: "#0F172A", mb: 4, letterSpacing: -1 }}>
                Delivering Reliable <br />
                Life-Saving Solutions in <br />
                <Box component="span" sx={{ color: "#E11D48" }}>Every Second.</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: "#64748B", mb: 6, lineHeight: 1.8, fontSize: "1rem" }}>
                At BloodLink, our mission is to provide a seamless and secure platform that connects hospitals and individuals with a vast network of donors. We are committed to bridging the gap between life-saving requirements and voluntary contributions with integrity.
              </Typography>

              <Grid container spacing={3}>
                {[
                  "Donor-Centered Hub", "Verified Blood Packs", "Secure Data Privacy", "Real-Time Tracking", "Military-Grade Sync", "24/7 Rapid Response"
                ].map((text, i) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={i}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }} className="interactive">
                      <CheckCircleOutlineIcon sx={{ color: "#E11D48", fontSize: 20 }} />
                      <Typography variant="body2" fontWeight={800} sx={{ color: "#1E293B", fontSize: "0.85rem" }}>{text}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* 4. PILLARS OF EXCELLENCE */}
        <Box sx={{ mb: 20 }}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography variant="subtitle2" sx={{ color: "#E11D48", fontWeight: 900, mb: 1.5, letterSpacing: 4, textTransform: "uppercase" }}>
              OUR VALUES
            </Typography>
            <Typography variant="h2" fontWeight={950} sx={{ color: "#0F172A", letterSpacing: -2 }}>
              The Pillars of Excellence
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <PillarCard
                icon={BloodtypeIcon}
                title="Verified Donor Pool"
                subtitle="Every donor goes through a rigorous vetting process to ensure medical standards and reliability are consistently met."
                delay={0.1}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <PillarCard
                icon={SecurityIcon}
                title="Absolute Privacy"
                subtitle="We leverage end-to-end encryption to protect sensitive donor and recipient data from unauthorized access."
                delay={0.2}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <PillarCard
                icon={TrendingUpIcon}
                title="Result-Driven Matching"
                subtitle="Our platform tracks donor locations and blood types in real-time to ensure the fastest matching possible."
                delay={0.3}
              />
            </Grid>
          </Grid>
        </Box>

        {/* 5. MEET THE ELITE */}
        <Box>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography variant="subtitle2" sx={{ color: "#E11D48", fontWeight: 900, mb: 1.5, letterSpacing: 4, textTransform: "uppercase" }}>
              OUR TEAM
            </Typography>
            <Typography variant="h2" fontWeight={950} sx={{ color: "#0F172A", letterSpacing: -2 }}>
              Meet The Elite
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { name: "Ashik Usman", role: "National Founder", img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400" },
              { name: "Abdul Rahman", role: "Network Director", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400" },
              { name: "Mohammed Ali", role: "Medical Consultant", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
              { name: "Fatima Hassan", role: "Communications Lead", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" }
            ].map((member, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <TeamMember {...member} delay={i * 0.1} />
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default AboutTab;
