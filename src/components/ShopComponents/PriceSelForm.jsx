import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PriceSelForm = ({ onChange }) => {

  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return <>
    <FormControl sx={{ minWidth: 175 }} size="small">
      <InputLabel id="demo-select-small-label">Sort by</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Sort by"
        onChange={handleChange}
      >
        <MenuItem value={10}>Best Seller</MenuItem>
        <MenuItem value={20}>Price High To Low</MenuItem>
        <MenuItem value={30}>Price Low To High</MenuItem>
      </Select>
    </FormControl>
  </>
}

export default PriceSelForm;
