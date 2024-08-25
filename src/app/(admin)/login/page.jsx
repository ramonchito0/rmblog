"use client";
import ContentWrapper from "@/components/ContentWrapper";

import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function loginPage() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <>
      <ContentWrapper tag="main">
        <LoginForm />
      </ContentWrapper>
    </>
  );
}
