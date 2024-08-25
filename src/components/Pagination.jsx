"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-5">
      <Button
        variant="outline"
        size="sm"
        disabled={!hasPrev}
        onClick={() => router.push(`/?page=${page - 1}`, { scroll: false })}
      >
        Prev
      </Button>
      <Button
        variant="outline"
        size="sm"
        disabled={!hasNext}
        onClick={() => router.push(`/?page=${page + 1}`, { scroll: false })}
      >
        Next
      </Button>
    </div>
  );
}
