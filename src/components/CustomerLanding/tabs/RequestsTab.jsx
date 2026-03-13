import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SearchBar from "../SearchBar";
import RequestSection from "../RequestSection";

const RequestsTab = ({
  searchQuery,
  setSearchQuery,
  selectedBloodType,
  handleTypeClear,
  onRegisterClick,
}) => {
  return (
    <Container maxWidth="xl" sx={{ pt: 20, pb: 10 }}>
      <Box sx={{ mb: 8, maxWidth: "1200px", ml: 14 }}>
        <Typography
          variant="h2"
          fontWeight={950}
          sx={{ color: "#0F172A", letterSpacing: -2, mb: 2 }}
        >
          Active Blood
          <Box component="span" sx={{ color: "#E11D48" }}>
            Requests
          </Box>
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Browse and respond to urgent blood requirements in your area.
        </Typography>
      </Box>
      <Box sx={{ mb: 6 }}>
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
      />
      </Box>
    </Container>
  );
};

export default RequestsTab;
