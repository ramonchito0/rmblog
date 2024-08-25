import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
