import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import NavMobile from './nav-mobile';
import Main from './main';
import Header from './header';
import NavDesktop from './nav-desktop';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)}>
        <NavDesktop />
      </Header>

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <NavMobile openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
