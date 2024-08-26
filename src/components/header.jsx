"use client";
import Link from "next/link";
import ContentWrapper from "./ContentWrapper";
import { oswald } from "./fonts";
import { ModeToggle } from "./ui/darkmode";
import { buttonVariants } from "./ui/button";
import { useState } from "react";
import { X, User, LogIn, LogOut, AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";
import Nav from "./Nav";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { data, status } = useSession();
  return (
    <>
      <ContentWrapper
        className={`${cn("bg-background dark:bg-transparent py-4 lg:py-5 relative", open && "dark:bg-background backdrop-blur-md fixed inset-x-0 top-0 z-50")}`}
        tag="header"
      >
        <div className="grid grid-cols-2 items-center lg:grid-cols-3">
          <p className={`${oswald.className} text-3xl font-bold text-primary`}>
            <Link href="/">
              RM<span className="text-secondary-foreground">BLOG</span>
            </Link>
          </p>
          <div className="hidden lg:flex justify-center">
            <Nav />
          </div>

          <div className="flex justify-end items-center">
            <span className="block lg:hidden" onClick={() => setOpen(!open)}>
              {open ? (
                <X size={25} strokeWidth={1.25} className="transition-all" />
              ) : (
                <AlignJustify
                  size={25}
                  strokeWidth={1.25}
                  className="transition-all"
                />
              )}

              <span className="sr-only">toggle</span>
            </span>
            <div className="hidden lg:flex gap-2 items-center">
              <ModeToggle variant="link" />
              {status === "unauthenticated" ? (
                <Link href="/login/" className={buttonVariants({ size: "sm" })}>
                  Login <LogIn className="ml-2 h-4 w-4" />
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="w-8 h-8 ">
                      <AvatarImage src={data?.user?.image} />
                      <AvatarFallback>{data?.user?.name}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/dashboard" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button onClick={signOut} className="flex items-center">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </ContentWrapper>
      <div
        className={`${cn("invisible fixed top-[68px] inset-x-0 bg-background/80 backdrop-blur-md z-50 h-screen lg:hidden text-center px-5 py-10", open && "visible")}`}
      >
        <Nav className="flex-col" />
      </div>
    </>
  );
}
