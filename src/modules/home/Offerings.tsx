import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import courses from './data/courses.json';

export const Offerings = () => {
  return (
    <>
      <Box
        sx={{
          px: { xs: '24px', md: '150px' },
          pt: { xs: '75px', md: '100px' },
        }}
      >
        <Typography align="center" fontSize={{ md: '36px', xs: '24px' }}>
          Offerings
        </Typography>
        <Typography
          align="center"
          sx={{ maxWidth: 600, mx: 'auto', fontSize: '14px', mt: '12px' }}
          color="textSecondary"
        >
          Choose us for a bootcamp that&apos;s dedicated to your success with
          real-world projects and expert guidance. We focus on giving you the
          best learning experience to excel in frontend development.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            justifyContent: 'center',
            gap: '24px',
            mt: '48px',
          }}
        >
          {courses.map(course => (
            <Card key={course.id} title={course.title} isLive={course.isLive}>
              <Typography
                sx={{ fontSize: '12.8px' }}
                color="textSecondary"
                align="center"
              >
                {course.description}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

const Card = ({
  title,
  children,
  isLive = true,
}: {
  title: string;
  children: ReactNode;
  isLive?: boolean;
}) => {
  return (
    <Box
      sx={{
        p: '20px',
        borderRadius: '12px',
        border: '1px solid #ccc',
        width: 320,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: isLive ? '"Live"' : '"Coming soon"',
          position: 'absolute',
          top: 0,
          background: '#007d8c',
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '10.5px',
          p: '5px',
          px: '8px',
          borderBottomLeftRadius: '12px',
          color: '#fff',
        },
      }}
    >
      <Typography
        align="center"
        sx={{ fontSize: { md: '24px', xs: '20px' }, mb: '16px' }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};
