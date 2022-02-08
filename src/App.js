import './App.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import MainPage from './pages/main'

const theme = createTheme({
  palette: {
    primary: {
      main: "#1d2130",
    },
    secondary: {
      main: grey[200],
    }
  },
  typography: {
    fontFamily: [
      'NanumBarunPen',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;