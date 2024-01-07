import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Modal } from '@mui/material';

export default function OpenModal(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0.1px solid #000',
    boxShadow: 14,
    p: 4,
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    position: 'absolute',
    top: 'calc(2cm + 10px)',
    right: '0',
    marginRight: '20px',
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    // Clear the state when opening the modal
    setName('');
    setDescription('');
    setDate('');
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = () => {
    props.addNote(name, description, date);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} style={buttonStyle}>
        ADD NOTE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Details
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            label="Description"
            variant="outlined"
            margin="normal"
            fullWidth
            value={description}
            onChange={handleDescriptionChange}
          />
          <TextField
            label="Date (MM/DD/YYYY)"
            variant="outlined"
            margin="normal"
            fullWidth
            value={date}
            onChange={handleDateChange}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
