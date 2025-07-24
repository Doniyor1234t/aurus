import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter basename="/aurus/">
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
