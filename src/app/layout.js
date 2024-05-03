import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PinAnimeList",
  description: "Anime Website By Kevin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Navbar</div>
        {children}
      </body>
    </html>
  );
}
