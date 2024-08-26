"use client";
import ContentWrapper from "@/components/ContentWrapper";

import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function loginPage() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/dashboard");
  }
  return (
    <>
      <ContentWrapper tag="main">
        {status === "loading" && <div>Loading...</div>}
        {status === "unauthenticated" && <LoginForm />}
      </ContentWrapper>
    </>
  );
}
