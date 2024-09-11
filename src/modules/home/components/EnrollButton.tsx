import { Note } from '@mui/icons-material';
import { Button } from '../../../components/Button';

export const EnrollButton = () => {
  return (
    <a href="https://5ssgu01qj91.typeform.com/to/Vjgiwyjf">
      <Button
        startIcon={<Note />}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '-110%',
            left: '-210%',
            width: '200%',
            height: '200%',
            opacity: 1,
            background:
              'linear-gradient(to right, rgba(255, 255, 255, 0.13) 0%,rgba(255, 255, 255, 0.13) 77%,rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0.0) 100%)',
            animation: 'shine 1.5s infinite',
            '@keyframes shine': {
              from: { transform: 'translateX(-100%)' },
              to: { transform: 'translateX(100%)' },
            },
          },
        }}
      >
        Enroll
      </Button>
    </a>
  );
};
