import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { ReduxProvider } from "@/redux/provider";
import DarkThemeProvider from "./DarkThemeProvider";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <DarkThemeProvider>
          <ReduxProvider>
            <Nav />
            <Sidebar />
            {children}
          </ReduxProvider>
        </DarkThemeProvider>
      </body>
    </html>
  );
}
