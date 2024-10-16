import React from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Button,
  Container,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#F0E68C",
    },
    secondary: {
      main: "#333333",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 400,
    },
  },
});

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

export default function OptimizedTaxSection() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #F0E68C 0%, #FFD700 100%)",
          py: 10,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: "center" }}
          >
            <MotionTypography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ mb: 2, color: "secondary.main" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              Ready to Optimize Your Taxes?
            </MotionTypography>
            <MotionTypography
              variant="h6"
              sx={{ mb: 4, color: "secondary.main" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let our experts handle your tax needs and maximize your returns.
            </MotionTypography>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                variant="contained"
                size="large"
                href="/contact"
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "secondary.main",
                  },
                  px: 4,
                  py: 1.5,
                  borderRadius: 50,
                  fontSize: "1.1rem",
                }}
                endIcon={<ArrowForwardIcon />}
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </Button>
            </MotionBox>
          </MotionBox>
        </Container>

        {/* Decorative Elements */}
        <MotionBox
          sx={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 80,
            height: 80,
            borderRadius: "50%",
            bgcolor: "primary.main",
            opacity: 0.5,
          }}
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <MotionBox
          sx={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 60,
            height: 60,
            borderRadius: "50%",
            bgcolor: "primary.main",
            opacity: 0.4,
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <MotionBox
          sx={{
            position: "absolute",
            top: "50%",
            right: "25%",
            width: 48,
            height: 48,
            borderRadius: "50%",
            bgcolor: "secondary.main",
            opacity: 0.2,
          }}
          animate={{ scale: [1, 1.5, 1], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </Box>
    </ThemeProvider>
  );
}
