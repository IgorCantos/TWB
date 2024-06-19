import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import { useResponsive } from 'src/hooks/use-responsive';
import Searchbar from './common/searchbar';
import { HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
// import LanguagePopover from './common/language-popover';
import NotificationsPopover from './common/notifications-popover';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav, children }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');
  // const lgUp = false;

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        // ...(lgUp && {
        //   width: `calc(100% - ${NAV.WIDTH + 1}px)`,
        //   height: HEADER.H_DESKTOP,
        // }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {!lgUp && (
          <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
        )}

        <Searchbar />

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {lgUp && children}
        </Box>

        <Stack direction="row" alignItems="center" spacing={1}>
          {/* <LanguagePopover /> */}
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
  children: PropTypes.any,
};
