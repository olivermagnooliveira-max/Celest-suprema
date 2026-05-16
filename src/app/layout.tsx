import './globals.css';

export const metadata = {
  title: 'CELEST SUPREMA v4.1',
  description: 'Inteligência Neural Híbrida',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
