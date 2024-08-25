"use client";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Heading from "../Heading";
import { useState } from "react";

export default function CommentForm({ postSlug }) {
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
  };
  return (
    <>
      <div className="space-y-5">
        <Heading>Comments</Heading>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-2">Your Message</Label>
          <Textarea
            placeholder="Type your message here."
            onChange={(e) => setDesc(e.target.value)}
          />
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
