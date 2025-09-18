import { Nunito } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const nunito = Nunito({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'], // ← opciones disponibles
  subsets: ['latin'],
});
