import { AppBar, Toolbar, Typography } from '@mui/material';
import { LogoIcon } from '../../icons/Logo';
import { EnrollButton } from './components/EnrollButton';

export const Navigation = () => {
  return (
    <AppBar
      component="nav"
      sx={{
        background: '#F5F7F8',
        color: 'text.primary',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        zIndex: 1,
      }}
    >
      <Toolbar>
        <LogoIcon style={{ fontSize: '24px', color: '#007d8c' }} />
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: 'Grechen Fuemen',
            fontSize: '36px',
            fontWeight: 700,
            ml: 2,
            color: '#007d8c',
          }}
        >
          Palasio
        </Typography>
        <EnrollButton />
      </Toolbar>
    </AppBar>
  );
};
