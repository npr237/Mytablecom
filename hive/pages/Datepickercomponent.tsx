import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Button } from '@mui/material';

interface DatepickerComponentProps {
  onSearch: (fromDate: Date | null, toDate: Date | null) => void;
  disabled: boolean;
}

const Datepickercomponent: React.FC<DatepickerComponentProps> = ({ onSearch, disabled }) => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const handleSearchClick = () => {
    onSearch(fromDate, toDate);
  };

  return (
    <div style={{ width: '50%', display: 'flex', paddingTop: '100px', marginBottom: '20px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker 
          label="From Date and Time" 
          value={fromDate} 
          onChange={(date) => setFromDate(date)}  // Corrected this line
          disabled={disabled}
        />
      </LocalizationProvider>
      <span style={{margin:'15px 15px'}}>-</span>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker 
          label="To Date and Time" 
          value={toDate} 
          onChange={(date) => setToDate(date)}  // Corrected this line
          disabled={disabled}
        />
      </LocalizationProvider>
      <div>
        <Button variant='contained' onClick={handleSearchClick} style={{margin:'10px 20px'}}>Search</Button>
      </div>
    </div>
  );
}

export default Datepickercomponent;
