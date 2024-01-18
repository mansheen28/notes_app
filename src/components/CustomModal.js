import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Modal } from '@mui/material';
import Button from '@mui/material/Button';

const CustomModal = (props) => {
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
   

  const [name, setName] = useState(props.initialValues.name);
  const [description, setDescription] = useState(props.initialValues.description);
  const [date, setDate] = useState(props.initialValues.date);

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = () => {
    const inputDate = date;

    // Regular expression to match MM/DD/YYYY format
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    // Check if the input matches the expected format
    if (dateRegex.test(inputDate) && name !== "" && description !== "") {
      props.onSave(name, description, date);
      setDate(inputDate);
    } else {
      // Handle invalid date (you can show an error message, etc.)
      alert('Please enter valid data');
    }

    
    
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
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
  );
};

export default CustomModal;
