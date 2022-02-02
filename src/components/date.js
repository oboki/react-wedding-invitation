import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import ko from 'date-fns/locale/ko'; 

const date = new Date('2022-04-02T00:00:00.000');

export default function DatePicker() {
  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker
          date={date}
          locale={ko}
        />
      </LocalizationProvider>
  );
}