import React, { useRef } from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BoltIcon from "@mui/icons-material/Bolt";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
import SpeedIcon from "@mui/icons-material/Speed";
import HubIcon from "@mui/icons-material/Hub";
import donation1 from "../../../assets/about/donation1.png";
import donation2 from "../../../assets/about/donation2.png";
import donation3 from "../../../assets/about/donation3.png";

const BentoCard = ({
  title,
  subtitle,
  icon: Icon,
  span = 1,
  delay = 0,
  color = "#E11D48",
  bgImg,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    style={{ height: "100%", gridColumn: `span ${span}` }}
  >
    <Box
      sx={{
        height: "100%",
        p: 4,
        borderRadius: 8,
        bgcolor: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "all 0.4s ease",
        "&:hover": {
          borderColor: `${color}80`,
          bgcolor: "rgba(255, 255, 255, 0.05)",
          transform: "translateY(-8px)",
          "& .card-bg": { transform: "scale(1.1)" },
          "& .icon-box": {
            transform: "scale(1.1) rotate(5deg)",
            bgcolor: color,
          },
        },
      }}
    >
      {bgImg && (
        <Box
          className="card-bg"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            opacity: 0.3,
            transition: "transform 0.8s ease",
            filter: "grayscale(100%)",
          }}
        />
      )}

      <Box
        className="icon-box"
        sx={{
          width: 50,
          height: 50,
          borderRadius: 3,
          bgcolor: "rgba(255,255,255,0.1)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          transition: "all 0.4s ease",
        }}
      >
        <Icon sx={{ fontSize: 28 }} />
      </Box>

      <Typography variant="h5" fontWeight={900} sx={{ color: "white", mb: 1 }}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.5)",
          fontWeight: 500,
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  </motion.div>
);

