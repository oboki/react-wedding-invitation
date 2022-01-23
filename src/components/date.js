import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Grid from '@mui/material/Grid';

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');

const theDay = new Date('2022-04-02T00:00:00.000');

export default function DatePicker() {
  const [date, setDate] = React.useState(theDay);

  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker
          date={date}
          // onChange={(newDate) => setDate(newDate)}
        />
      </LocalizationProvider>
  );
}