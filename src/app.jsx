import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { AppModeProvider } from './contexts/app-mode-context';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <AppModeProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </AppModeProvider>

  );
}
