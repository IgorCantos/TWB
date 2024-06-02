import 'src/global.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/router';
import ThemeProvider from 'src/theme';
import { AppModeProvider } from './contexts/app-mode-context';

library.add(fas);

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
