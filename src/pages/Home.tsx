import { Box, Toolbar } from '@mui/material';
import { Navigation } from '../modules/home/Navigation';
import { Header } from '../modules/home/Header';
import { Learning } from '../modules/home/Learning';
import { Roadmap } from '../modules/home/Roadmap';
import { WhyUs } from '../modules/home/WhyUs';
import { Offerings } from '../modules/home/Offerings';
import { Enroll } from '../modules/home/Enroll';
import { FAQs } from '../modules/home/FAQs';

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
