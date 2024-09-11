import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from '@mui/lab';

import { Box, Theme, Typography, useMediaQuery } from '@mui/material';

import timelineItems from './data/timelineItems.json';

export const Roadmap = () => {
  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{ px: { xs: '24px', md: '150px' }, pt: { xs: '75px', md: '100px' } }}
    >
      <Typography align="center" fontSize={{ md: '36px', xs: '24px' }}>
        Blueprint to Becoming a Frontend Rockstar
      </Typography>
      <Typography
        align="center"
        sx={{ maxWidth: 600, mx: 'auto', fontSize: '14px', mt: '12px' }}
        color="textSecondary"
      >
        Chart your course to frontend stardom by mastering key technologies,
        using powerful frameworks, and building a standout portfolio. Your path
        to becoming a rockstar developer starts here!
      </Typography>

      <Timeline
        sx={theme => ({
          mt: '50px',

          [theme.breakpoints.down('sm')]: {
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0,
            },
          },
        })}
        position={isMobile ? 'right' : 'alternate'}
      >
        {timelineItems.map((item, i) => {
          return (
            <TimelineItem key={item.id}>
              <TimelineOppositeContent
                color="text.secondary"
                sx={theme => ({
                  pb: '32px',
                  [theme.breakpoints.down('sm')]: { p: 0 },
                })}
              >
                {!isMobile && (
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      height: 200,
                      width: 300,
                      objectFit: 'contain',
                      objectPosition: 'top center',
                      display: 'block',
                      [i % 2 ? 'mr' : 'ml']: 'auto',
                      // border: '1px solid red',
                    }}
                  />
                )}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    background: '#007d8c',
                    boxShadow: 'none',
                  }}
                ></TimelineDot>
                {i !== 4 && (
                  <TimelineConnector
                    sx={{
                      background: '#00000070',
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    maxWidth: 350,
                    [i % 2 ? 'ml' : 'mr']: 'auto',
                    pb: { xs: '24px', md: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '20px', md: '32px' },
                      mb: '24px',
                      lineHeight: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { md: '14px', xs: '12.8px' } }}
                    color="textSecondary"
                  >
                    {item.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
};
