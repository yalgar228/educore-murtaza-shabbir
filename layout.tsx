import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "EduCore AI - By MURTAZA SHABBIR | $50k Premium School OS",
  description: "Premium School OS Developed by MURTAZA SHABBIR - Healthcare Diagnostic Services Jhelum",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
