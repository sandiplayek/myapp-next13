import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UsersLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}Users layout</body>
    </html>
  );
}
