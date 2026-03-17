import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import SearchBar from "../SearchBar";
import DonorSection from "../DonorSection";

const DonorsTab = ({ searchQuery, setSearchQuery, onRegisterClick, donors }) => {
  const [bloodType, setBloodType] = useState("All Blood Types");
  const [urgency, setUrgency] = useState("All Urgency");
  const [district, setDistrict] = useState("All Districts");

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration consistent with HomeTab */}
      <Box sx={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        opacity: 0.3,
        backgroundImage: `radial-gradient(#0F172A 0.5px, transparent 0.5px)`,
        backgroundSize: '32px 32px',
        zIndex: -1
      }} />
      <Container maxWidth="xl" sx={{ pt: 20, pb: 10 }}>
        <Box sx={{ mb: 6, maxWidth: "1200px", ml: 14 }}>
          <Typography
            variant="h2"
            fontWeight={950}
            sx={{ color: "#0F172A", letterSpacing: -2, mb: 2 }}
          >
            Registered{" "}
            <Box component="span" sx={{ color: "#E11D48" }}>
              Donors
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            Connect with our community of local life-savers.
          </Typography>
        </Box>
        <Box sx={{ mb: 6 }}>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onButtonClick={onRegisterClick}
            buttonLabel="+ Register as Donor"
            bloodType={bloodType}
            onBloodTypeChange={setBloodType}
            urgency={urgency}
            onUrgencyChange={setUrgency}
          />
        </Box>
        <Box sx={{ maxWidth: "1200px", ml: 14 }}>
          <DonorSection
            onRegisterClick={onRegisterClick}
            searchQuery={searchQuery}
            bloodType={bloodType}
            district={district}
            onDistrictChange={setDistrict}
            donors={donors}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default DonorsTab;
