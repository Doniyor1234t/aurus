import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import AppRoutes from './router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HistoryRouter history={history as any}>
      <AppRoutes />
    </HistoryRouter>
  </ThemeProvider>
);

export default App;
