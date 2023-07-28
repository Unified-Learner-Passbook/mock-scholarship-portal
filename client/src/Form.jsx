import { TextField } from "@mui/material";
import React from "react";

function Form() {
	return (
		<div className="simpleform">
			<form />
      <div style={{ display: 'flex', gap: '16px' }}>
      <TextField
        label="First Field"
        name="id1"
        fullWidth
        margin="normal"
        variant="outlined"
        />
        <TextField
        label="Second Field"
        name="id2"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      </div>
		</div>
	);
}

export default Form;
