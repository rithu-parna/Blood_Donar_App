import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Button,
    TextField,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ForumIcon from '@mui/icons-material/Forum';

const ContactCard = ({ icon: Icon, title, value, subtitle, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: 4,
                bgcolor: "#F8FAFC",
                border: "1px solid transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                    bgcolor: "white",
                    boxShadow: "0 10px 25px rgba(225, 29, 72, 0.08)",
                    borderColor: "rgba(225, 29, 72, 0.1)",
                    transform: "translateX(8px)",
                },
            }}
        >
            <Box
                sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2.5,
                    bgcolor: "rgba(225, 29, 72, 0.08)",
                    color: "#E11D48",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                }}
            >
                <Icon sx={{ fontSize: 20 }} />
            </Box>
            <Box>
                <Typography
                    variant="caption"
                    sx={{
                        color: "#64748B",
                        fontWeight: 700,
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                        fontSize: "0.65rem",
                        display: "block",
                        mb: 0.2,
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="body1" fontWeight={800} sx={{ color: "#0F172A", fontSize: "0.95rem" }}>
                    {value}
                </Typography>
                {subtitle && (
                    <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 600, fontSize: "0.7rem" }}>
                        {subtitle}
                    </Typography>
                )}
            </Box>
        </Box>
    </motion.div>
);

