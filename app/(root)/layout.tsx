import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StreamLine",
  description: "Video Conferencing app",
  icons: {
    icon: "/icons/duo-logo.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}
