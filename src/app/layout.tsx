import type { Metadata } from "next";
import "./globals.css";
import RegisterServiceWorker from './components/RegisterServiceWorker';

export const metadata: Metadata = {
  title: "Agendamos Fácil",
  description: "É um sistema de agendamento online com pagamento antecipado voltado para donos solos de salões de cabelereiros.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {children}
        <RegisterServiceWorker />
      </body>
    </html>
  );
}
