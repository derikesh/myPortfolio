import localFont from 'next/font/local';

export const ClashGrotesk = localFont({

 src: [
    {
      path: './ClashGrotesk-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './ClashGrotesk-Medium.woff2',
      weight: '400', 
      style: 'normal',
    },
    {
      path: './ClashGrotesk-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './ClashGrotesk-Semibold.woff2',
      weight: '700',
      style: 'normal',
    },
    
  ],
  variable: '--font-clash',
  display: 'swap',

});