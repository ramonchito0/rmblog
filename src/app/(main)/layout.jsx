import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "RM Blog Template",
  description: "",
};

export default function RootLayout({ children }) {
  return (
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
  );
}
