import {
  Grid2 as Grid,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Toolbar,
} from '@mui/material';
import { Button } from '../components/Button';
import images from '../modules/home/data/images.json';
import { Navigation } from '../modules/home/Navigation';
import { Header } from '../modules/home/Header';
import { Learning } from '../modules/home/Learning';
import { Roadmap } from '../modules/home/Roadmap';
import { WhyUs } from '../modules/home/WhyUs';
import { Offerings } from '../modules/home/Offerings';
import { Enroll } from '../modules/home/Enroll';
import { FAQs } from '../modules/home/FAQs';

const item = {
  title: '',
  img: 'https://fastly.picsum.photos/id/830/536/354.jpg?hmac=M5EsVFyBxZR708JhsNqDjIbvm0CMgKZ_rOjrXCI5KYw',
};

export default function Home() {
  return (
    <>
      <Navigation />
      <Box component="main" sx={{ py: '25px' }}>
        <Toolbar />
        <Header />
        <Roadmap />
        <WhyUs />
        <Offerings />
        <Enroll />
        <Learning />
        <FAQs />
      </Box>
    </>
  );
}
