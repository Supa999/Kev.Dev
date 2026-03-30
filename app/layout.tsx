import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from './components/Header'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Kev.Dev | Build your Online Presence",
  description: "College developer ready to provide you with the technical tools you need to scale your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col w-screen overflow-x-hidden scroll-smooth">
        <Header />
        {children}
        </body>
    </html>
  );
}
