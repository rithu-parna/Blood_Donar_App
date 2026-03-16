import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Divider,
  useScrollTrigger,
} from "@mui/material";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { motion } from "framer-motion";

const LandingHeader = ({ onRegisterClick, activePage, onPageChange }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", id: "home" },
    { label: "FIND DONOR", id: "donors" },
    { label: "REQUESTS", id: "requests" },
    { label: "ABOUT", id: "about" },
    { label: "CONTACT", id: "contact" },
  ];

  console.log(activePage, "actssssivePage");
  const isDarkPage = activePage === "about";
  const isLightPage =
    activePage !== "home" && !isDarkPage && activePage !== "customer";

  const textColor = isDarkPage ? "white" : isLightPage ? "#0F172A" : "white";
  const bgColor = isDarkPage
    ? "rgba(5, 5, 5, 0.8)"
    : isLightPage
      ? "rgba(255, 255, 255, 0.9)"
      : "transparent";
  const blur = isLightPage || isDarkPage ? "20px" : "none";

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1200,
        bgcolor: bgColor,
        backdropFilter: `blur(${blur})`,
        borderBottom: isLightPage ? "1px solid rgba(0,0,0,0.05)" : "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        py: scrolled ? 1.5 : 2.5,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            onClick={() => onPageChange("home")}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                bgcolor: "#E11D48",
                borderRadius: "50% 50% 50% 0",
                transform: "rotate(-45deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1.5,
                boxShadow: "0 4px 15px rgba(225, 29, 72, 0.4)",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: "white",
                  borderRadius: "50%",
                  transform: "rotate(45deg)",
                }}
              />
            </Box>
            <Typography
              variant="h5"
              fontWeight={900}
              sx={{ letterSpacing: -1.5, color: textColor }}
            >
              Blood
              <Typography
                component="span"
                variant="inherit"
                sx={{ color: "#E11D48" }}
              >
                Link
              </Typography>
            </Typography>
          </Box>

          {/* Navigation */}
          <Stack
            direction="row"
            spacing={5}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {menuItems.map((item) => (
              <Box
                key={item.id}
                onClick={() => onPageChange(item.id)}
                sx={{ position: "relative", cursor: "pointer" }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    color:
                      activePage === item.id
                        ? "#E11D48"
                        : textColor === "white"
                          ? "rgba(255,255,255,0.7)"
                          : "rgba(15, 23, 42, 0.7)",
                    transition: "all 0.3s",
                    fontSize: "0.8rem",
                    letterSpacing: 1.5,
                    "&:hover": {
                      color: activePage === item.id ? "#E11D48" : textColor,
                    },
                  }}
                >
                  {item.label}
                </Typography>
                {activePage === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    style={{
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      right: 0,
                      height: 3,
                      backgroundColor: "#E11D48",
                      borderRadius: 2,
                    }}
                  />
                )}
              </Box>
            ))}
            <Button
              variant="contained"
              onClick={onRegisterClick}
              sx={{
                bgcolor: "#E11D48",
                borderRadius: 2,
                px: 3,
                py: 1.2,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: 1,
                "&:hover": {
                  bgcolor: "#BE123C",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s",
                boxShadow: "0 8px 25px -5px rgba(225, 29, 72, 0.4)",
              }}
            >
              REGISTER / REQUEST
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingHeader;
