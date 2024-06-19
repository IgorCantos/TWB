import PropTypes from 'prop-types';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import Scrollbar from 'src/components/scrollbar';

import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function NavDesktop({ openNav, onCloseNav }) {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', maxWidth: '600px' }}>
      <Scrollbar>
        <Stack
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {navConfig.map((item) =>
            item.children ? (
              <CollapsibleNavItem key={item.title} item={item} />
            ) : (
              <NavItem key={item.title} item={item} />
            )
          )}
        </Stack>
      </Scrollbar>
    </Box>
  );
}

NavDesktop.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      {item.icon && (
        <Box component="span" sx={{ width: 24, height: 24, m: 1 }}>
          {item.icon}
        </Box>
      )}

      <Box component="span">{item.title}</Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

function CollapsibleNavItem({ item }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => setOpen(event.currentTarget);

  const handleClose = () => setOpen(null);

  return (
    <>
      <ListItemButton
        onClick={handleOpen}
        sx={{
          minHeight: 44,
          borderRadius: 0.75,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
        }}
      >
        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
          {item.icon}
        </Box>

        <Box component="span">{item.title}</Box>

        <ExpandMoreIcon
          sx={{
            transform: 'rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        />
      </ListItemButton>

      {open && (
        <Popover
          open={!!open}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Box>
            {item.children.map((child) => (
              <>
                <NavItem key={child.title} item={child} />
                <Divider sx={{ borderStyle: 'dashed' }} />
              </>
            ))}
          </Box>
        </Popover>

        // <Collapse in={open}>
        //   <Stack spacing={0.5} sx={{ pl: 3 }}>
        //     {item.children.map((child) => (
        //       <NavItem key={child.title} item={child} />
        //     ))}
        //   </Stack>
        // </Collapse>
      )}
    </>
  );
}

CollapsibleNavItem.propTypes = {
  item: PropTypes.object,
};
