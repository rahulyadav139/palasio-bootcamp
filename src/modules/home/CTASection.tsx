import { Box, Typography } from '@mui/material';
import { Button } from '../../components/Button';
import { WhatsApp } from '@mui/icons-material';
import { EnrolButton } from './components/EnrolButton';
import { WHATSAPP_URL } from '../../constants/urls';

export const CTASection = () => {
  return (
    <Box
      sx={{
        mt: { xs: '75px', md: '100px' },
        p: '32px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '24px',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 800,
        mx: { xs: '24px', md: 'auto' },
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
    >
      <Box>
        <Typography fontSize={{ md: '24px', xs: '20px' }} align="center">
          Register now to get it started
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '24px' }}>
        <EnrolButton />
        <a href={WHATSAPP_URL}>
          <Button startIcon={<WhatsApp />}>Contact</Button>
        </a>
      </Box>
    </Box>
  );
};