const AboutTab = ({ onRegisterClick }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box
      sx={{
        bgcolor: "#050505", // Ultra dark background
        color: "white",
        pt: { xs: 15, md: 20 },
        pb: 20,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          backgroundColor: "#E11D48",
          scaleX,
          transformOrigin: "0%",
          zIndex: 2000,
        }}
      />

      {/* Ambient Background Effects */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: 800,
            height: 800,
            background:
              "radial-gradient(circle, rgba(225, 29, 72, 0.15) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "-10%",
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(15, 23, 42, 0.2) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* 1. THE VISION SECTION */}
        <Grid container spacing={10} alignItems="center" sx={{ mb: 30 }}>
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "#E11D48",
                  fontWeight: 900,
                  letterSpacing: 8,
                  mb: 3,
                  display: "block",
                }}
              >
                OUR MISSION
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 950,
                  letterSpacing: -5,
                  lineHeight: 0.9,
                  fontSize: { xs: "3.5rem", md: "6rem", lg: "8rem" },
                  mb: 6,
                }}
              >
                Engineering <br />
                <Box
                  component="span"
                  sx={{
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                  }}
                >
                  Human
                </Box>{" "}
                <br />
                Resilience.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  maxWidth: 700,
                  mb: 10,
                }}
              >
                BloodLink is a high-frequency coordinate network built to
                eliminate wait times in medical logistics. We bridge the gap
                between global altruism and local emergency.
              </Typography>
              <Stack direction="row" spacing={3}>
                <Button
                  variant="contained"
                  onClick={onRegisterClick}
                  sx={{
                    bgcolor: "#E11D48",
                    color: "white",
                    px: 8,
                    py: 2.5,
                    borderRadius: 0,
                    fontWeight: 950,
                    fontSize: "1.2rem",
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                    "&:hover": { bgcolor: "white", color: "black" },
                    transition: "all 0.3s",
                  }}
                >
                  ACTIVATE NOW
                </Button>
                <Button
                  sx={{
                    fontWeight: 900,
                    color: "white",
                    px: 4,
                    letterSpacing: 2,
                  }}
                >
                  PROTOCOL SECURE →
                </Button>
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{ position: "relative" }}>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1/1",
                    borderRadius: "40% 60% 70% 30% / 40% 50% 60% 70%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    overflow: "hidden",
                    position: "relative",
                    bgcolor: "rgba(255,255,255,0.02)",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${donation1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.6,
                      filter: "grayscale(100%)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <FavoriteIcon
                      sx={{
                        fontSize: 120,
                        color: "#E11D48",
                        filter: "drop-shadow(0 0 30px #E11D48)",
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        {/* 2. THE BENTO GRID FEATURES */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            gridAutoRows: "minmax(250px, auto)",
            gap: 3,
            mb: 30,
          }}
        >
          <BentoCard
            span={2}
            title="Neural Connectivity"
            subtitle="Matches donors in milliseconds using advanced nearest-neighbor coordinate synthesis."
            icon={HubIcon}
            delay={0.1}
            bgImg={donation2}
          />
          <BentoCard
            title="Instant Sync"
            subtitle="Zero latency alerts for critical emergencies."
            icon={BoltIcon}
            delay={0.2}
            color="#F59E0B"
          />
          <BentoCard
            title="Absolute Privacy"
            subtitle="Military-grade encryption for donor data."
            icon={SecurityIcon}
            delay={0.3}
            color="#10B981"
          />
          <BentoCard
            title="24/7 Monitoring"
            subtitle="Live tracking of hospital blood bank levels."
            icon={SpeedIcon}
            delay={0.4}
          />
          <BentoCard
            span={2}
            title="Global Ecosystem"
            subtitle="Extending the reach of human kindness across national borders through specialized gRPC protocols."
            icon={PublicIcon}
            delay={0.5}
            color="#3B82F6"
            bgImg={donation3}
          />
          <BentoCard
            title="Verified Hubs"
            subtitle="Rigorous auditing for every facility."
            icon={SpeedIcon}
            delay={0.6}
          />
        </Box>

        {/* 3. SCROLL-DRIVEN STATS (Animated Counters) */}
        <Box
          sx={{
            py: 15,
            borderY: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            gap: 10,
            mb: 30,
            bgcolor: "rgba(255,255,255,0.01)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.1,
              pointerEvents: "none",
              background:
                "linear-gradient(90deg, transparent, #E11D48, transparent)",
            }}
          />
          {[
            { val: "99.9", label: "Uptime Protocol", suffix: "%" },
            { val: "15", label: "Avg Response", suffix: "m" },
            { val: "10", label: "Verified Heroes", suffix: "K+" },
            { val: "24", label: "Global Node Live", suffix: "/7" },
          ].map((stat, i) => (
            <Box key={i} sx={{ textAlign: "center", position: "relative" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <Typography
                  variant="h2"
                  fontWeight={950}
                  sx={{
                    letterSpacing: -4,
                    color: "white",
                    textShadow: "0 0 30px rgba(225, 29, 72, 0.4)",
                  }}
                >
                  <Box component="span" sx={{ color: "#E11D48" }}>
                    {stat.val}
                  </Box>
                  <Box component="span" sx={{ fontSize: "2rem", ml: 0.5 }}>
                    {stat.suffix}
                  </Box>
                </Typography>
                <Typography
                  variant="overline"
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 800,
                    letterSpacing: 4,
                    display: "block",
                    mt: 1,
                  }}
                >
                  {stat.label}
                </Typography>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* 5. THE ULTIMATE CTA */}
        <Box
          sx={{
            position: "relative",
            py: 10,
            bgcolor: "rgba(225,29,72,0.02)",
            borderRadius: 12,
            textAlign: "center",
            border: "1px solid rgba(225,29,72,0.1)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-100%",
              left: "-20%",
              width: "140%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(225, 29, 72, 0.05) 0%, transparent 70%)",
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h1"
              fontWeight={950}
              sx={{ letterSpacing: -4, mb: 4, lineHeight: 1 }}
            >
              Become Infinite.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.5)",
                mb: 10,
                maxWidth: 600,
                mx: "auto",
                fontWeight: 500,
              }}
            >
              Join 10,000+ elite lifesavers and start your journey as a hero
              today. Seconds count. Hearts wait.
            </Typography>

            <Button
              variant="contained"
              onClick={onRegisterClick}
              sx={{
                bgcolor: "#E11D48",
                color: "white",
                px: 12,
                py: 3.5,
                borderRadius: 0,
                fontWeight: 950,
                fontSize: "1.4rem",
                clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)",
                boxShadow: "0 40px 80px rgba(225, 29, 72, 0.3)",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                  transform: "scale(1.02)",
                },
                transition: "all 0.4s ease",
              }}
            >
              INITIATE REGISTRATION
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutTab;
