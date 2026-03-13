import React from "react";
import { Box, Container, Typography } from "@mui/material";
import HeroSection from "../HeroSection";
import StatsBar from "../StatsBar";
import SearchBar from "../SearchBar";
import RequestSection from "../RequestSection";
import DonorSection from "../DonorSection";

const HomeTab = ({
  onRegisterClick,
  onAboutClick,
  searchQuery,
  setSearchQuery,
  selectedBloodType,
  handleTypeClear,
}) => {
  return (
    <>
      <HeroSection
        onRegisterClick={onRegisterClick}
        onAboutClick={onAboutClick}
      />
      <Box sx={{ pt: 10 }}>
        <StatsBar />
        <Container maxWidth="xl" sx={{ py: 10 }}>
          <Box sx={{ mb: 10 }}>
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{ mb: 2, textAlign: "center", color: "#0F172A" }}
            >
              Find{" "}
              <Box component="span" sx={{ color: "#E11D48" }}>
                Quick
              </Box>{" "}
              Assistance
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#64748B",
                textAlign: "center",
                mb: 6,
                fontSize: "1.1rem",
              }}
            >
              Search our real-time database to connect with donors and active
              requests near you.
            </Typography>
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onNewRequestClick={onRegisterClick}
            />
          </Box>
          <Box sx={{ maxWidth: "1200px", ml: 14 }}>
            <RequestSection
              selectedBloodType={selectedBloodType}
              searchQuery={searchQuery}
              onTypeFilterClear={handleTypeClear}
              limit={4}
            />
          </Box>

          <Box sx={{ maxWidth: "1200px", ml: 14, mt: 15 }}>
            <DonorSection onRegisterClick={onRegisterClick} limit={4} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomeTab;
