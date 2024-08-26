import "./globals.css";
import { lato } from "@/components/fonts";
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
