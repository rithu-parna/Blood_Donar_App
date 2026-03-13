import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Select,
  MenuItem,
  Chip,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import RefreshIcon from "@mui/icons-material/Refresh";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import RequestCard from "./RequestCard";
import { initialRequests } from "./constants";

const RequestSection = ({
  selectedBloodType,
  searchQuery,
  onTypeFilterClear,
  limit,
}) => {
  const [viewMode, setViewMode] = useState("grid");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Urgency");
  const [requests] = useState(initialRequests);

  const filteredRequests = useMemo(() => {
    return requests.filter((req) => {
      const matchesUrgency =
        filter === "All" || req.urgency.toUpperCase() === filter.toUpperCase();
      const matchesBloodType =
        selectedBloodType === "All" || req.type === selectedBloodType;
      const matchesSearch =
        !searchQuery ||
        req.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.type.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesUrgency && matchesBloodType && matchesSearch;
    });
  }, [requests, filter, selectedBloodType, searchQuery]);

  const sortedRequests = useMemo(() => {
    const sorted = [...filteredRequests].sort((a, b) => {
      if (sortBy === "Units Needed") return b.units - a.units;
      if (sortBy === "Urgency") {
        const priority = { CRITICAL: 3, HIGH: 2, NORMAL: 1 };
        return priority[b.urgency] - priority[a.urgency];
      }
      return 0;
    });
    return limit ? sorted.slice(0, limit) : sorted;
  }, [filteredRequests, sortBy, limit]);

  return (
    <Box mb={10}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2,
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h4"
            fontWeight={900}
            sx={{ color: "#0F172A", fontSize: "1.8rem", letterSpacing: -0.5 }}
          >
            Active{" "}
            <Box component="span" sx={{ color: "#E11D48" }}>
              Requests
            </Box>
          </Typography>
          <Box
            sx={{
              bgcolor: "#E2E8F0",
              px: 1.5,
              py: 0.4,
              borderRadius: 5,
              color: "#64748B",
              fontSize: "0.8rem",
              fontWeight: 700,
            }}
          >
            {sortedRequests.length} results
          </Box>
        </Box>

        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button
            variant="outlined"
            startIcon={<RefreshIcon sx={{ fontSize: 18 }} />}
            sx={{
              borderColor: "#E2E8F0",
              color: "#64748B",
              textTransform: "none",
              borderRadius: 2,
              fontWeight: 600,
              fontSize: "0.85rem",
              px: 2,
              py: 0.6,
              "&:hover": { borderColor: "#CBD5E1", bgcolor: "transparent" },
            }}
          >
            Refresh
          </Button>

          <Box
            sx={{
              display: "flex",
              border: "1px solid #E2E8F0",
              borderRadius: 2,
              p: 0.3,
            }}
          >
            <IconButton
              onClick={() => setViewMode("grid")}
              size="small"
              sx={{
                bgcolor: viewMode === "grid" ? "#E11D48" : "transparent",
                color: viewMode === "grid" ? "white" : "#94A3B8",
                borderRadius: 1.5,
                "&:hover": {
                  bgcolor: viewMode === "grid" ? "#E11D48" : "rgba(0,0,0,0.02)",
                },
              }}
            >
              <GridViewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => setViewMode("list")}
              size="small"
              sx={{
                bgcolor: viewMode === "list" ? "#E11D48" : "transparent",
                color: viewMode === "list" ? "white" : "#94A3B8",
                borderRadius: 1.5,
                "&:hover": {
                  bgcolor: viewMode === "list" ? "#E11D48" : "rgba(0,0,0,0.02)",
                },
              }}
            >
              <ViewListIcon fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      {/* Filter and Sort Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", md: "center" },
          gap: 2,
          mb: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            bgcolor: "white",
            p: 0.6,
            borderRadius: 2,
            boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
            width: "fit-content",
          }}
        >
          {["All", "Critical", "High", "Normal"].map((f) => (
            <Button
              key={f}
              onClick={() => setFilter(f)}
              startIcon={
                f !== "All" ? (
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor:
                        f === "Critical"
                          ? "#E11D48"
                          : f === "High"
                            ? "#F59E0B"
                            : "#10B981",
                    }}
                  />
                ) : null
              }
              sx={{
                bgcolor: filter === f ? "#E11D48" : "transparent",
                color: filter === f ? "white" : "#64748B",
                borderRadius: 1.5,
                textTransform: "none",
                px: 2.5,
                py: 0.6,
                fontSize: "0.85rem",
                fontWeight: 600,
                "&:hover": {
                  bgcolor: filter === f ? "#E11D48" : "rgba(0,0,0,0.02)",
                },
              }}
            >
              {f}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" color="text.secondary" fontWeight={600}>
            Sort by:
          </Typography>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            variant="standard"
            disableUnderline
            sx={{
              fontWeight: 600,
              color: "#475569",
              fontSize: "0.85rem",
              bgcolor: "#F8FAFC",
              px: 1.5,
              py: 0.6,
              borderRadius: 1.5,
              minWidth: 120,
            }}
          >
            <MenuItem value="Urgency">Urgency</MenuItem>
            <MenuItem value="Units Needed">Units</MenuItem>
          </Select>
        </Box>
      </Box>

      <Box sx={{ minHeight: 400 }}>
        <AnimatePresence mode="popLayout" initial={false}>
          {sortedRequests.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Box
                sx={{
                  py: 15,
                  textAlign: "center",
                  bgcolor: "white",
                  borderRadius: 10,
                  border: "1px dashed #E2E8F0",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.02)",
                }}
              >
                <Typography
                  variant="h5"
                  color="#0F172A"
                  fontWeight={900}
                  mb={2}
                >
                  No matching requests found.
                </Typography>
                <Typography
                  variant="body1"
                  color="#64748B"
                  fontWeight={600}
                  mb={4}
                >
                  Try adjusting your filters or search query.
                </Typography>
                <Button
                  onClick={() => {
                    setFilter("All");
                    onTypeFilterClear();
                  }}
                  variant="outlined"
                  sx={{
                    color: "#E11D48",
                    borderColor: "#E11D48",
                    fontWeight: 900,
                    borderRadius: 4,
                    px: 5,
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "rgba(225, 29, 72, 0.05)",
                      borderColor: "#BE123C",
                    },
                  }}
                >
                  Clear All Filters
                </Button>
              </Box>
            </motion.div>
          ) : viewMode === "list" ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {sortedRequests.map((req, idx) => (
                <motion.div
                  key={req.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <RequestCard req={req} viewMode="list" />
                </motion.div>
              ))}
            </Box>
          ) : (
            <Grid container spacing={4}>
              {sortedRequests.map((req, idx) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={req.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <RequestCard req={req} viewMode="grid" />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default RequestSection;
