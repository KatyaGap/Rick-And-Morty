import { Box, Typography } from '@mui/material';
import React from 'react';
import { Button, Modal } from 'reactstrap';

function MyModal({ handleClose, hero }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={style} id="box">
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {hero.name}
      </Typography>
      <img src={hero.image} alt={hero.name} />
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <span>status: </span>
        {hero.status}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <span>species: </span>
        {hero.species}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <span>type: </span>
        {hero.type}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <span>gender: </span>
        {hero.gender}
      </Typography>
      <Button variant="outlined" onClick={handleClose}>
        Close
      </Button>
    </Box>
  );
}

export default MyModal;
