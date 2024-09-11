import { SxProps, Theme } from '@mui/material';

export const createStyle = (style: SxProps<Theme>, sx?: SxProps<Theme>) => {
  return [style, ...(Array.isArray(sx) ? sx : [sx])];
};
