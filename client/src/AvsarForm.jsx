import { TextField } from '@mui/material';
import Stack from "@mui/material/Stack";
import React, { useState } from 'react';

const AvsarForm = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <TextField
        label="ID"
        name="id"
        value={formData.id}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <div style={{ display: 'flex', gap: '16px' }}>
        <TextField
          label="Grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Programme"
          name="programme"
          value={formData.programme}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <TextField
          label="Certifying Institute"
          name="certifyingInstitute"
          value={formData.certifyingInstitute}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Evaluating Institute"
          name="evaluatingInstitute"
          value={formData.evaluatingInstitute}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        </div>
    </form>
  );
};

export default AvsarForm;
