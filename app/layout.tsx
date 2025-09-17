import React from 'react';

import { nunito } from './ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <h1>Hi from layout. todo lo que este aqui hace parte del layout</h1>
        <div style={{ border: '1px solid black' }}>{children}</div>
      </body>
    </html>
  );
}
