// import { inter } from '@/app/ui/font';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head> 
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;600&display=swap" rel="stylesheet"></link>
      </head>
      <body>{children}</body>
      
    </html>
    
  );
}
