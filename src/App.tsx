import { HashRouter } from 'react-router-dom';
import AppRoutes from './router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter basename="/">
      <AppRoutes />
    </HashRouter>
  </ThemeProvider>
);

export default App;
