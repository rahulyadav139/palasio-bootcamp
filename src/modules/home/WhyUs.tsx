import { Typography, Box } from '@mui/material';
import benefits from './data/benefits.json';
import { Assignment, Bolt, CurrencyRupee, Person } from '@mui/icons-material';
import { ReactNode } from 'react';

export const WhyUs = () => {
  const icons = [Person, Assignment, Bolt, CurrencyRupee];
  return (
    <>
      <Box
        sx={{
          px: { xs: '24px', md: '150px' },
          pt: { xs: '75px', md: '100px' },
        }}
      >
        <Typography align="center" fontSize={{ md: '36px', xs: '24px' }}>
          Why us?
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
            display: 'grid',
            gridTemplateColumns: { md: 'repeat(2, 1fr)', xs: '1fr' },
            gap: { md: '20px', xs: '16px' },
            mt: '48px',
          }}
        >
          {benefits.map(({ id, ...benefit }, i) => {
            const Icon = icons[i];
            return (
              <Card
                key={id}
                {...benefit}
                icon={Icon && <Icon sx={{ color: '#007d8c' }} />}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

interface CardProps {
  icon: ReactNode;
  description: string;
  title: string;
}
const Card = ({ icon, description, title }: CardProps) => {
  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        p: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: { md: '12px', xs: '10px' },
      }}
    >
      {icon}

      <Typography fontSize={{ md: '24px', xs: '20px' }}>{title}</Typography>
      <Typography fontSize={{ md: '14px', xs: '12.8px' }} color="textSecondary">
        {description}
      </Typography>
    </Box>
  );
};
