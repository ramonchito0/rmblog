"use client";
import {
  Power,
  FileTextIcon,
  StarIcon,
  FolderIcon,
  ImageIcon,
  SettingsIcon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SidebarNav({ collapsed }) {
  const pathname = usePathname();

  const navItems = [
    {
      link: "/dashboard/posts",
      label: "Posts",
      icon: <FileTextIcon className="h-4 w-4" />,
    },
    {
      link: "/dashboard/featured-posts",
      label: "Featured Posts",
      icon: <StarIcon className="h-4 w-4" />,
    },
    {
      link: "/dashboard/categories",
      label: "Categories",
      icon: <FolderIcon className="h-4 w-4" />,
    },
    {
      link: "/dashboard/media",
      label: "Media",
      icon: <ImageIcon className="h-4 w-4" />,
    },
    {
      link: "/dashboard/settings",
      label: "Settings",
      icon: <SettingsIcon className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <div className="flex-grow">
        <div className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <React.Fragment key={item.link}>
              <Button
                asChild
                className="justify-start"
                variant={pathname === item.link ? "secondary" : "ghost"}
              >
                <Link href={item.link}>
                  {item.icon}
                  {!collapsed && <span className="ml-2">{item.label}</span>}
                </Link>
              </Button>
            </React.Fragment>
          ))}

          <Button className="justify-start" variant="ghost" onClick={signOut}>
            <Power className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Sign Out</span>}
          </Button>
        </div>
      </div>
    </>
  );
}
