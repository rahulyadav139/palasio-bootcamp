import {
  Grid2 as Grid,
  Typography,
  ImageList,
  ImageListItem,
  Box,
} from '@mui/material';
import images from './data/images.json';

export const Header = () => {
  return (
    <Box sx={{ pt: '50px' }}>
      <Grid container spacing={2} rowSpacing={5} sx={{ mx: '24px' }}>
        <Grid
          size={{ md: 6, xs: 12 }}
          sx={{
            px: '24px',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            align="center"
            sx={{
              fontSize: { xs: '28px', md: '48px' },
              whiteSpace: 'pre-wrap',
              lineHeight: 1.2,
              mb: 2,
              //   fontWeight: 500,
            }}
          >
            {`Launch Your Career in \nWeb Development`}
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            sx={{ fontSize: { xs: '13.5px', md: '15px' } }}
          >
            An immersive, hands-on experience to become job-ready in just{' '}
            <b>3 months</b>.
          </Typography>

          {/* <Button sx={{ mt: 2, mx: 'auto' }}>Enroll now</Button> */}
        </Grid>
        <Grid size={{ md: 6, xs: 12 }} sx={{ alignSelf: 'center' }}>
          <ImageList
            // sx={{ width: 500, height: 450 }}
            variant="woven"
            cols={3}
            gap={8}
          >
            {images.map(({ title, url }) => (
              <ImageListItem key={title}>
                <img
                  srcSet={`${url}`}
                  src={`${url}`}
                  alt={title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Box>
  );
};
