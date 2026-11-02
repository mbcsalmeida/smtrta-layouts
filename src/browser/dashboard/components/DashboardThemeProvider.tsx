import { createTheme, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import "../../styles.css";

type Props = {
  children: ReactNode;
};

export const DashboardThemeProvider = ({ children }: Props) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
