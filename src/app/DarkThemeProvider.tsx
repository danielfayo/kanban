"use client"

import React from "react";
import { ThemeProvider } from "next-themes";

const DarkThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider defaultTheme="system" attribute="class">{children}</ThemeProvider>;
};
export default DarkThemeProvider;
