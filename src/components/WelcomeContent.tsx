import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const WelcomeContent = () => {
  return (
    <Container>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Welcome Page
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          {`This is Jackson Vogt's website where I mess around with interesting things`}
        </Typography>
        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
          <IconButton target="_blank" href="https://www.linkedin.com/in/jackson-vogt/">
            <LinkedIn />
          </IconButton>
          <IconButton target="_blank" href="https://www.google.com">
            <GitHub />
          </IconButton>
        </Stack>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>This is a media card. You can use this section to describe the content.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};
