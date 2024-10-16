import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Popover,
  Avatar,
  Rating,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  BarChart as BarChartIcon,
  AttachMoney as AttachMoneyIcon,
  Business as BusinessIcon,
  Security as SecurityIcon,
  FormatQuote as FormatQuoteIcon,
} from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Tax Preparation",
    icon: <AttachMoneyIcon />,
    description:
      "Expert tax preparation services for individuals and businesses.",
    details:
      "Our tax preparation services cover personal and business taxes, ensuring accuracy and compliance with the latest tax laws. We help you maximize deductions and minimize liabilities.",
  },
  {
    title: "Financial Planning",
    icon: <BarChartIcon />,
    description: "Comprehensive financial planning to secure your future.",
    details:
      "Our financial planning services include retirement planning, investment strategies, and wealth management. We help you create a roadmap to achieve your long-term financial goals.",
  },
  {
    title: "Business Consulting",
    icon: <BusinessIcon />,
    description: "Strategic consulting to help your business grow and thrive.",
    details:
      "Our business consulting services offer strategic advice on business growth, operational efficiency, and financial management. We help you make informed decisions to drive your business forward.",
  },
  {
    title: "Audit Protection",
    icon: <SecurityIcon />,
    description: "Protect your business with our audit protection services.",
    details:
      "Our audit protection services provide peace of mind in case of an IRS audit. We offer representation and support throughout the audit process, ensuring your rights are protected.",
  },
];

const reasons = [
  {
    title: "Expert Team with Years of Experience",
    description:
      "Our seasoned professionals bring decades of combined experience in tax law, financial planning, and business strategy.",
  },
  {
    title: "Personalized Service to Your Needs",
    description:
      "We understand that every client is unique. Our approach is customized to meet your specific financial goals and challenges.",
  },
  {
    title: "Timely Solutions to Meet Deadlines",
    description:
      "We pride ourselves on our punctuality and efficiency, ensuring you never miss important tax deadlines or financial opportunities.",
  },
  {
    title: "Maximized Returns and Tax Savings",
    description:
      "Our expert strategies are designed to optimize your tax position, maximizing returns while ensuring full compliance with tax laws.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    role: "Small Business Owner",
    quote:
      "Ganit Tax has been instrumental in helping my business navigate complex tax situations. Their expertise is unmatched!",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Freelance Consultant",
    quote:
      "I've never felt more confident about my finances since working with Ganit Tax. They've truly transformed my financial outlook.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    name: "Robert Johnson",
    role: "CEO, Tech Startup",
    quote:
      "Their expertise in both tax law and business strategy has been invaluable to our growth. Ganit Tax is an essential partner for any business.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
];

const carouselItems = [
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/007/997/267/small/businessmen-point-to-successful-business-growth-plans-ladder-of-success-action-planning-and-long-term-business-goals-photo.jpg",
    title: "Expert Tax Solutions",
    description: "Simplifying complex tax matters for your peace of mind",
    cta: "Learn More",
    link: "/services",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661434638236-410c530e70a3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaWFsJTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
    title: "Financial Planning",
    description: "Secure your future with our comprehensive planning services",
    cta: "Get Started",
    link: "/financial-planning",
  },
  {
    image:
      "https://lh4.googleusercontent.com/proxy/ZGplHL4rPNsxCBLHRnOLs7MjGxC_FrpofLuezVYF929nTtbJEiRDAkBAQ4t4p2S5c_YuMaLoGdkTp8gmyXhnLw",
    title: "Business Growth",
    description: "Strategic consulting to help your business thrive",
    cta: "Explore Services",
    link: "/business-consulting",
  },
];

export default function EnhancedHomePage() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [popoverContent, setPopoverContent] = useState<{
    title: string;
    details: string;
  } | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    service: (typeof services)[0]
  ) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent({ title: service.title, details: service.details });
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent(null);
  };

  const open = Boolean(anchorEl);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      <Slider {...settings} className="h-[600px]">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-[600px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to={item.link}
                    sx={{
                      backgroundColor: "#F0E68C",
                      color: "#333",
                      "&:hover": {
                        backgroundColor: "#E6DB74",
                      },
                    }}
                  >
                    {item.cta}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <main>
        <section className="py-20">
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                component="h2"
                align="center"
                gutterBottom
                className="font-bold"
              >
                Our Services
              </Typography>
            </motion.div>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                      onMouseEnter={(e) => handlePopoverOpen(e, service)}
                      onMouseLeave={handlePopoverClose}
                    >
                      <CardContent>
                        <Box className="text-center mb-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          >
                            {React.cloneElement(service.icon, {
                              fontSize: "large",
                              className: "text-yellow-500",
                            })}
                          </motion.div>
                        </Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom
                          className="font-semibold text-center"
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="text-center"
                        >
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section className="bg-gray-100 py-20 overflow-hidden">
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                component="h2"
                align="center"
                gutterBottom
                className="font-bold"
              >
                Why Choose Ganit Tax?
              </Typography>
            </motion.div>
            <Grid container spacing={4}>
              {reasons.map((reason, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="h-full relative cursor-pointer overflow-hidden"
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <CardContent>
                        <Box display="flex" alignItems="center" mb={2}>
                          <motion.div
                            initial={{ scale: 1 }}
                            animate={{
                              scale: hoveredItem === index ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircleIcon className="text-yellow-500 mr-2" />
                          </motion.div>
                          <Typography
                            variant="h6"
                            component="h3"
                            className="font-semibold"
                          >
                            {reason.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {reason.description}
                        </Typography>
                      </CardContent>
                      <AnimatePresence>
                        {hoveredItem === index && (
                          <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-yellow-400 bg-opacity-90 p-4 flex items-center justify-center"
                          >
                            <Typography
                              variant="body1"
                              className="text-gray-800 text-center"
                            >
                              {reason.description}
                            </Typography>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section className="py-20 bg-gray-50">
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                component="h2"
                align="center"
                gutterBottom
                className="font-bold"
              >
                What Our Clients Say
              </Typography>
            </motion.div>
            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <CardContent>
                        <Box className="flex items-center mb-4">
                          <Avatar
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            sx={{ width: 60, height: 60, marginRight: 2 }}
                          />
                          <Box>
                            <Typography
                              variant="subtitle1"
                              className="font-semibold"
                            >
                              {testimonial.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {testimonial.role}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="relative">
                          <FormatQuoteIcon
                            sx={{
                              fontSize: 40,
                              color: "primary.light",
                              position: "absolute",
                              top: -10,
                              left: -10,
                              opacity: 0.3,
                            }}
                          />
                          <Typography
                            variant="body1"
                            paragraph
                            className="italic pl-8"
                          >
                            "{testimonial.quote}"
                          </Typography>
                        </Box>
                        <Rating value={testimonial.rating} readOnly />
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: "#F0E68C" }}
          className="text-gray-800 py-20"
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              className="font-bold"
            >
              Ready to Optimize Your Taxes?
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              Let our experts handle your tax needs and maximize your returns.
            </Typography>
            <Box display="flex" justifyContent="center" mt={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/contact"
                  className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                  endIcon={<ArrowForwardIcon />}
                >
                  Contact Us Today
                </Button>
              </motion.div>
            </Box>
          </Container>
        </motion.section>
      </main>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <Box p={2} maxWidth={300}>
          <Typography variant="h6" gutterBottom>
            {popoverContent?.title}
          </Typography>
          <Typography variant="body2">{popoverContent?.details}</Typography>
        </Box>
      </Popover>
    </div>
  );
}
