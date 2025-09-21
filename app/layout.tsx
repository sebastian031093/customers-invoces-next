import React from 'react';

import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h1 className="text-blue-500">Hi from layout. todo lo que este aqui hace parte del layout</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
