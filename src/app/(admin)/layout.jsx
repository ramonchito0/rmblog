import AuthProvider from "@/components/AuthProvider";
import DashboardContent from "@/components/dashboard/DashboardContent";

export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <DashboardContent title={metadata.title}>{children}</DashboardContent>
    </AuthProvider>
  );
}
