import { ButtonProps, Button as MuiButton } from '@mui/material';
import { createStyle } from '../utils/createStyle';

export const Button = ({ children, sx, ...props }: ButtonProps) => {
  return (
    <MuiButton
      sx={createStyle(
        {
          background: '#000',
          color: '#fff',
          fontWeight: 700,
          transition: 'all 0.25s ease-in-out',
          textTransform: 'initial',
          borderRadius: 5,
          px: 3,
          '&:hover': {
            background: '#000',
            color: '#fff',
            transform: 'scale(1.03)',
          },
        },
        sx
      )}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
