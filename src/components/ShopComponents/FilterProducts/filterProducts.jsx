import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({ onChange }) {

//   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    // setAge(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{minWidth: 175 }} size="small">
      <InputLabel id="demo-select-small-label">Sort by</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={age}
        label="Sort by"
        onChange={handleChange}
      >
        <MenuItem value={10}>Best Seller</MenuItem>
        <MenuItem value={20}>Price High To Low</MenuItem>
        <MenuItem value={30}>Price Low To High</MenuItem>
      </Select>
    </FormControl>
  );
}


