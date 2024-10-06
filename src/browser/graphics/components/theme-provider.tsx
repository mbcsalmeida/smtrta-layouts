import { Global, css } from '@emotion/react';
import { type ReactNode, Fragment } from 'react';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            color: white;
            font-weight: bold;
            font-family: 'Noto Sans JP';
          }

          .shadow {
            text-shadow: 5px 5px 6px rgba(0, 0, 0, 1);
          }
        `}
      />
      {children}
    </Fragment>
  );
};
