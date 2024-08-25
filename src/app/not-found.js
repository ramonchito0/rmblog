import ContentWrapper from "@/components/ContentWrapper";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <ContentWrapper>
      <div className="space-y-5 px-5 py-6 lg:py-10 mx-auto text-center">
        <Heading tag="h1">Not Found</Heading>
        <p>Could not find requested resource</p>
        <Button variant="outline" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </ContentWrapper>
  );
}
