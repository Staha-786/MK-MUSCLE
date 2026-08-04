import './globals.css';
import type { Metadata } from 'next';
import { Inter, Oswald, Bebas_Neue } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-oswald', display: 'swap' });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-bebas', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mkmuscle.pk'),
  title: 'MK Muscle — Premium Fitness Center in DHA Phase 2, Karachi',
  description:
    'Transform your body at MK Muscle, Karachi\'s premier fitness destination in DHA Phase 2. Certified personal trainers, premium equipment, strength, cardio, and weight loss programs. 5.0 rated. Book your free trial today.',
  keywords: ['gym Karachi', 'fitness center DHA', 'personal trainer Karachi', 'MK Muscle', 'strength training', 'weight loss'],
  openGraph: {
    title: 'MK Muscle — Premium Fitness Center in DHA Phase 2, Karachi',
    description: 'Transform your body. Transform your life. Premium gym, certified trainers, modern equipment.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${bebas.variable}`}>
      <body
className={`${inter.className} bg-background text-foreground antialiased`}
>{children}</body>
    </html>
  );
}
