import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from './Button'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'


const yearBuiltData = [
  {
    id: '1',
    value: 'Year Built',
    label: '2000 to 2020',
  }
]

const squareFeetData = [
    {
      id: '2',
      value: 'Square Feet',
      label: '3600 to 5000',
    }
  ]


export default function UserForm() {
  const [yearBuilt, setYearBuilt] = useState("")
  const [squareFeet, setSquareFeet] = useState("")
  const [proposedValue, setProposedValue] = useState("")

  const handleYearBuiltChange = (event) => {
    setYearBuilt(event.target.value)
  }

  const handleSquareFeetChange = (event) => {
    setSquareFeet(event.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select Year Built"
          value={yearBuilt}
          onChange={handleYearBuiltChange}
          helperText="Please select your year built category"
        >
          {yearBuiltData.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency"
          select
          label="Select Square Feet"
          value={squareFeet}
          onChange={handleSquareFeetChange}
          helperText="Please select your Square Footage category"
        >
          {squareFeetData.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Proposed Value</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            //value={proposedValue}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Proposed Amount"
          />
        </FormControl>

      </div>

      <Button />
      
    </Box>
  );
}
