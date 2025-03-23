"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group bg-dark-1 border-none text-white"
      style={
        {
          // Set the basic styles you want
          "--normal-bg": "var(--dark-1)",
          "--normal-text": "white",
          "--normal-border": "transparent",
          "--toast-bg": "var(--dark-1)",
          "--toast-text": "white",
          "--toast-border": "transparent",
          "--toast-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
