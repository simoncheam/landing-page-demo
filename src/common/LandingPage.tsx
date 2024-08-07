import { Box, Grid, Typography, Button, Paper, useTheme, useMediaQuery } from '@mui/material';
import { CalendarToday, AttachMoney, AccountBalance, Lock } from '@mui/icons-material';
import HeroImage from '/assets/images/whitelabel_default.png';
// import SVG from './SVG';
import HeroImageMobile from '/assets/images/merchantLandingBanner.png';

//import circleImage from 'enable-landing-page/public/assets/images/circle.png';

import howItWorksImage from '/assets/images/howitworksd.png';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log('🚀 ~ LandingPage ~ isMobile:', isMobile);
  const featureStyleProps = {
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '1 / 1',
  };

  const type = true;
  return (
    <Box
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#4A00E0', color: 'white', padding: '40px 20px' }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            width: '100%',
            margin: 0,
            padding: { xs: '0 16px', sm: '0 32px' },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                fontSize: { xs: '2.5rem', md: '3rem' },
              }}
            >
              Give your customers the power of choice with Cloudsy
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginBottom: '30px', fontSize: { xs: '1rem', md: '1.25rem' } }}
            >
              Don't let a lack of financing options hold your business back. Provide access to over
              20 lenders to help you convert more customers.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%', // Ensure full width for xs
                padding: { xs: 4, sm: 4, md: 6 },
                textAlign: { xs: 'center', md: 'left' },
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-end' },
                alignItems: 'center',
                marginTop: { xs: '16px', md: '0' }, // Ensure margin for xs screens
              }}
            >
              {type && (
                <Box
                  sx={{
                    backgroundColor: 'primary',
                    width: {
                      xs: '80%',
                      sm: '590px',
                      md: '750px',
                      lg: '900px',
                    },
                  }}
                >
                  {/* TODO: how can we overlay 2 images on mobile? the goal is to place the circle image behind the HeroImageMobile
                 We also want to shift the hero image down closer to the fold so the image is at the bottom edge of the hero section
                 */}

                  <img
                    src={isMobile ? HeroImageMobile : HeroImage}
                    alt="Hero Image"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
                  />
                  {/* <SVG
                    id="wl-hero-image"
                    src="/assets/images/wlHero.svg"
                    title="Hero"
                    width="100%"
                    height="100%"
                  /> */}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          backgroundColor: '#f7f7f7',
          padding: '40px 20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '1200px' }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              marginBottom: '40px',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Unlock more sales with our flexible financing solutions!
          </Typography>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center" // Center Grid items vertically
          >
            <Grid item xs={6} sm={6} md={3}>
              <Paper sx={featureStyleProps}>
                <CalendarToday fontSize="large" color="primary" />
                <Typography
                  variant="h6"
                  sx={{ marginTop: '10px', fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                  Term up to 144 months
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Paper sx={featureStyleProps}>
                <AttachMoney fontSize="large" color="primary" />
                <Typography
                  variant="h6"
                  sx={{ marginTop: '10px', fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                  Rates starting at 8.99%
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Paper sx={featureStyleProps}>
                <AccountBalance fontSize="large" color="primary" />
                <Typography
                  variant="h6"
                  sx={{ marginTop: '10px', fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                  Loans up to $200,000
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Paper sx={featureStyleProps}>
                <Lock fontSize="large" color="primary" />
                <Typography
                  variant="h6"
                  sx={{ marginTop: '10px', fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                  Access to 20+ lenders
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* How It Works Section */}

      <Box
        sx={{
          backgroundColor: '#f7f7f7',
          padding: '20px 20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '1200px' }}>
          <Paper sx={{ padding: '40px' }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                marginBottom: '40px',
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              How it works
            </Typography>
            <Grid container spacing={4}>
              {/* TODO: On Mobile or table, Stack grid 2 (image) above grid 1  */}

              {/* Grid 1 */}
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: '20px' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                  >
                    1. Your customer fills out a simple, mobile-friendly application
                  </Typography>
                  <Typography>
                    It's quick and easy, taking just a few minutes to complete.
                  </Typography>
                </Box>
                <Box sx={{ padding: '20px' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                  >
                    2. A real-time decision is made
                  </Typography>
                  <Typography>
                    Your customer will know in minutes if they qualify for financing.
                  </Typography>
                </Box>
                <Box sx={{ padding: '20px' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                  >
                    3. Your customer chooses the offer that works best for them
                  </Typography>
                  <Typography>
                    With multiple options available, they can select the best fit for their needs.
                  </Typography>
                </Box>
                <Box sx={{ padding: '20px' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                  >
                    4. Once completed, your customer will be funded directly
                  </Typography>
                  <Typography>
                    Funds are deposited quickly and securely into their account.
                  </Typography>
                </Box>
              </Grid>
              {/* Grid 2 */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'block',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <img
                    src={howItWorksImage}
                    alt="Mobile App"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
