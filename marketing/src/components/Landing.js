import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Landing = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Home Page
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph
        >
          Something short and leading about the collection below—its
          contents, the creator, etc. Make it short and sweet, but not too
          short so folks don&apos;t simply skip over it entirely.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Button variant="contained" color="primary" component={Link} to="/pricing">
            Pricing
          </Button>
          <Button variant="outlined" color="primary" style={{ marginLeft: '1rem' }} component={Link} to="/pricing">
            Pricing
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Landing;
