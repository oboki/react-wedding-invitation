import './App.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import MainPage from './pages/main'

const theme = createTheme({
  palette: {
    secondary: {
      main: grey[900],
    }
  },
  typography: {
    fontFamily: [
      'Gowun Dodum',
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