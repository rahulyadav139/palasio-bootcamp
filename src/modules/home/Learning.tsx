import { Box } from '@mui/material';
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const Learning = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        fontSize: '36px',
        justifyContent: 'center',
        mt: '32px',
      }}
    >
      <FaHtml5 />
      <FaCss3Alt />
      <IoLogoJavascript />
      <FaReact />
      <FaGitAlt />
      <FaGithub />
    </Box>
  );
};
