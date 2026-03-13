import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { motion, AnimatePresence } from "framer-motion";
import { Line, Bar } from "react-chartjs-2";
import StatCard from "../StatCard";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const DashboardView = ({
  lineData,
  lineOptions,
  barData,
  barOptions,
  hospitals,
  setActiveTab,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="dashboard"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Stats Row */}
        <Grid container spacing={2.5} sx={{ mb: 3 }}>
          {[
            {
              icon: <PeopleIcon />,
              label: "Total Donors",
              value: 24592,
              sub: "+124 Registered Today",
              color: "#dc2626",
            },
            {
              icon: <BloodtypeIcon />,
              label: "Units Available",
              value: 3042,
              sub: "Stock Updated 5m ago",
              color: "#4f46e5",
            },
            {
              icon: <WarningAmberIcon />,
              label: "Pending Requests",
              value: 142,
              sub: "8 Critical Emergencies",
              color: "#f59e0b",
            },
            {
              icon: <FavoriteIcon />,
              label: "Lives Saved",
              value: 82904,
              sub: "Since inception",
              color: "#16a34a",
            },
          ].map((s, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={s.label}>
              <StatCard {...s} delay={i * 0.08} />
            </Grid>
          ))}
        </Grid>

        {/* Charts Row */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div variants={itemVariants}>
              <Paper
                sx={{
                  p: 3.5,
                  borderRadius: 1,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                  border: "1px solid #e2e8f0",
                  background: "white",
                  height: 320,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: "#0f172a",
                        mb: 0.5,
                      }}
                    >
                      Donation & Request Trends
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}
                    >
                      10-month overview
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 3 }}>
                    {[
                      { label: "Donations", val: "4,285", color: "#dc2626" },
                      { label: "Requests", val: "5,102", color: "#f59e0b" },
                      { label: "Fulfilled", val: "84%", color: "#16a34a" },
                    ].map((m) => (
                      <Box key={m.label} sx={{ textAlign: "center" }}>
                        <Typography
                          sx={{
                            fontSize: 11,
                            color: "#94a3b8",
                            fontWeight: 600,
                            textTransform: "uppercase",
                          }}
                        >
                          {m.label}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 20, fontWeight: 900, color: m.color }}
                        >
                          {m.val}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ flex: 1, position: "relative" }}>
                  <Line data={lineData} options={lineOptions} />
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div variants={itemVariants}>
              <Paper
                sx={{
                  p: 3.5,
                  borderRadius: 1,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                  border: "1px solid #e2e8f0",
                  height: 320,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: "#0f172a",
                        mb: 0.5,
                      }}
                    >
                      Blood Inventory
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}
                    >
                      Available units by group
                    </Typography>
                  </Box>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "#dc262630",
                      color: "#dc2626",
                      textTransform: "none",
                      borderRadius: 100,
                      fontWeight: 700,
                      fontSize: 12,
                      px: 2,
                      "&:hover": { borderColor: "#dc2626", bgcolor: "#fef2f2" },
                    }}
                  >
                    Update
                  </Button>
                </Box>
                <Box sx={{ flex: 1, position: "relative" }}>
                  <Bar data={barData} options={barOptions} />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div variants={itemVariants}>
          <Grid container spacing={2.5} sx={{ mb: 3 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Paper
                sx={{
                  p: 3.5,
                  borderRadius: 1,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: "#0f172a",
                        mb: 0.5,
                      }}
                    >
                      Recent Requests
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}
                    >
                      Hospitals requiring urgent blood units
                    </Typography>
                  </Box>
                </Box>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow
                        sx={{
                          "& th": {
                            borderBottom: "2px solid #f8fafc",
                            color: "#94a3b8",
                            fontWeight: 700,
                            fontSize: 11,
                            pb: 2,
                            textTransform: "uppercase",
                            letterSpacing: 0.8,
                          },
                        }}
                      >
                        {[
                          "#",
                          "Hospital",
                          "Requirement",
                          "Units",
                          "Status",
                        ].map((h) => (
                          <TableCell
                            key={h}
                            align={
                              ["Requirement", "Units", "Status"].includes(h)
                                ? "right"
                                : "left"
                            }
                          >
                            {h}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {hospitals.map((row, i) => (
                        <TableRow
                          key={row.name + i}
                          hover
                          sx={{
                            "& td": {
                              borderBottom: "1px solid #f8fafc",
                              py: 2,
                              fontSize: 13,
                              color: "#1e293b",
                              fontWeight: 600,
                            },
                            transition: "background 0.2s",
                            "&:hover": { bgcolor: "#fef2f2" },
                            cursor: "pointer",
                          }}
                        >
                          <TableCell
                            sx={{
                              color: "#94a3b8 !important",
                              fontWeight: "700 !important",
                              width: 40,
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: 2,
                                  bgcolor: "#fef2f2",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <LocalHospitalIcon
                                  sx={{ fontSize: 16, color: "#dc2626" }}
                                />
                              </Box>
                              {row.name}
                            </Box>
                          </TableCell>
                          <TableCell align="right">
                            <Chip
                              label={row.need}
                              size="small"
                              sx={{
                                bgcolor: "#fef2f2",
                                color: "#dc2626",
                                fontWeight: 800,
                                borderRadius: 100,
                                fontSize: 11,
                              }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Typography sx={{ fontWeight: 900, fontSize: 15 }}>
                              {row.units}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Chip
                              label={row.status}
                              size="small"
                              sx={{
                                bgcolor:
                                  row.status === "Pending"
                                    ? "#fffbeb"
                                    : "#dcfce7",
                                color:
                                  row.status === "Pending"
                                    ? "#d97706"
                                    : "#16a34a",
                                fontWeight: 800,
                                borderRadius: 100,
                                fontSize: 11,
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                sx={{
                  p: 3.5,
                  borderRadius: 1,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 3,
                  }}
                >
                  Quick Actions
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 2,
                  }}
                >
                  {[
                    {
                      label: "Issue Blood",
                      icon: <BloodtypeIcon />,
                      color: "#dc2626",
                      tab: "requests",
                    },
                    {
                      label: "Add Donor",
                      icon: <PeopleIcon />,
                      color: "#4f46e5",
                      tab: "donors",
                    },
                    {
                      label: "Blood Camp",
                      icon: <FavoriteIcon />,
                      color: "#16a34a",
                      tab: "camps",
                    },
                    {
                      label: "Reports",
                      icon: <TrendingUpIcon />,
                      color: "#f59e0b",
                      tab: "dashboard",
                    },
                  ].map((action) => (
                    <Button
                      key={action.label}
                      fullWidth
                      onClick={() => setActiveTab(action.tab)}
                      sx={{
                        flexDirection: "column",
                        gap: 1,
                        py: 2.5,
                        borderRadius: 4,
                        bgcolor: `${action.color}08`,
                        color: action.color,
                        border: "1px solid transparent",
                        transition: "all 0.2s",
                        "&:hover": {
                          bgcolor: `${action.color}15`,
                          borderColor: `${action.color}30`,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {React.cloneElement(action.icon, {
                        sx: { fontSize: 24 },
                      })}
                      <Typography
                        sx={{
                          fontSize: 11,
                          fontWeight: 800,
                          textTransform: "none",
                        }}
                      >
                        {action.label}
                      </Typography>
                    </Button>
                  ))}
                </Box>
                <Box
                  sx={{
                    mt: 4,
                    p: 2,
                    borderRadius: 3,
                    bgcolor: "#f8fafc",
                    border: "1px dashed #e2e8f0",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#94a3b8",
                      fontWeight: 700,
                      mb: 1.5,
                      textTransform: "uppercase",
                    }}
                  >
                    System Health
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: 12, fontWeight: 600 }}>
                      API Status
                    </Typography>
                    <Chip
                      label="Operational"
                      size="small"
                      sx={{
                        height: 20,
                        fontSize: 10,
                        bgcolor: "#dcfce7",
                        color: "#16a34a",
                        fontWeight: 700,
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DashboardView;
