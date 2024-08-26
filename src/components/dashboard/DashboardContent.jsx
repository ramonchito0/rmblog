"use client";

import { oswald } from "@/components/fonts";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SidebarNav from "./SidebarNav";

export default function DashboardContent({ children, title }) {
  const [collapsed, setCollapsed] = useState(false);
  const { status } = useSession();
  const router = useRouter();
  if (status == "unauthenticated") {
    router.push("/");
  }

  return (
    <div
      className="grid min-h-screen w-full"
      style={{ gridTemplateColumns: collapsed ? "80px 1fr" : "250px 1fr" }}
    >
      <div className="flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40 transition-all duration-300">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link
            className={`${oswald.className} flex items-center gap-2 font-bold`}
            href="/"
          >
            {collapsed ? (
              <span className="text-primary text-3xl">
                R<span className="text-secondary-foreground">B</span>
              </span>
            ) : (
              <span className="text-primary text-3xl">
                RM<span className="text-secondary-foreground">BLOG</span>
              </span>
            )}
          </Link>
        </div>
        <SidebarNav collapsed={collapsed} />

        <Button
          className="m-4"
          onClick={() => setCollapsed(!collapsed)}
          size="icon"
          variant="outline"
        >
          {collapsed ? (
            <ChevronRightIcon className="h-4 w-4" />
          ) : (
            <ChevronLeftIcon className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="flex-1">
            <h1 className="font-semibold text-lg">{title}</h1>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg p-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
