import {
  CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';
import { Button, Card } from 'reactstrap';
import MyModal from './MyModal';

function Hero({ hero }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ width: 345 }} id="card">
      <CardMedia
        component="img"
        height="50%"
        width="100%"
        image={hero.image}
        alt={hero.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hero.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" onClick={handleOpen}>
          View more
        </Button>
        {open && <MyModal open={open} handleClose={handleClose} hero={hero} />}
      </CardActions>
    </Card>
  );
}

export default Hero;
