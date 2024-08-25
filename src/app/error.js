"use client"; // Error boundaries must be Client Components

import ContentWrapper from "@/components/ContentWrapper";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ContentWrapper>
      <div className="space-y-5 px-5 py-6 lg:py-10 mx-auto text-center">
        <Heading tag="h1">Something went wrong!</Heading>
        <Button
          variant="outline"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </ContentWrapper>
  );
}