const ContactTab = () => {
    return (
        <Box sx={{ bgcolor: "#FFF5F5", pt: { xs: 12, md: 18 }, pb: 10 }}>
            {/* Background Glow */}
            <Box sx={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
                <Box sx={{ position: "absolute", top: "10%", right: "-5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(225, 29, 72, 0.04) 0%, transparent 70%)", filter: "blur(100px)" }} />
            </Box>

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={6} alignItems="flex-start">
                    {/* Left Side: 6/12 basis */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h4" fontWeight={900} sx={{ color: "#0F172A", mb: 1.5, letterSpacing: -1.5 }}>
                                Get in <Box component="span" sx={{ color: "#E11D48" }}>Touch</Box>
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#64748B", maxWidth: 450, lineHeight: 1.6, fontSize: "0.9rem" }}>
                                Our medical coordination team is available 24/7 to assist with emergency requests and donation inquiries. Reach out to us through any channel below.
                            </Typography>
                        </Box>

                        <Stack spacing={2}>
                            <ContactCard
                                icon={PhoneInTalkIcon}
                                title="Emergency Line / WhatsApp"
                                value="+91 9876 543 210"
                                subtitle="Available Sun – Thu, 8:00 AM – 5:00 PM"
                                delay={0.1}
                            />
                            <ContactCard
                                icon={MailOutlineIcon}
                                title="Support Email"
                                value="support@bloodlink.org"
                                subtitle="Direct response within 24 hours"
                                delay={0.2}
                            />
                            <ContactCard
                                icon={LocationOnIcon}
                                title="Our Central Hub"
                                value="Phase 3, Technopark, Trivandrum"
                                subtitle="Kerala, India - 695581"
                                delay={0.3}
                            />
                            <ContactCard
                                icon={AccessTimeIcon}
                                title="Regular Hours"
                                value="Mon - Fri: 08:00 - 17:00"
                                subtitle="Emergency Support: 24/7"
                                delay={0.4}
                            />
                        </Stack>

                        <Box sx={{ mt: 5 }}>
                            <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 800, mb: 2, display: "block", letterSpacing: 1.5 }}>
                                SOCIAL NETWORK
                            </Typography>
                            <Stack direction="row" spacing={1.5}>
                                {[WhatsAppIcon, MailOutlineIcon, ForumIcon].map((Icon, i) => (
                                    <IconButton
                                        key={i}
                                        size="small"
                                        sx={{
                                            bgcolor: "white",
                                            color: "#E11D48",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                            "&:hover": { bgcolor: "#E11D48", color: "white" },
                                            transition: "0.3s"
                                        }}
                                    >
                                        <Icon fontSize="small" />
                                    </IconButton>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Right Side: 6/12 basis */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Box
                                sx={{
                                    bgcolor: "#0F172A",
                                    p: { xs: 4, md: 5 },
                                    borderRadius: 6,
                                    boxShadow: "0 30px 60px -15px rgba(225, 29, 72, 0.2)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Brand Accent Bar */}
                                <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: 5, bgcolor: "#E11D48" }} />

                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                                    <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: "rgba(225, 29, 72, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <ForumIcon sx={{ color: "#E11D48", fontSize: 20 }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" fontWeight={800} sx={{ color: "white", fontSize: "1.1rem" }}>
                                            Send an Inquiry
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
                                            Instant matching for urgent requests.
                                        </Typography>
                                    </Box>
                                </Box>

                                <Stack spacing={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="caption" sx={{ color: "#E11D48", fontWeight: 800, mb: 1, display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: 1 }}>
                                                Full Name
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                placeholder="John Doe"
                                                variant="standard"
                                                InputProps={{
                                                    disableUnderline: true,
                                                    sx: { color: "white", bgcolor: "rgba(255,255,255,0.06)", px: 2, py: 1, borderRadius: 1.5, fontSize: "0.85rem", border: "1px solid rgba(255,255,255,0.08)" }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="caption" sx={{ color: "#E11D48", fontWeight: 800, mb: 1, display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: 1 }}>
                                                Email Address
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                placeholder="john@example.com"
                                                variant="standard"
                                                InputProps={{
                                                    disableUnderline: true,
                                                    sx: { color: "white", bgcolor: "rgba(255,255,255,0.06)", px: 2, py: 1, borderRadius: 1.5, fontSize: "0.85rem", border: "1px solid rgba(255,255,255,0.08)" }
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Box>
                                        <Typography variant="caption" sx={{ color: "#E11D48", fontWeight: 800, mb: 1, display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: 1 }}>
                                            Message Subject
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="e.g. Donation Request"
                                            variant="standard"
                                            InputProps={{
                                                disableUnderline: true,
                                                sx: { color: "white", bgcolor: "rgba(255,255,255,0.06)", px: 2, py: 1, borderRadius: 1.5, fontSize: "0.85rem", border: "1px solid rgba(255,255,255,0.08)" }
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography variant="caption" sx={{ color: "#E11D48", fontWeight: 800, mb: 1, display: "block", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: 1 }}>
                                            Your Detailed Message
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={3}
                                            placeholder="How can we assist you today?"
                                            variant="standard"
                                            InputProps={{
                                                disableUnderline: true,
                                                sx: { color: "white", bgcolor: "rgba(255,255,255,0.06)", px: 2, py: 1.5, borderRadius: 2, fontSize: "0.85rem", border: "1px solid rgba(255,255,255,0.08)" }
                                            }}
                                        />
                                    </Box>

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#E11D48",
                                            color: "white",
                                            fontWeight: 950,
                                            py: 1.8,
                                            borderRadius: 2,
                                            fontSize: "0.85rem",
                                            boxShadow: "0 8px 20px rgba(225, 29, 72, 0.3)",
                                            "&:hover": { bgcolor: "#BE123C", transform: "translateY(-2px)" },
                                            transition: "0.3s",
                                        }}
                                    >
                                        SEND MESSAGE
                                    </Button>
                                </Stack>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* FAQ Section with Brand Colors */}
                <Box sx={{ mt: 12 }}>
                    <Typography variant="h5" fontWeight={900} sx={{ color: "#0F172A", mb: 4, textAlign: "center", letterSpacing: -1 }}>
                        Common Inquiries
                    </Typography>
                    <Grid container spacing={2}>
                        {[
                            { q: "How do I register as a blood donor?", a: "You can register by clicking the 'Register' button on the header and filling out your medical details." },
                            { q: "Is my personal data kept secure?", a: "Yes, we use military-grade encryption to ensure all donor and recipient information is protected." },
                            { q: "How soon will I receive a response?", a: "Emergency requests are broadcast instantly, and responses typically arrive within 15-30 minutes." },
                            { q: "Can I cancel an appointment?", a: "Yes, you can manage your appointments through your dashboard or contact our support line." }
                        ].map((item, idx) => (
                            <Grid item xs={12} md={6} key={idx}>
                                <Accordion sx={{ bgcolor: "white", border: "1px solid #E2E8F0", borderRadius: "12px !important", overflow: "hidden", mb: 1.5, boxShadow: "none", "&:hover": { borderColor: "#E11D4850" } }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#E11D48" }} />}>
                                        <Typography variant="body2" fontWeight={800} sx={{ color: "#1E293B", fontSize: "0.82rem" }}>
                                            <Box component="span" sx={{ color: "#E11D48", mr: 1.5 }}>{idx + 1}</Box>
                                            {item.q}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ pt: 0 }}>
                                        <Typography variant="body2" sx={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.6 }}>
                                            {item.a}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Map Placeholder */}
                <Box sx={{ mt: 10, borderRadius: 5, overflow: "hidden", height: 320, border: "4px solid white", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}>
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.333333333333!2d76.8833333!3d8.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbfc7b669e4f%3A0x7d6c5c0c9e6e4a2c!2sTechnopark%20Trivandrum!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(0.2)" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactTab;
