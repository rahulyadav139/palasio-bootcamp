import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import faqs from './data/faqs.json';
import { ExpandMore } from '@mui/icons-material';

export const FAQs = () => {
  return (
    <Box
      sx={{
        px: { xs: '24px', md: '150px' },
        pt: { xs: '75px', md: '100px' },
      }}
    >
      <Typography align="center" fontSize={{ md: '36px', xs: '24px' }}>
        Frequently asked questions
      </Typography>
      <Box sx={{ mt: '48px' }}>
        {faqs.map(faq => (
          <Accordion key={faq.id} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ fontSize: '12.8px', fontWeight: 700 }}
            >
              {faq.title}
            </AccordionSummary>
            <AccordionDetails
              sx={{ fontSize: '12.8px', color: 'textSecondary' }}
            >
              {faq.text}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
