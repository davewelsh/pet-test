import type { FC, PropsWithChildren } from 'react';

import './global.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body>
      {children}
    </body>
  </html>
);

export default RootLayout;
