import React from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Rating,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
  },
});

// Sample testimonial data
const testimonials = [
  {
    quote:
      "The tax optimization strategies provided by this team have saved our company thousands. Highly recommended!",
    name: "John Doe",
    role: "CEO, Tech Innovations Inc.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "Their expertise in handling complex international tax situations is unparalleled. A game-changer for our global operations.",
    name: "Jane Smith",
    role: "CFO, Global Enterprises Ltd.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "The personalized attention and proactive approach to tax planning have been invaluable for our startup's growth.",
    name: "Mike Johnson",
    role: "Founder, NextGen Startups",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
  },
];

const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

export default function EnhancedTestimonials() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 10, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <MotionTypography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, color: "primary.main" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            What Our Clients Say
          </MotionTypography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionCard
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                    },
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardContent sx={{ flexGrow: 1, position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        color: "primary.light",
                        opacity: 0.2,
                      }}
                    >
                      <FormatQuoteIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ mt: 4, mb: 2, fontStyle: "italic" }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                        <Rating
                          value={testimonial.rating}
                          readOnly
                          size="small"
                          sx={{ mt: 0.5 }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
