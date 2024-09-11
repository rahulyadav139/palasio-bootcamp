import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './style/theme.ts';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
