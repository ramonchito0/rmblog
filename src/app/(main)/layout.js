import Header from "@/components/header";
import Footer from "@/components/footer";
import { lato } from "@/components/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "RM Blog Template",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
