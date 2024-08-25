"use client";

import { Button } from "@/components/ui/button";
import {
  FileTextIcon,
  StarIcon,
  FolderIcon,
  ImageIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="grid min-h-screen w-full"
      style={{ gridTemplateColumns: collapsed ? "80px 1fr" : "250px 1fr" }}
    >
      <div className="flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40 transition-all duration-300">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <FileTextIcon className="h-6 w-6" />
            {!collapsed && <span className="">Dashboard</span>}
          </Link>
        </div>
        <div className="flex-grow">
          <div className="flex flex-col gap-2 p-4">
            <Button asChild className="justify-start" variant="ghost">
              <Link href="#">
                <FileTextIcon className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Posts</span>}
              </Link>
            </Button>
            <Button asChild className="justify-start" variant="ghost">
              <Link href="#">
                <StarIcon className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Featured Posts</span>}
              </Link>
            </Button>
            <Button asChild className="justify-start" variant="ghost">
              <Link href="#">
                <FolderIcon className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Categories</span>}
              </Link>
            </Button>
            <Button asChild className="justify-start" variant="ghost">
              <Link href="#">
                <ImageIcon className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Media</span>}
              </Link>
            </Button>
            <Button asChild className="justify-start" variant="ghost">
              <Link href="#">
                <SettingsIcon className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Settings</span>}
              </Link>
            </Button>
          </div>
        </div>
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
            <h1 className="font-semibold text-lg">Dashboard</h1>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg p-4">
            <h2 className="font-semibold text-lg mb-4">
              Welcome to your Dashboard
            </h2>
            <p>Select an option from the sidebar to manage your content.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
