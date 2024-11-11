import React from "react";
import ActiveSectionContextProvider from "./active-section";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import ThemeContextProvider from "./theme-context";


type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Analytics />
          <Toaster />
          {children}
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
  );
}
